from rest_framework import serializers
from rest_framework.serializers import SerializerMethodField

from articles.models import Article, Comment


class CommentSerializer(serializers.ModelSerializer):
    class meta:
        model = Comment
        fields = ['id','author','target_post','comment','publication_date']

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id','title','text','category','url','source','publication_date')

class ArticleDetailSerializer(serializers.ModelSerializer):
    #comments = SerializerMethodField()
    class Meta:
        model = Article
        fields = ('id','title','text','category','url','source','publication_date',)

    # def get_comments(self, obj):
    #     content_type = obj.get_content_type
    #     object_id = obj.id
    #     c_qs = Comment.object.filter_by_instance(obj)
    #     comments = CommentSerializer(c_qs, many=True).data
    #     return comments


