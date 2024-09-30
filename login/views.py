# cuando queremos enviar un request usamos get
# POST es para crear informacion
# PUT es para actualizar informacion
# DETELE es para eliminar informacion

# The above code defines two views for handling user login and registration using Django Rest
# Framework.

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .models import Login
from .serializer import LoginSerializer

# This class defines a view for handling user login requests, including checking the provided email
# and password against the database and returning appropriate responses.

class LoginView(viewsets.ModelViewSet):
    serializer_class = LoginSerializer 
    queryset = Login.objects.all()

    def create(self, request):
        """
        This Python function takes a request with email and password, checks if the user exists in the
        database, and returns user information if the password is correct.
        
        :param request: The code snippet you provided seems to be a part of a Django REST framework view
        for user authentication. The `create` method is likely handling a POST request to authenticate a
        user based on the provided email and password
        :return: The code snippet is a method for creating a user login functionality. It takes an email
        and password from the request data, attempts to find a user with the provided email in the
        database, and then checks if the password matches the one stored for that user.
        """
        email = request.data.get("email")
        password = request.data.get("password")

        # Depuración
        print("Email recibido:", email)
        print("Password recibido:", password)

        try:
            user = Login.objects.get(email=email)
            print("Usuario encontrado:", user.userName)
        except Login.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        if user.password == password:
            print("Contraseña correcta")
            return Response({
                "userId": user.id,
                "userName": user.userName,
                "email": user.email,
            }, status=status.HTTP_200_OK)
        else:
            print("Contraseña incorrecta")
            return Response({"error": "Contraseña incorrecta"}, status=status.HTTP_401_UNAUTHORIZED)

# This class defines a view for registering users with required fields and error handling.
class RegisterView(APIView):
    def post(self, request):
        """
        The function extracts data from a POST request and checks for missing required fields before
        returning an error response if any are missing.
        
        :param request: The `request` parameter in the `post` method is typically an HTTP request object
        that contains data sent by the client to the server. In this case, it seems to be a POST request,
        which is commonly used for creating or updating resources on the server. The `request.data`
        likely contains
        :return: If the email, password, or userName fields are missing in the request data, a response
        with an error message "Faltan campos obligatorios" (which means "Required fields are missing" in
        English) and a status code of 400 (Bad Request) will be returned.
        """
        data = request.data
        email = data.get("email")
        password = data.get("password")
        userName = data.get("userName")
        firtName = data.get("firtName")
        lastName = data.get("lastName")
        numberPhone = data.get("numberPhone")

        if not email or not password or not userName:
            return Response({"error": "Faltan campos obligatorios"}, status=status.HTTP_400_BAD_REQUEST)

        # This block of code is attempting to create a new user instance in the database using the
        # provided data (email, password, userName, firstName, lastName, numberPhone). It tries to
        # create a new user object with the specified fields using the `Login.objects.create()` method.
        try:
            user = Login.objects.create(
                email=email,
                password=password,
                userName=userName,
                firtName=firtName,
                lastName=lastName,
                numberPhone=numberPhone
            )
            return Response({
                "userId": user.id,
                "userName": user.userName,
                "email": user.email,
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": f"No se pudo crear el usuario: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)
