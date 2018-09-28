from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path('user/<int:user_id>', views.UserView.as_view(), name='id-user'),
    path('user/', views.UserView.as_view(), name='all-users'),

]
