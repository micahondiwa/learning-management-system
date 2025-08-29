from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.

class User(AbstractBaseUser):
    username = models.CharField(unique=True, max_length=100)
    email = models.EmailField(unique=True)

