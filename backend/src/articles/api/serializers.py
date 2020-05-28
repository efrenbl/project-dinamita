from rest_framework.serializers import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from articles.models import Article

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('id',
            'title',
            'content',
            'category',
            'url',
            'source',
            'publication_date')

class ArticleDetailSerializer(ModelSerializer):
  #  comments = SerializerMethodField()
    class Meta:
        model = Article
        fields = ['id',
            'title',
            'content',
            'category',
            'url',
            'source',
            'publication_date',
            #'comments',
            ]