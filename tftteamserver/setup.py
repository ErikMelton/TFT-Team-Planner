import json
import io

from rest_framework.parsers import JSONParser

from tftteamserver.serializers import ItemSerializer


def import_items():
    raw_json = open('tftteamserver/fixtures/items.json')
    parsed_json = json.load(raw_json)
    json_bytes = bytes(json.dumps(parsed_json), 'utf-8')

    stream = io.BytesIO(json_bytes)
    data = JSONParser().parse(stream)
    serializer = ItemSerializer(data=data, many=True)
    valid = serializer.is_valid()

    if valid:
        serializer.save()