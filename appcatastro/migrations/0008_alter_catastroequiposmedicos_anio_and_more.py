# Generated by Django 4.2.6 on 2023-11-24 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appcatastro', '0007_catastroambulancias'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='anio',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='clase',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='criticidad',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='eliminado',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='estado',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='garantia',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='id_convenio',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='id_institucion',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='marca',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='modelo',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='nombre',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='numero_inventario',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='plan_mantencion',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='propietario',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='serie',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='sub_clase',
            field=models.CharField(blank=True, max_length=70),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='sub_ubicacion',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='tipo_equipo',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='ubicacion',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='vencimiento_garantia',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='catastroequiposmedicos',
            name='vida_util',
            field=models.IntegerField(null=True),
        ),
    ]
