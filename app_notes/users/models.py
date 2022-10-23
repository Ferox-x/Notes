from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField


class MyUserManager(BaseUserManager):
    """Менеджер отвечающий за регистрацию пользователя."""

    def create_user(self, username, password, **kwargs):
        """Создает обычного пользователя."""
        if not username:
            raise ValueError('Users must have an username')

        user = self.model(
            username=username,
            password=password,
            **kwargs
        )

        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password, **kwargs):
        """Создает супер юзера."""
        user = self.model(
            username=username,
            password=password,
            **kwargs
        )

        user.is_superuser = True
        user.is_admin = True
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    """Кастомная модель пользователя."""
    username = models.CharField(
        unique=True,
        max_length=50,
        verbose_name=_('Username')
    )
    email = models.EmailField(
        unique=True,
        verbose_name=_('Email address')
    )
    name = models.CharField(
        max_length=150,
        verbose_name=_('Name'),
        null=True
    )
    phone_number = PhoneNumberField(
        null=True,
        unique=True
    )
    image = models.ImageField(
        upload_to='user_images',
        default='default.png'
    )

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = MyUserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'name']

    @property
    def is_staff(self) -> bool:
        """Свойство проверяющее админ ли пользователь."""
        return self.is_admin

    def __str__(self) -> str:
        return self.username

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')
        db_table = 'users'
