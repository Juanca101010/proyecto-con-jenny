from django.urls import path 
from . import views 

app_name = 'app' 
urlpatterns = [
    path('posiciones1', views.posiciones1, name='posiciones1'), 
    path('', views.principal, name='principal'), 
]