from django.urls import include, path, re_path
from rest_framework.routers import DefaultRouter

from .views import CustomUserViewSet

app_name = 'v1'

v1 = DefaultRouter()
v1.register('users', CustomUserViewSet, basename='users')

urlpatterns = [
    path('', include(v1.urls)),
    path('', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
]
