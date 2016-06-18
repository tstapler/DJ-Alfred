from rest_framework import serializers
from rest_api.models import Song

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ('id', 'title', 'added', 'artist')
