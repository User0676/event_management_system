
from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200)
    date = models.DateTimeField()
    image_url = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.title

