from rest_framework.generics import ListAPIView, RetrieveAPIView

from django.db.models import Q

from articles.models import Article
from .serializers import ArticleSerializer

class ArticleListView(ListAPIView):
    serializer_class = ArticleSerializer

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
    serializer_class = ArticleSerializer