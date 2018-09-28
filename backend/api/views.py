from django.shortcuts import render
import json
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import UserSerializer
from django.contrib.auth.models import User

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
        
        
#class ProductView(APIView):
    #def get(self, request, user_id = None):

        #if user_id is not None:
            #user = User.objects.get(id=user_id)
            #serializer = UserSerializer(user, many=False)
            #return Response(serializer.data)
        #else:
            #user = User.objects.all()
            #serializer = UserSerializer(user, many=True)
            #return Response(serializer.data)
        
    #def post(self, request):
            
        #serializer = UserSerializer(data=request.data)
        #if serializer.is_valid():
            #serializer.save()
            #return Response(serializer.data, status=status.HTTP_200_OK)
        #else:
            #return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        
    #def delete(self, request, user_id):
        
        #user = User.objects.get(id=user_id)
        #user.delete()
        
        #return Response(status=status.HTTP_204_NO_CONTENT)