# Generated by Django 3.1 on 2020-08-19 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tftteamserver', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trait',
            name='id',
        ),
        migrations.AlterField(
            model_name='trait',
            name='name',
            field=models.CharField(max_length=20, primary_key=True, serialize=False),
        ),
    ]
