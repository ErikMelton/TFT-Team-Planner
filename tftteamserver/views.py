import io
import json

from rest_framework.parsers import JSONParser
from django.shortcuts import render
from rest_framework import generics

from .models import Champion, Trait, Item
from .serializers import ChampionSerializer, ItemSerializer, TraitSerializer


# import_items()


def index(request):
    raw_json = open('tftteamserver/fixtures/champions.json')
    parsed_json = json.load(raw_json)
    json_bytes = bytes(json.dumps(parsed_json), 'utf-8')

    stream = io.BytesIO(json_bytes)
    data = JSONParser().parse(stream)
    serializer = ChampionSerializer(data=data, many=True)
    valid = serializer.is_valid()
    if valid:
        serializer.save()

    return render(request, 'tftteamserver/index.html', {
        'valid': valid,
        'data': serializer.validated_data,
        'errors': serializer.errors
    })


class ChampionListCreate(generics.ListCreateAPIView):
    queryset = Champion.objects.all()
    serializer_class = ChampionSerializer


class TraitListCreate(generics.ListCreateAPIView):
    queryset = Trait.objects.all()
    serializer_class = TraitSerializer


class ItemListCreate(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
