from django.contrib.auth.models import AbstractUser
from django.db import models

from appinstituciones.models import Institucion

class CustomUser(AbstractUser):
    # Agregar campos personalizados
    rut = models.CharField(max_length=12, blank=True)
    cargo = models.CharField(max_length=100, blank=True)
    
    institucion = models.ForeignKey(Institucion, on_delete=models.CASCADE, default=1)
    # Agregar otros campos que necesites

    class Meta:
        db_table = 'custom_user'  # Cambiar el nombre de la tabla para el modelo CustomUser

    # Cambiar el nombre de la tabla intermedia para evitar conflictos
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        db_table='custom_user_groups'  # Nombre de la tabla intermedia personalizado para grupos
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        db_table='custom_user_user_permissions'  # Nombre de la tabla intermedia personalizado para permisos de usuario
    )
    
    def get_cargo(self):
        return self.cargo

    def __str__(self):
        return self.username
