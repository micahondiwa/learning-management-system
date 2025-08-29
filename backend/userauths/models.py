from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.

class User(AbstractBaseUser):
    username = models.CharField(unique=True, max_length=100)
    email = models.EmailField(unique=True)
    full_name= models.CharField(unique=True, max_length=100)
    otp = models.CharField(unique=True, max_length=100)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email
    
    def save(self, *args, **kwargs):
        email_username, full_name = self.email.split('@')
        if self.full_name == "" or self.full_name == None:
            self.full_name == email_username
        
        if self.username == "" or self.username == None:
            self.username == email_username
        super(User, self).save(*args, **kwargs)

class Profile(models.Model):
    

