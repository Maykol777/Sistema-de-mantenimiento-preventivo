# Generated by Django 4.2.6 on 2023-11-01 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appcatastro', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catastroequipomedico',
            name='numero_inventario',
            field=models.CharField(max_length=100),
        ),
    ]