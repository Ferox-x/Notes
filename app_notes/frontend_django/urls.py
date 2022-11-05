from django.urls import path

from frontend_django.views import Index

urlpatterns = [
    path('', Index.as_view(), name='index'),
]
