from rest_framework import serializers
from django.db import models

# Create your models here. 
class User(models.Model):
    first_name = models.CharField(max_length=20, default="")
    last_name = models.CharField(max_length=20, default="")
    email = models.EmailField(max_length=50, default="")
    phone = models.CharField(max_length=50, default="")
    address = models.CharField(max_length=50, default="")
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'firstname','lastname','email', 'phone', 'address')