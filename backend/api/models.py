from rest_framework import serializers
from django.db import models
from django.contrib.auth.models import User

# Create your models here. 

class Product(models.Model):
    img = models.CharField()
    title = models.CharField()
    description = models.CharField()
    rating = models.DecimalField(max_digit = 2, decimal_places = 2)
    manufactor = models.CharField()
    price = models.DecimalField(max_digits= 10, decimal_places=2)
    quantity = models.PositiveIntegerField()

#dont need a product category bc its an intermediate model, bc its so common, djago 
#already does it for you, automatically bc there's two foreign keys 

#model, extends from Model 
class Category(models.Model):
    name = models.CharField(max_length=150, db_index=True)
    slug = models.SlugField(max_length=150, unique=True ,db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    #this is how the category relates to product, products is the name of the variable
    products = models.ManyToManyField(Product, db_table='category_product', categories='categories', blank=True)   
    
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

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product', 'user', 'rating_int', 'comment')
        
class ImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product', 'comment')

