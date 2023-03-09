from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BlogSerializer
from .models import Post

# Create your views here.
class blog_view_set(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = BlogSerializer