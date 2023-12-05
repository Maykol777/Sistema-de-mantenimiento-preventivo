"""
URL configuration for practica project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include

from . import views


urlpatterns = [
    path('', views.iniciar_sesion, name='iniciar_sesion'),
    path('recuperar_contrasenia', views.recuperar_contrasenia, name='recuperar_contrasenia'),
    path('cerrar_sesion', views.cerrar_sesion, name='cerrar_sesion'),
    path('crear_usuario', views.crear_usuario, name='crear_usuario'),
]
