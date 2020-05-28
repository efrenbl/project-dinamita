from django.urls import path

from .views import ArticleListView # ArticleDetailView, ArticleUpdateView

urlpatterns = [
    path('articles/', ArticleListView.as_view()),
   # path('articles/<pk>/', ArticleDetailView.as_view()),
    #path('articles/<pk>/update/', ArticleUpdateView.as_view()),
]