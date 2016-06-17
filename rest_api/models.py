from django.db import models

class Song(models.Model):
    added = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    artist = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        ordering = ('added',)
