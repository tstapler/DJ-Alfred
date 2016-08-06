from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_api.models import Song, Event, Playlist
from rest_api import serializers



class SongViewSet(viewsets.ModelViewSet):
    """
    A Simple viewSet for viewing and editing Songs
    """
    queryset = Song.objects.all()
    serializer_class = serializers.SongSerializer

class PlaylistViewSet(viewsets.ModelViewSet):
    """
    A Simple viewSet for viewing and editing playlists
    """
    queryset = Playlist.objects.all()
    serializer_class = serializers.PlaylistSerializer

class EventViewSet(viewsets.ModelViewSet):
    """
    A Simple viewSet for viewing and editing Events
    """
    queryset = Event.objects.all()
    serializer_class = serializers.EventSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    A Simple viewSet for viewing and editing Users for Api
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
