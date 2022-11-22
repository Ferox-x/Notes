from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.v2.views import NoteViewSet

app_name = 'v2'

v2 = DefaultRouter()

v2.register('note', NoteViewSet, basename='user')

urlpatterns = [
    path('', include(v2.urls))
]


# urlpatterns = [
#     path('notes/', NotesViewSet.as_view({'get': 'list'}), name='notes_list'),
#     path('notes/<int:pk>', NotesViewSet.as_view({'get': 'retrieve'}), name='note_retrieve'),
#     path('note/create', NoteViewSet.as_view({'post': 'create'}), name='note_create'),
#     path('note/update/<int:pk>', NoteViewSet.as_view({'post': 'update'}), name='note_update'),
#     path('note/delete/<int:pk>', NoteViewSet.as_view({'delete': 'destroy'}), name='note_delete'),
# ]
