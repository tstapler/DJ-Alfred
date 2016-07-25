from django.db import models

class Song(models.Model):
    submission_time = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    artist = models.CharField(max_length=100, blank=True, default='')
    votes = models.IntegerField(default=0)
    def __str__(self):
        return '%d: %s' % (self.id, self.title)

    class Meta:
        ordering = ('submission_time',)

class Playlist(models.Model):
    songs = models.ManyToManyField(Song)
    name = models.CharField(max_length=100, blank=True, default='')
    owner = models.CharField(max_length=100, blank=True, default='')
    created_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return '%d: %s' % (self.id, self.name)

    class Meta:
        ordering = ('created_date',)


class Event(models.Model):
    playlists = models.ManyToManyField(Playlist)
    date_time_start = models.DateTimeField()
    date_time_end = models.DateTimeField()
    name = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField(blank=True, default='')
    owner = models.CharField(max_length=100, blank=True, default='')
    def __str__(self):
        return '%d: %s' % (self.id, self.name)

    class Meta:
        ordering = ('date_time_start',)
