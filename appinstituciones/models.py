from django.db import models

# Create your models here.
class Institucion(models.Model):
    nombre = models.CharField(max_length=150)
    ciudad = models.CharField(max_length=150)
    region = models.CharField(max_length=200)
    
    def __str__(self) -> str:
        return self.nombre
    

class Convenios(models.Model):
    servicio_salud = models.CharField(max_length=200, blank=True)
    establecimiento = models.CharField(max_length=200, default='')
    nombre_convenio = models.CharField(max_length=250, blank=True)
    orden_compra = models.CharField(max_length=150, default='')
    fecha_resolucion = models.CharField(max_length=100, blank=True)
    fecha_expiracion = models.CharField(max_length=100, blank=True)
    monto_anual = models.BigIntegerField()
    subsignacion_sigfe = models.CharField(max_length=200, blank=True)
    tipo = models.CharField(max_length=100, blank=True) # Medico, Industrial, Vehiculo
    id_institucion = models.IntegerField(default=0)


class MantenimientoCorrectivo(models.Model):
    servicio_salud = models.CharField(max_length=200, blank=True)
    establecimiento = models.CharField(max_length=200, null=True, blank=True)
    descripcion_compra = models.CharField(max_length=250, blank=True, null=True)
    tipo_gasto_correctivo = models.CharField(max_length=200, default='')
    monto = models.BigIntegerField()
    subsignacion_sigfe = models.CharField(max_length=200, blank=True)
    tipo = models.CharField(max_length=100, blank=True)
    id_institucion = models.IntegerField(default=0)

 


