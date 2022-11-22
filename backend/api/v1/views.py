from django.contrib.auth import get_user_model
from djoser.views import UserViewSet
from .permissions import IsOwnerOrReadOnly
from .serializers import CustomUserSerializer

User = get_user_model()


class CustomUserViewSet(UserViewSet):
    http_method_names = ['get', 'post', 'patch']
    queryset = User.objects.all()
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CustomUserSerializer
