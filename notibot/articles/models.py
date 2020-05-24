from django.db import models

# Create your models here.

class Article(models.Model):
    title= models.CharField(max_length = 120)
    text = models.TextField()
    category = models.CharField(max_length = 80, null=False, default="general")
    url = models.URLField(max_length = 200, blank=True)
    source = models.CharField(max_length = 100, blank=True, null=True)
    publicationdate = models.DateField(blank=True, null=True)

   

    def __str__(self):
        return self.title
