from datetime import datetime
from multiprocessing import context
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from app.models import posiciones
from django.contrib.auth.decorators import login_required
from django.db.models import Q	
from django.contrib.auth.decorators import login_required

# def index(request):
#     return HttpResponse("Hola, mundo")

def posiciones1(request):
    # Obtiene los objetos
    posicioness = posiciones.objects.all()
    # Crea el contexto
    contexto ={
        'lista_posiciones': posicioness
    }
    
    # Envia el contexto al template
    return render(request, 'app/posiciones1.html', contexto)


def principal(request):

    return render(request, 'app/principal.html')


