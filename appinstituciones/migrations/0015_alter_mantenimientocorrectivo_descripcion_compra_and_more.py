# Generated by Django 4.2.6 on 2023-12-05 04:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appinstituciones', '0014_alter_mantenimientocorrectivo_descripcion_compra_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='descripcion_compra',
            field=models.CharField(blank=True, default=1, max_length=250),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='establecimiento',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='servicio_salud',
            field=models.CharField(blank=True, max_length=200),
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
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='tipo_gasto_correctivo',
            field=models.CharField(default='', max_length=200),
        ),
    ]
