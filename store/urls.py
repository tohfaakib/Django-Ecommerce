from django.urls import path
from .views import store, cart, checkout, UpdateItem, processOrder


urlpatterns = [
    path('', store, name='store'),
    path('cart/', cart, name='cart'),
    path('checkout/', checkout, name='checkout'),
    path('checkout/', checkout, name='checkout'),
    path('update_item/', UpdateItem, name='update_item'),
    path('process_order/', processOrder, name='process_order'),
]