from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=256, null=True, blank=True)
    text = models.TextField(null=True)
