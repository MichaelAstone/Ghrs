from rest_framework import serializers
from django.db import models
from django.contrib.auth.models import User

# Create your models here. 

class Product(models.Model):
    img = models.CharField(max_length=150, default="")
    title = models.CharField(max_length=50, default="")
    description = models.CharField(max_length=50, default="")
    productRating = models.IntegerField(default=0, blank=True)
    manufacturer = models.CharField(max_length=50, default="")
    price = models.IntegerField(default=0, blank=True)
    quantity = models.IntegerField(default=0, blank=True)

#dont need a product category bc its an intermediate model, bc its so common, djago 
#already does it for you, automatically bc there's two foreign keys 

#model, extends from Model 
class Category(models.Model):
    name = models.CharField(max_length=150, db_index=True)
    slug = models.SlugField(max_length=150, unique=True ,db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    #this is how the category relates to product, products is the name of the variable
    products = models.ManyToManyField(Product, related_name='categories', blank=True)   
    
class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    url = models.CharField(max_length=150, default="")
    comment = models.CharField(max_length=200, default="")
    
class Rating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank = True)
    rating_int = models.IntegerField(default=0, blank=True)
    comment = models.CharField(max_length=200, default="")
    
class ShoppingCart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    user = models.ForeignKey(User, on_delete = models.CASCADE, blank=True)
    quantity = models.IntegerField(default=0, blank=True)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    tracking = models.CharField(max_length=150, default="")

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
    
class Purchase(models.Model):
    date = models.DateTimeField(auto_now_add=True) 

class Transaction(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, blank=True)
    special = models.ForeignKey(
        Special, on_delete=models.CASCADE, blank=True)
    shoppingCart = models.ForeignKey(
        ShoppingCart, on_delete=models.CASCADE, blank=True)
    coupon = models.ForeignKey(
        Coupon, on_delete=models.CASCADE, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    purchase = models.ForeignKey(
        Purchase, on_delete=models.CASCADE, blank=True)

        
class Search(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True)
    searchTerm = models.CharField(max_length=50, default="")
    
class Profile(models.Model):
    product = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'firstname','lastname','email', 'phone', 'address')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'img','title','description', 'productRating', 'manufacturer', 'price', 'quantity')
       
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'products', 'slug')
        
class ShoppingCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = ('id',  'product','user','quantity', 'unit_price', 'tracking')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'product', 'user', 'rating_int', 'comment')
        
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'comment', 'product', 'url')

class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = ('date', 'id')
        
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('id', 'product')

