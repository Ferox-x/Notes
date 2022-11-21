from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager,
                                        PermissionsMixin)
from django.db import models
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField


class CustomUserManager(BaseUserManager):
    """
    Custom user manager.
    Validate data and create new user entry.
    """
    def _create_user(self, email, username, password, **kwargs):
        """Validate data before create new entry."""
        email = self.normalize_email(email)
        is_staff = kwargs.pop('is_staff', False)
        is_superuser = kwargs.pop('is_superuser', False)
        user = self.model(
            email=email,
            username=username,
            is_staff=is_staff,
            is_superuser=is_superuser,
            is_active=True,
            **kwargs
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, email, username, password, **kwargs):
        """Creating a user."""
        return self._create_user(email, username, password, **kwargs)

    def create_superuser(self, email, username, password, **kwargs):
        """Creating a superuser."""
        return self._create_user(
            email=email, username=username, password=password,
            is_staff=True, is_superuser=True, **kwargs
        )


class User(AbstractBaseUser, PermissionsMixin):
    """
    Stores a single custom user entry.
    Required fields:
    - email, username, phone_number, name.
    """
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
        verbose_name=_('Full Name'),
    )
    phone_number = PhoneNumberField(
        unique=True,
        verbose_name=_('Phone number')
    )
    image = models.ImageField(          # TODO: make base64 field format.
        upload_to='user_images',
        default='default.png',
        verbose_name=_('Profile image')
    )

    is_active = models.BooleanField(
        _('active status'),
        default=True,
    )
    is_superuser = models.BooleanField(
        _('superuser status'),
        default=False,
    )
    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
    )

    objects = CustomUserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'name', 'phone_number']

    @property
    def is_admin(self) -> bool:
        """Declare that it can be accessed like it's a regular property."""
        return bool(self.is_superuser)

    def __str__(self) -> str:
        """Return string representation of the object."""
        return f'{self.username}'

    class Meta:
        ordering = ['-id']
        verbose_name = _('User')
        verbose_name_plural = _('Users')
        db_table = 'users'
