from django.test import TestCase

from blog.views import index
from blog.models import Post


class IndexViewTests(TestCase):
    
    def test_index_view_is_there(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)

class ModelTests(TestCase):
    
    def test_can_create_post(self):
        test_post = Post.objects.create(title="test post", text="This is a text post")
        self.assertEqual(test_post.text, Post.objects.get(title="test post").text)
