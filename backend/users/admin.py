from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.contrib.auth.models import Group

from .models import User


class UserCreationForm(forms.ModelForm):
    """Форма для создания нового пользователя через панель администратора."""
    password1 = forms.CharField(
        label='Password',
        widget=forms.PasswordInput
    )
    password2 = forms.CharField(
        label='Password confirmation',
        widget=forms.PasswordInput
    )

    class Meta:
        model = User
        fields = ('username',)

    def clean_password2(self):
        """Валидация пароля."""
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        """Сохранение пользователя."""
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    """Форма изменения пароля."""
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('username',)

    def clean_password(self):
        return self.initial['password']


class UserAdmin(BaseUserAdmin):
    """Админ панель пользователя."""
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('username', 'is_admin')
    list_filter = ('is_admin',)
    fieldsets = (
        ('Personal info', {
            'fields': (
                'username', 'email', 'name', 'phone_number',
                'is_admin', 'is_superuser', 'is_active',
            )
        }),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'username', 'email', 'name', 'phone_number',
                'is_admin', 'is_superuser', 'is_active',
            )}
         ),
    )
    search_fields = ('username',)
    ordering = ('username',)
    filter_horizontal = ()


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)