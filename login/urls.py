# This code snippet is setting up URL patterns for a Django REST framework API. Here's a breakdown of
# what each part is doing:
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from login import views

router = routers.DefaultRouter()
router.register(r'login', views.LoginView, 'login')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("api/v1/register/", views.RegisterView.as_view(), name='register'),
    path("docs/", include_docs_urls(title="Login API")),
]
