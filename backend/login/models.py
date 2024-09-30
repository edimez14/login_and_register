from django.db import models

# Create your models here.


# This class defines a model for user login information with fields for email, password, username,
# first name, last name, and phone number.
class Login(models.Model):
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200)
    userName = models.CharField(max_length=200, default='')
    firtName = models.CharField(max_length=200, default='')
    lastName = models.CharField(max_length=200, default='')
    numberPhone = models.CharField(max_length=10, default='')

    def __str__(self):
        """
        The function `__str__` returns a string representation of an object with its id and userName
        attributes.
        :return: The `__str__` method is returning a string that includes the `id` attribute and the
        `userName` attribute of the object. The format of the returned string is "{id} usuario:
        {userName}".
        """
        return f"{self.id} usuario: {self.userName}"
