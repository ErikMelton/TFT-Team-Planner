from django.db import models


class Champion(models.Model):
    name = models.CharField(max_length=30)
    championId = models.CharField(primary_key=True, max_length=35, default="")
    cost = models.PositiveIntegerField(default=0)
    traits = models.ManyToManyField('Trait', related_name='traits')

    def __str__(self):
        return self.name


class Trait(models.Model):
    name = models.CharField(primary_key=True, max_length=20)


class Item(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=40)
