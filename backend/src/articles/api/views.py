from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action

#(
 #   ListAPIView
  #  RetrieveAPIView,
  #  RetrieveUpdateAPIView,
  #  )

from django.db.models import Q

from articles.models import Article, Comment
from .serializers import ArticleSerializer, ArticleDetailSerializer, CommentSerializer

from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination,
)

class ArticleListView(ListAPIView):
    serializer_class = ArticleSerializer
    pagination_class = LimitOffsetPagination #PageNumberPagination

    def get_queryset(self, *args, **kwargs):
        queryset_list = Article.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                 Q(category__icontains=query)
            ).distinct()
        return queryset_list

class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleDetailSerializer

    @action(detail=True, methods=['post'])
    def set_comment(self, request, pk=None):

        #get post object
        my_post = self.get_object()  
        serializer = CommentSerializer(data=request.data)                 
        if serializer.is_valid():
            serializer.save(post=my_post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)