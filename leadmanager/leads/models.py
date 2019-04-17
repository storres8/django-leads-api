from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=256)
