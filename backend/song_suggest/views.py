from django.shortcuts import render


def index(request):
    return render(request, 'song_suggest/index.html')
