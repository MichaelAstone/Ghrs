from django.shortcuts import render
import json
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import User, UserSerializer, Category, CategorySerializer, ShoppingCart, ShoppingCartSerializer, Product, ProductSerializer, Rating, RatingSerializer, Image, ImageSerializer, Purchase, PurchaseSerializer, Transaction, TransactionSerializer


class UserView(APIView):
    def get(self, request, user_id = None):

        if user_id is not None:
            user = User.objects.get(id=user_id)
            serializer = UserSerializer(user, many=False)
            return Response(serializer.data)
        else:
            user = User.objects.all()
            serializer = UserSerializer(user, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, user_id):
        
        user = User.objects.get(id=user_id)
        user.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)

class ProductView(APIView):
        def get(self, request, product_id = None):

        if product_id is not None:
            product = Product.objects.get(id=product_id)
            serializer = ProductSerializer(product, many=False)
            return Response(serializer.data)
        else:
            product = Product.objects.all()
            serializer = ProductSerializer(product, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, product_id):
        
        Product = Product.objects.get(id=product_id)
        Product.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
        
class ShoppingCartView(APIView):
    def get(self, request, product_id = None):

        if product_id is not None:
            product = Product.objects.get(id=product_id)
            serializer = ProductSerializer(product, many=False)
            return Response(serializer.data)
        else:
            product = Product.objects.all()
            serializer = ProductSerializer(product, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, product_id):
        
        Product = Product.objects.get(id=product_id)
        Product.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CategoryView(APIView):
    def get(self, request, category_id = None):

        if category_id is not None:
            category = Category.objects.get(id=category_id)
            serializer = CategorySerializer(category, many=False)
            return Response(serializer.data)
        else:
            category = Category.objects.all()
            serializer = CategorySerializer(category, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, category_id):
        
        Category = Category.objects.get(id=category_id)
        Category.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class ImageView(APIView):
    def get(self, request, image_id = None):

        if image_id is not None:
            image = Image.objects.get(id=image_id)
            serializer = ImageSerializer(image, many=False)
            return Response(serializer.data)
        else:
            image = Image.objects.all()
            serializer = ImageSerializer(image, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, image_id):
        
        Image = Image.objects.get(id=image_id)
        Image.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class RatingView(APIView):
    def get(self, request, rating_id = None):

        if rating_id is not None:
            Rating = Rating.objects.get(id=rating_id)
            serializer = RatingSerializer(Rating, many=False)
            return Response(serializer.data)
        else:
            Rating = Rating.objects.all()
            serializer = RatingSerializer(Rating, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = RatingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, rating_id):
        
        Rating = Rating.objects.get(id=rating_id)
        Rating.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class PurchaseView(APIView):
    def get(self, request, purchase_id = None):

        if purchase_id is not None:
            purchase = Purchase.objects.get(id=purchase_id)
            serializer = PurchaseView(purchase, many=False)
            return Response(serializer.data)
        else:
            purchase = Purchase.objects.all()
            serializer = PurchaseView(purchase, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = PurchaseView(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, purchase_id):
        
        Purchase = Purchase.objects.get(id=purchase_id)
        Purchase.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class TransactionView(APIView)
    def get(self, request, transaction_id = None):

        if transaction_id is not None:
            transaction = Transaction.objects.get(id=transaction_id)
            serializer = TransactionSerializer(transaction, many=False)
            return Response(serializer.data)
        else:
            transaction = Transaction.objects.all()
            serializer = TransactionSerializer(transaction, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, transaction_id):
        
        Transaction = Transaction.objects.get(id=transaction_id)
        Transaction.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)