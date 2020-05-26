

from django.conf import settings
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models

# Create your models here.

""" class ArticleManager(models.Manager):
    def all(self):
        qs = super(ArticleManager, self)
        return qs
    
    def filter_by_instance(self, instance):
        content_type = ContentType.objects.get_for_models(instance.__class__)
        obj_id = instance.id
        qs = super(ArticleManager, self).filter(content_type=content_type, object_id = obj_id)
        return qs

 """
class Article(models.Model):
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, default= 1)
    title = models.CharField(max_length = 120)
    text = models.TextField()
    category = models.CharField(max_length = 80, null=False, default="general")
    url = models.URLField(max_length = 200, blank=True)
    source = models.CharField(max_length = 100, blank=True, null=True)
    publication_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title

    @property
    def comments(self):
        instance = self
        qs = Comment.objects.filter_by_instance(instance)
        return qs

    @property
    def get_content_type(self):
        instance = self
        content_type = ContentType.objects.get_for_model(instance.__class__)
        return content_type

   # objects = ArticleManager()

class CommentManager(models.Manager):
    def all(self):
        qs = super(CommentManager, self).filter(parent=None)
        return qs
    
    def filter_by_instance(self, instance):
        content_type = ContentType.objects.get_for_models(instance.__class__)
        obj_id = instance.id
        qs = super(CommentManager, self).filter(content_type=content_type, object_id = obj_id).filter(parent=None)
        return qs

class Comment(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE, default= 1)
    object_id = models.PositiveIntegerField(default = 1)
    content_object = GenericForeignKey('content_type', 'object_id')
    target_post = models.ForeignKey(Article, on_delete=models.SET_NULL, null=True)
    comment = models.TextField(blank=True, null=True)
    published_date = models.DateTimeField(auto_now_add=True)

    objects = CommentManager()