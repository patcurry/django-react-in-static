'''
from django.views import View
from django.shortcuts import render


class Index(View):
    title = 'Home'
    template = 'index.html'
    component = 'index.js'

    def get(self, request):
        props = {
            'stuff': [
                {'username': 'alice'},
                {'username': 'pat'},
               ]
           }

        context = {
            'title': self.title,
            'component': self.component,
            'props': props,
        }

        render(request, self.template, context)
'''
from django.views import View
from django.shortcuts import render


class Index(View):
    title = 'Leaderboard'
    template = 'index.html'
    component = 'index.js'

    def get(self, request):
        # gets passed to react via window.props
        props = {
            'users': [
                {'username': 'alice'},
                {'username': 'bob'},
            ]
        }

        context = {
            'title': self.title,
            'component': self.component,
            'props': props,
        }

        return render(request, self.template, context)
