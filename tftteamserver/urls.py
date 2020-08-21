from django.urls import path

from . import views

urlpatterns = [
    path('api/champ/', views.ChampionListCreate.as_view()),
    path('api/trait/', views.TraitListCreate.as_view()),
    path('api/items/', views.ItemListCreate.as_view()),
    path('api/', views.index)
]
