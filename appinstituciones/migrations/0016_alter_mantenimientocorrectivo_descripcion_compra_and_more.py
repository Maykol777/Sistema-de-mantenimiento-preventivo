# Generated by Django 4.2.6 on 2023-12-05 04:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appinstituciones', '0015_alter_mantenimientocorrectivo_descripcion_compra_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='descripcion_compra',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='tipo_gasto_correctivo',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
