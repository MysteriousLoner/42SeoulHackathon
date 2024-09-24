from django.urls import path
from . import views

urlpatterns = [
    path('queryUserInfo/', views.queryUserInfo),
    path('queryBambooCount/', views.queryBambooCount),
]