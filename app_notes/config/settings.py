from os import path
from pathlib import Path

from dotenv import dotenv_values

BASE_DIR = Path(__file__).resolve().parent.parent

config_env = dotenv_values(path.join(BASE_DIR.parent, 'docker', '.env'))

SECRET_KEY = config_env.get('SECRET_KEY', 'secret_key')

DEBUG = int(config_env.get('DEBUG', False))

ALLOWED_HOSTS = config_env.get('ALLOWED_HOSTS', 'localhost').split()

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'debug_toolbar',
    'rest_framework',
    'phonenumber_field',

    'users',
    'frontend_django',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'debug_toolbar.middleware.DebugToolbarMiddleware'
]

ROOT_URLCONF = 'config.urls'

TEMPLATES_DIR = path.join(BASE_DIR, 'templates')

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATES_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': config_env.get(
            'DB_ENGINE',
            'django.db.backends.postgresql_psycopg2'
        ),
        'NAME': config_env.get('DB_NAME', 'postgres'),
        'USER': config_env.get('POSTGRES_USER', 'postgres'),
        'PASSWORD': config_env.get('POSTGRES_PASSWORD', 'postgres'),
        'HOST': config_env.get('DB_HOST', 'localhost'),
        'PORT': config_env.get('DB_PORT', '5432'),
    }
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {filename} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },

    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
        'file': {
            'class': 'logging.FileHandler',
            'formatter': 'verbose',
            'filename': 'logs.log',
        },
    },

    'loggers': {
        'django': {
            'handlers': ['console', 'file'],
            'level': config_env.get('DJANGO_LOG_LEVEL', 'INFO'),
            'propagate': False,
        },
    },
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATICFILES_DIRS = [path.join(BASE_DIR, 'static')]
STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

MEDIA_URL = '/media/'
MEDIA_ROOT = path.join(BASE_DIR, 'media')

INTERNAL_IPS = [
    '127.0.0.1',
]

LOGIN_URL = 'users:login'
LOGIN_REDIRECT_URL = '/'
AUTH_USER_MODEL = 'users.User'

ADMIN_EMAIL = config_env.get('ADMIN_EMAIL')
