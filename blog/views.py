from django.shortcuts import render


def index(request):
    context = {'yeah': 'no'}
    return render(request, 'index.html', context)
