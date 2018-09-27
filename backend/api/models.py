from rest_framework import serializers
from django.db import models

# Create your models here. 
class User(models.Model):
    first_name = models.CharField(max_length=20, default="")
    last_name = models.CharField(max_length=20, default="")
    email = models.EmailField(max_length=50, default="")
    phone = models.CharField(max_length=50, default="")
    address = models.CharField(max_length=50, default="")


class Product(models.Model):
    img = models.CharField()
    title = models.CharField()
    description = models.CharField()
    rating = models.DecimalField(max_digit = 2, decimal_places = 2)
    manufactor = models.CharField()
    price = models.DecimalField(max_digits= 10, decimal_places=2)
    quantity = models.PositiveIntegerField()

    
class ProductCategory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    
class Img(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    url = models.CharField()
    
class Rating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank = True)
    rating_int = models.PositiveIntegerField()
    comment = models.CharField(max_length =200)
    
class ShoppingCart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(User, on_delete = models.CASCADE, blank=True)
    quantity = models.PositiveIntegerField()
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    tracking = models.CharField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'firstname','lastname','email', 'phone', 'address')
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'img','title','description', 'rating', 'manufactor', 'price', 'quantity')
       
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'product')
        
class ShoppingCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = ('id', 'product','user','quantity', 'unit_price', 'tracking')

class Rating(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product', 'user', 'rating_int', 'comment')
        
class Img(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product', 'comment')
>>>>>>> e7665b0c097ec2850f098ce05a7fd1954f3a54ef
