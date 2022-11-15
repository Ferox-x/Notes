from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import (AuthenticationForm, PasswordChangeForm,
                                       UserCreationForm)
from phonenumber_field.formfields import PhoneNumberField

User = get_user_model()


class UserSignupForm(UserCreationForm):
    """Форма регистрации пользователя."""

    phone_number = PhoneNumberField()

    class Meta:
        model = User
        fields = [
            'username', 'password1', 'password2',
            'email', 'phone_number'
        ]

    def __init__(self, *args, **kwargs):
        super(UserSignupForm, self).__init__(*args, **kwargs)


class UserLoginForm(AuthenticationForm):
    """Форма аутентификации пользователя."""
    class Meta:
        model = User
        fields = ['username', 'password']


class UserPasswordChangeForm(PasswordChangeForm):
    """Форма смены пароля."""
    class Meta:
        model = User
        fields = ['old_password', 'new_password1', 'new_password2']

    def __init__(self, *args, **kwargs):
        super(UserPasswordChangeForm, self).__init__(*args, **kwargs)
        (self.fields['old_password']
            .widget.attrs['placeholder']) = 'old password'
        (self.fields['new_password1']
            .widget.attrs['placeholder']) = 'new password'
        (self.fields['new_password2']
            .widget.attrs['placeholder']) = 'repeat new password'


# class ProfileDataForm(forms.ModelForm):
#     """Форма данных в профиле."""
#     class Meta:
#         model = User
#         fields = ('username', 'email')
#
#     def __init__(self, *args, **kwargs):
#         super(ProfileDataForm, self).__init__(*args, **kwargs)
#         (self.fields['username']
#             .widget.attrs['class']) = 'profile_info_username display'
#         (self.fields['description']
#             .widget.attrs['class']) = 'profile_info_description display'
#         (self.fields['full_name']
#             .widget.attrs['class']) = 'profile_addinfo_right display'
#         (self.fields['email']
#             .widget.attrs['class']) = 'profile_addinfo_right display'
#         (self.fields['country']
#             .widget.attrs['class']) = 'profile_addinfo_right display'


class ProfileImageForm(forms.ModelForm):
    """Форма изображения в профиле."""
    image = forms.ImageField(required=False)

    class Meta:
        model = User
        fields = ('image', )

    def __init__(self, *args, **kwargs):
        super(ProfileImageForm, self).__init__(*args, **kwargs)
        self.fields['image'].widget.attrs['id'] = 'fileInput'
        self.fields['image'].widget.attrs['hidden'] = True
        self.fields['image'].label = False
