from django.db import models

# Create your models here.
# Create your models here.
class Post(models.Model):
    """Post object"""
    title = models.CharField(max_length=255)
    post_text = models.TextField()
    # displays an instance of the model when necessary
    def __str__(self):
        return self.title