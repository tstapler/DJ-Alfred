from django.db import models

class Song(models.Model):
    submission_time = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    artist = models.CharField(max_length=100, blank=True, default='')
    votes = models.IntegerField(default=0)

    class Meta:
        ordering = ('submission_time',)

class Event(models.Model):
    date_time_start = models.DateTimeField()
    date_time_end = models.DateTimeField()
    name = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField(blank=True, default='')
    owner = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        ordering = ('date_time_start',)
