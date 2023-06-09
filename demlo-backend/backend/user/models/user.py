from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=100)
    username = models.CharField(max_length=30, unique=True)
    dob = models.DateField()
    REQUIRED_FIELDS = ["first_name", "email", "dob"]
    avatar = models.ForeignKey(
        "user.Avatar", models.DO_NOTHING, blank=True, null=True)
    is_activated = models.BooleanField(default=False, null=True, blank=True)
    is_deleted = models.BooleanField(default=False, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    class Meta:
        verbose_name_plural = "User"

    def __str__(self):
        return str(self.id)
