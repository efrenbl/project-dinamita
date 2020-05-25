from django.contrib import admin

# Register your models here.

from .models import Article, CommentModel

admin.site.register(Article)
admin.site.register(CommentModel)