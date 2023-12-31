# Generated by Django 4.2.6 on 2023-12-03 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appinstituciones', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Convenios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.IntegerField()),
                ('servicio_salud', models.CharField(max_length=200)),
                ('nombre_convenio_mantenimiento', models.CharField(max_length=250)),
                ('numero_resolucion', models.IntegerField()),
                ('fecha_resolucion', models.DateField()),
                ('fecha_expiracion_convenio', models.DateField()),
                ('monto_anual', models.IntegerField()),
                ('subsignacion_sigfe', models.CharField(max_length=200)),
            ],
        ),
    ]
