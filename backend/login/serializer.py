# This is a Django REST framework serializer class for the Login model that includes all fields.
from rest_framework import serializers
from .models import Login


# The `LoginSerializer` class is a Django REST framework serializer for the `Login` model with all
# fields included.
class LoginSerializer(serializers.ModelSerializer):
    # The class `Meta` specifies the model and fields to be used in a form.
    class Meta:
        model = Login
        fields = '__all__'
