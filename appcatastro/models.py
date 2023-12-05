from django.db import models

# Create your models here.

class CatastroEquipoIndustriales(models.Model):
    servicio_clinico = models.CharField(max_length=200, blank=True)
    recinto = models.CharField(max_length=100, blank=True)
    clase = models.CharField(max_length=100, blank=True)
    subclase = models.CharField(max_length=100, blank=True)
    nombre_equipo = models.CharField(max_length=100, blank=True)
    marca = models.CharField(max_length=100, blank=True)
    modelo = models.CharField(max_length=100, blank=True)
    serie = models.CharField(max_length=100, blank=True)
    numero_inventario = models.CharField(max_length=100, blank=True)
    anio_adquisicion = models.CharField(max_length=100, blank=True)
    vida_util = models.IntegerField(null=True)
    vida_util_residual = models.IntegerField(null=True)
    propio = models.CharField(max_length=50, blank=True) # Propio - Arriendo Comodato
    estado = models.CharField(max_length=50, blank=True) # Bueno - Regular - Malo - Baja
    garantia = models.CharField(max_length=50, blank=True) # Si - No
    anio_vencimiento_garantia = models.IntegerField(null=True)
    bajo_plan_mantenimiento = models.CharField(max_length=50, blank=True) # Si - No
    id_institucion = models.IntegerField(null=True)
    
    
class CatastroEquiposMedicos(models.Model):
    ubicacion = models.CharField(max_length=100, blank=True)
    sub_ubicacion = models.CharField(max_length=100, blank=True)
    clase = models.CharField(max_length=50, blank=True)
    sub_clase = models.CharField(max_length=70, blank=True)
    nombre = models.CharField(max_length=100, blank=True)
    marca = models.CharField(max_length=100, blank=True)
    modelo = models.CharField(max_length=100, blank=True)
    serie = models.CharField(max_length=100, blank=True)
    numero_inventario = models.CharField(max_length=100, blank=True)
    anio = models.IntegerField(null=True)
    vida_util = models.IntegerField(null=True)
    propietario = models.CharField(max_length=100, blank=True)
    estado = models.CharField(max_length=100, blank=True)
    criticidad = models.CharField(max_length=100, blank=True)
    garantia = models.IntegerField(null=True)
    vencimiento_garantia = models.CharField(max_length=100, blank=True)
    plan_mantencion = models.IntegerField(null=True)
    tipo_equipo = models.CharField(max_length=100, blank=True)
    id_convenio = models.IntegerField(null=True)
    id_institucion = models.IntegerField(null=True)
    eliminado = models.IntegerField(null=True)
        
    
class CatastroAmbulancias(models.Model):
    ubicacion = models.CharField(max_length=100)
    sub_ubicacion = models.CharField(max_length=100)
    carroceria = models.CharField(max_length=100)
    clase = models.CharField(max_length=50)
    samu = models.CharField(max_length=4)
    funcion = models.CharField(max_length=100)
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    patente = models.CharField(max_length=50)
    numero_motor = models.CharField(max_length=100)
    # kilometraje = models.IntegerField()
    kilometraje = models.PositiveIntegerField()
    propietario = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    anio = models.IntegerField()
    vida_util = models.IntegerField()
    criticidad = models.CharField(max_length=100)
    garantia = models.IntegerField()
    vencimiento_garantia = models.CharField(max_length=100)
    plan_mantencion = models.IntegerField()
    tipo_equipo = models.CharField(max_length=100)
    id_convenio = models.IntegerField()
    id_institucion = models.IntegerField()
    eliminado = models.IntegerField()
    
    