# Generated by Django 4.2.6 on 2023-12-04 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appinstituciones', '0007_alter_convenios_monto_anual'),
    ]

    operations = [
        migrations.CreateModel(
            name='MantenimientoCorrectivo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('servicio_salud', models.CharField(blank=True, max_length=200)),
                ('establecimiento', models.CharField(default='', max_length=200)),
                ('descripcion_compra', models.CharField(blank=True, max_length=250)),
                ('tipo_gasto_correctivo', models.CharField(blank=True, max_length=200)),
                ('monto', models.BigIntegerField()),
                ('subsignacion_sigfe', models.CharField(blank=True, max_length=200)),
                ('tipo', models.CharField(blank=True, max_length=100)),
                ('id_institucion', models.IntegerField(default=0)),
            ],
        ),
    ]