# Generated by Django 4.2.6 on 2023-12-05 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appinstituciones', '0023_alter_mantenimientocorrectivo_tipo_gasto_correctivo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mantenimientocorrectivo',
            name='establecimiento',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
