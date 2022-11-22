from api.v2.views import NoteViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

app_name = 'v2'

v2 = DefaultRouter()

v2.register('note', NoteViewSet, basename='user')

urlpatterns = [
    path('', include(v2.urls))
]
