from django.conf import settings
from django.contrib.auth import authenticate, get_user_model, login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import (LoginView, PasswordChangeView,
                                       PasswordResetView)
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView

from .forms import UserLoginForm, UserPasswordChangeForm, UserSignupForm

User = get_user_model()


@login_required()
def logout(request):
    """Представления выхода из системы."""
    auth_logout(request)
    success_url = '/'
    return redirect(success_url)


class CustomSignupView(CreateView):
    """Представление регистрации."""
    form_class = UserSignupForm
    success_url = reverse_lazy('/')

    def form_valid(self, form):
        user = authenticate(
            username=form.cleaned_data["username"],
            password=form.cleaned_data["password1"],
        )
        login(self.request, user)
        return super().form_valid(form)


class CustomLoginView(LoginView):
    """Представление входа."""
    form_class = UserLoginForm
    success_url = reverse_lazy('/')


class CustomPasswordsChangeView(PasswordChangeView):
    """Представление смены пароля в профиле."""
    form_class = UserPasswordChangeForm
    success_url = reverse_lazy('core:main')


class CustomPasswordResetView(PasswordResetView):
    """Представление восстановления пароля через email."""
    success_url = reverse_lazy('users:password_reset_done')
    email_template_name = 'registration/password_reset_email.html'
    from_email = settings.ADMIN_EMAIL


# class ProfileView(View):
#     """
#     Представление отображение профиля,
#     смены данных и изображение пользователя.
#
#     """
#     def get(self, request):
#         data_form = ProfileDataForm(instance=request.user)
#         image_form = ProfileImageForm()
#
#         context = {
#             'form': data_form,
#             'image': image_form
#         }
#         return render(request, 'users/profile.html', context)
#
#     def post(self, request):
#         data = ProfileDataForm(request.POST, instance=request.user)
#         image = ProfileImageForm()
#
#         if 'data' in request.POST:
#             if data.is_valid():
#                 data.save()
#
#             context = {
#                 'form': data,
#                 'image': image
#             }
#             return render(request, 'users/profile.html', context)
#
#         if 'image' in request.FILES:
#             post_image = request.FILES.get('image')
#             Profile.post_update_or_create_image(post_image, request)
#             return redirect('users:profile')


# class ProfileDetailView(DetailView):
#     model = User
#     template_name = 'users/profile_detail.html'
#     slug_field = 'username'
#     context_object_name = 'profile'
