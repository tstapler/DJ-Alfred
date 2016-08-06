from django.db import models


# Create your models here.
class SongSuggestion(models.Model):
    song_name = models.CharField(max_length=60)
    artist = models.CharField(max_length=60)
    votes = models.IntegerField()
    submission_time = models.DateTimeField(auto_now_add=True)
