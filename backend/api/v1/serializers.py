from django.contrib.auth import get_user_model
from djoser.serializers import UserSerializer
from services.base64image import Base64ImageField

User = get_user_model()


class CustomUserSerializer(UserSerializer):
    image = Base64ImageField()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'phone_number', 'image')
