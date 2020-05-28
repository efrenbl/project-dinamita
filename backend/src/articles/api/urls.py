from django.urls import path

from .views import ArticleListView, ArticleDetailView , CommentCreateView

urlpatterns = [
    path('articles/', ArticleListView.as_view()),
    path('articles/<pk>/', ArticleDetailView.as_view()),
    path('articles/<pk>/comment/', CommentCreateView.as_view()),
]