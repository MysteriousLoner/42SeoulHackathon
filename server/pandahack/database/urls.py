from django.urls import path
from . import views

urlpatterns = [
    path('totalContributions/', views.total_contributions),
    path('decreaseBambooCount/', views.decreaseBambooCount),
    path('queryBambooCount/', views.queryBambooCount),
    path('receiveOrder/', views.receiveOrder),
]