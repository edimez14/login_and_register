# Generated by Django 5.1.1 on 2024-09-28 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='login',
            name='firtName',
            field=models.CharField(default='SinNombre', max_length=200),
        ),
        migrations.AddField(
            model_name='login',
            name='lastName',
            field=models.CharField(default='SinNombre', max_length=200),
        ),
        migrations.AddField(
            model_name='login',
            name='numberPhone',
            field=models.CharField(default='SinNombre', max_length=10),
        ),
        migrations.AddField(
            model_name='login',
            name='userName',
            field=models.CharField(default='SinNombre', max_length=200),
        ),
    ]
