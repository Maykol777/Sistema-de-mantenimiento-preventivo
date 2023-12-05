# Generated by Django 4.2.6 on 2023-12-05 05:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appinstituciones', '0019_alter_mantenimientocorrectivo_descripcion_compra_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='descripcion_compra',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='servicio_salud',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='subsignacion_sigfe',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='tipo',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
