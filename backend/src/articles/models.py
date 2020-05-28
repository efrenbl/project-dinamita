
from __future__ import unicode_literals
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

from django.db import models

# Create your models here.

class Article(models.Model):
    #content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, default= 1)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE, default = 1)
    title = models.CharField(max_length = 120)
    content = models.TextField()
    category = models.CharField(max_length = 80, null=False, default="general")
    url = models.URLField(max_length = 200, blank=True)
    source = models.CharField(max_length = 100, blank=True, null=True)
    publication_date = models.DateField(blank=True, null=True)

    #objects = ArticleManager()

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title