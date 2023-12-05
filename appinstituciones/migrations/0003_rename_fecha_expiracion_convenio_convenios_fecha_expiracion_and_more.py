# Generated by Django 4.2.6 on 2023-12-03 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appinstituciones', '0002_convenios'),
    ]

    operations = [
        migrations.RenameField(
            model_name='convenios',
            old_name='fecha_expiracion_convenio',
            new_name='fecha_expiracion',
        ),
        migrations.RenameField(
            model_name='convenios',
            old_name='nombre_convenio_mantenimiento',
            new_name='nombre_convenio',
        ),
        migrations.RemoveField(
            model_name='convenios',
            name='numero',
        ),
        migrations.RemoveField(
            model_name='convenios',
            name='numero_resolucion',
        ),
        migrations.AddField(
            model_name='convenios',
            name='establecimiento',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='convenios',
            name='orden_compra',
            field=models.CharField(default='', max_length=150),
        ),
    ]
