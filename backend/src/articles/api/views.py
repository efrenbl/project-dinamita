from rest_framework.generics import ListAPIView

#(
 #   ListAPIView
  #  RetrieveAPIView,
  #  RetrieveUpdateAPIView,
  #  )

from django.db.models import Q

from articles.models import Article #Comment
from .serializers import ArticleSerializer #ArticleDetailSerializer

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