from rest_framework import serializers
from django.db import models
from django.contrib.auth.models import User

# Create your models here. 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'firstname','lastname','email', 'phone', 'address')

class Special(models.Model):
    expiration = models.DateTimeField(auto_now_add=True)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, blank=True)
    percentage = models.DecimalField(
        max_digits=2, decimal_places=1, default=0, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Coupon(models.Model):
    expiration = models.DateTimeField(auto_now_add=True)
    usage_count = models.IntegerField(default=0, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
class Transaction(models.Model):
    product = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True)
    special = models.ForeignKey(
        Special, on_delete=models.CASCADE, blank=True)
    shoppingCart = models.ForeignKey(
        ShoppingCart, on_delete=models.CASCADE, blank=True)
    coupon = models.ForeignKey(
        Coupon, on_delete=models.CASCADE, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)