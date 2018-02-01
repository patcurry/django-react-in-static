from django.core import serializers
from django.views import View
from django.shortcuts import render

from blog.models import Post

class Index(View):
    """
    So, I should be able to pass all of the stuff I want displayed
    here to the props variable, as json, right?
    """
    title = 'index'
    template = 'index.html'
    component = 'bundle.js'

    def get(self, request):
        # gets passed to react via window.props
        # now, I need to set props to a JSON serialized version of an actual model

        props = serializers.serialize('json', Post.objects.all(), fields=('title', 'text'))

#        props = {
#            'users': [
#                {'username': 'alice'},
#                {'username': 'bob'},
#            ]
#        }

        context = {
            'title': self.title,
            'component': self.component,
            'props': props,
        }

        return render(request, self.template, context)
