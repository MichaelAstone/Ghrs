from django.contrib import admin
from django.urls import path, include
from api import views
urlpatterns = [
    path('user/<int:user_id>', views.UserView.as_view(), name='id-user'),
    path('user/', views.UserView.as_view(), name='all-users'),
    path('product/', views.UserView.as_view(), name='product'),
    path('shoppingcart/', views.ShoppingCart.as_view(), name='shoppingcart'),
    path('category/', views.CategoryView.as_view(), name='category'),
    path('rating/', views.RatingView.as_view(), name='rating'),
    path('image/', views.ImageView.as_view(), name='image'),
    path('purchase/', views.PurchaseView.as_view(), name='purchase'),
    path('transaction/', views.TransactionView.as_view(), name='transaction'),
    
    
]
