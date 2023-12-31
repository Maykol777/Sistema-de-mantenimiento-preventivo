# Generated by Django 4.2.6 on 2023-12-03 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appinstituciones', '0004_convenios_id_institucion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='convenios',
            name='fecha_expiracion',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='convenios',
            name='fecha_resolucion',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='convenios',
            name='nombre_convenio',
            field=models.CharField(blank=True, max_length=250),
        ),
        migrations.AlterField(
            model_name='convenios',
            name='servicio_salud',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='convenios',
            name='subsignacion_sigfe',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
