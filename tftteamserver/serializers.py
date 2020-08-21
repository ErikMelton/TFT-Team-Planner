from collections import OrderedDict

from django.db import IntegrityError
from rest_framework import serializers

from .models import Champion, Trait, Item


class TraitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trait
        fields = '__all__'


class ChampionSerializer(serializers.ModelSerializer):
    traits = TraitSerializer(many=True)

    class Meta:
        model = Champion
        fields = '__all__'
        depth = 1

    def create(self, validated_data):
        traits = validated_data.pop('traits')
        t_set = []

        for idx, item in enumerate(traits):
            try:
                t = Trait.objects.create(**item)
                t_set.append(t)
            except IntegrityError:
                t = Trait.objects.get(pk=item.get('name'))
                t_set.append(t)

        instance = Champion.objects.create(**validated_data)
        instance.traits.set(t_set)

        return instance


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

    def create(self, validated_data):
        return Item.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.id = validated_data.get('id', instance.id)
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
