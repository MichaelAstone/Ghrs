from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path('user/<int:user_id>', views.UserView.as_view(), name='id-user'),
    path('user/', views.UserView.as_view(), name='all-users'),
    path('product/', views.ProductView.as_view(), name='all-product'),
    path('product/<int:product_id>', views.ProductView.as_view(), name='all-product'),
    path('special/', views.SpecialView.as_view(), name='all-special'),
    path('special/<int:special_id>', views.SpecialView.as_view(), name='all-special'),
    path('shoppingcart/', views.ShoppingCartView.as_view(), name='shoppingcart'),
    path('shoppingcart/user/<int:user_id>/product/<int:product_id>', views.ShoppingCartView.as_view(), name='shoppingcart'),
    path('shoppingcart/user/<int:user_id>', views.ShoppingCartView.as_view(), name='shoppingcart'),
    path('category/', views.CategoryView.as_view(), name='all-category'),
    path('category/<int:category_id>', views.CategoryView.as_view(), name='all-category'),
    path('rating/', views.RatingView.as_view(), name='all-rating'),
    path('rating/<int:rating_id>', views.RatingView.as_view(), name='all-rating'),
    path('image/', views.ImageView.as_view(), name='all-image'),
    path('image/<int:image_id>', views.ImageView.as_view(), name='all-image'),
    path('purchase/', views.PurchaseView.as_view(), name='all-purchase'),
    path('purchase/<int:purchase_id>', views.PurchaseView.as_view(), name='all-purchase'),
    path('transaction/', views.TransactionView.as_view(), name='all-transaction'),
    path('transaction/', views.TransactionView.as_view(), name='all-transaction'),
]
