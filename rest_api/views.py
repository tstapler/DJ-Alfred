from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_api.models import Song
from rest_api.serializers import SongSerializer, UserSerializer



class SongViewSet(viewsets.ModelViewSet):
    """
    A Simple viewSet for viewing and editing Songs
    """
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    A Simple viewSet for viewing and editing Users for Api
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
