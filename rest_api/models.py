from django.db import models

class Song(models.Model):
    added = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    artist = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        ordering = ('added',)

class Event(models.Model):
    date_time_start = models.DateTimeField()
    date_time_end = models.DateTimeField()
    name = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField(blank=True, default='')
    owner = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        ordering = ('date_time_start',)
