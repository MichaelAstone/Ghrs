from django.shortcuts import render
import json
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import User, UserSerializer, Special,SpecialSerializer,Category, CategorySerializer, ShoppingCart, ShoppingCartSerializer, Product, ProductSerializer, Rating, RatingSerializer, Image, ImageSerializer, Purchase, PurchaseSerializer, Transaction, TransactionSerializer


class UserView(APIView):
    def get(self, request, user_id = None):

        if user_id is not None:
            user = User.objects.get(id=user_id)
            serializer = UserSerializer(user, many=False)
            return Response(serializer.data)
        else:
            user_set = User.objects.all()
            serializer = UserSerializer(user_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, user_id):
        #getting the category, then pass the data
        user = User.objects.get(id=user_id)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:     
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                    
    
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
            product_set = Product.objects.all()
            serializer = ProductSerializer(product_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
                
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
    def put(self, request, product_id):
        #getting the category, then pass the data
        product = Product.objects.get(id=product_id)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:     
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, product_id):
            
        product = Product.objects.get(id=product_id)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
            
        
class ShoppingCartView(APIView):
    def get(self, request, user_id = None, product_id = None):

        if user_id is not None:
            product = Product.objects.get(id=product_id)
            serializer = ProductSerializer(product, many=False)
            return Response(serializer.data)
        else:
            product_set = Product.objects.all()
            serializer = ProductSerializer(product_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, user_id = None, product_id = None):
        
        #if the user did not specify the product delete,
        #all for that user 
        ##if user_id is not None and product_id is None:
                                   #__ bc its a sub property
        shoppingcart_set = ShoppingCart.objects.filter(user__id=user_id)
        shoppingcart_set.delete()
        
        #if there's a product id and a user id 
        if product_id is not None and user_id is not None: 
            return Response(serializer.data, status=status.HTTP_200_OK)
         
        #elif = else if 
        #prod id no user id 
        elif product_id is not None and user_id is None:   
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        #no prod id but there is a user id 
        elif product_id is None and user_id is not None:   
            return Response("needs a user id", status=status.HTTP_400_BAD_REQUEST)
        
        #if there's no user id or prod id 
        elif product_id is None and user_id is None: 
            return Response("needs a user id and prod id", status=status.HTTP_400_BAD_REQUEST)
        
        
             
        
    
class CategoryView(APIView):
    def get(self, request, category_id = None):
 
        #if there is an id, get that id 
        if category_id is not None:
            category = Category.objects.get(id=category_id)
            serializer = CategorySerializer(category, many=False)
            return Response(serializer.data)
        
        #if there isn't an id, get all 
        else:
            category_set = Category.objects.all()
            serializer = CategorySerializer(category_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
        
        #transforms data into json    
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
    def put(self, request, category_id):
        #getting the category, then pass the data
        category = Category.objects.get(id=category_id)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:     
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, category_id):
        
        category = Category.objects.get(id=category_id)
        category.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class ImageView(APIView):
    def get(self, request, image_id = None):

        if image_id is not None:
            image = Image.objects.get(id=image_id)
            serializer = ImageSerializer(image, many=False)
            return Response(serializer.data)
        else:
            image_set = Image.objects.all()
            serializer = ImageSerializer(image_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, image_id):
        #getting the category, then pass the data
        image = Image.objects.get(id=image_id)
        serializer = ImageSerializer(image, data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:     
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        
            
        
    def delete(self, request, image_id):
        
        image = Image.objects.get(id=image_id)
        image.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class RatingView(APIView):
    def get(self, request, rating_id = None):

        if rating_id is not None:
            rating = Rating.objects.get(id=rating_id)
            serializer = RatingSerializer(Rating, many=False)
            return Response(serializer.data)
        else:
            rating_set = Rating.objects.all()
            serializer = RatingSerializer(rating_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = RatingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, rating_id):
        
        rating = Rating.objects.get(id=rating_id)
        rating.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class PurchaseView(APIView):
    def get(self, request, purchase_id = None):

        if purchase_id is not None:
            purchase = Purchase.objects.get(id=purchase_id)
            serializer = PurchaseSerializer(purchase, many=False)
            return Response(serializer.data)
        else:
            purchase_set = Purchase.objects.all()
            serializer = PurchaseSerializer(purchase_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = PurchaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
    def put(self, request, purchase_id):
        #getting the category, then pass the data
        purchase = Purchase.objects.get(id=purchase_id)
        serializer = PurchaseSerializer(purchase, data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:     
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, purchase_id):
        
        purchase = Purchase.objects.get(id=purchase_id)
        purchase.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class TransactionView(APIView): 
    def get(self, request, transaction_id = None):

        if transaction_id is not None:
            transaction = Transaction.objects.get(id=transaction_id)
            serializer = TransactionSerializer(transaction, many=False)
            return Response(serializer.data)
        else:
            transaction_set = Transaction.objects.all()
            serializer = TransactionSerializer(transaction_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
            
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, transaction_id):
        
        transaction = Transaction.objects.get(id=transaction_id)
        transaction.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)

class SpecialView(APIView):
    def get(self, request, special_id = None):
 
        #if there is an id, get that id 
        if special_id is not None:
            special = Special.objects.get(id=special_id)
            serializer = SpecialSerializer(special, many=False)
            return Response(serializer.data)
        
        #if there isn't an id, get all 
        else:                       #this is to specify by when it was created
            specials_set = Special.objects.all().order_by('created_at')
            serializer = SpecialSerializer(specials_set, many=True)
            return Response(serializer.data)
        
    def post(self, request):
                
        serializer = SpecialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
    def put(self, request, special_id):
        #getting the category, then pass the data
        special = Special.objects.get(id=special_id)
        serializer = SpecialSerializer(special, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:     
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        
    def delete(self, request, special_id):
        
        special = Special.objects.get(id=special_id)
        special.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)