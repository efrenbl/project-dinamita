from rest_framework.serializers import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from articles.models import Article, Comment

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

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ("author",'content','publication_date')

class ArticleDetailSerializer(ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True, source='comment_set')
    class Meta:
        model = Article
        fields = ['id',
            'title',
            'content',
            'category',
            'url',
            'source',
            'publication_date',
            'comments'
            ]


    