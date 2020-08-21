# Generated by Django 3.1 on 2020-08-19 02:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tftteamserver', '0004_remove_champion_traits'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trait',
            name='champion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='traits', to='tftteamserver.champion'),
        ),
    ]