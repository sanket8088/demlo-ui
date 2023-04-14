from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    contact_number = models.BigIntegerField(unique=True, null=False)
    email = models.EmailField(max_length=255)
    first_name = models.CharField(max_length=100)
    username = models.CharField(max_length = 30, unique=True)
    dob = models.DateField()
    REQUIRED_FIELDS = ["first_name", "email", "dob"]
    is_activated = models.BooleanField(default=False,null=True, blank=True)
    is_deleted = models.BooleanField(default=False,null=True, blank=True)
    created_at =models.DateTimeField(auto_now_add=True,null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True,null=True, blank=True)

    class Meta:
        verbose_name_plural = "User"

    def __str__(self):
       return str(self.id)

    @classmethod
    def get_user_name(cls, user_id):
        try:
            user = User.objects.get(pk=user_id)
            last_name = user.last_name if user.last_name is not None else ""
            return user.first_name + last_name
        except:
            return None

