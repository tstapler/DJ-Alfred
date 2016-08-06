from django.conf.urls import url

from . import views

app_name = "song_suggest"
urlpatterns = [
    url(r'^$', views.index, name='index')
]
