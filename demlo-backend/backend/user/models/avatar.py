from django.db import models


class Avatar(models.Model):
    name = models.CharField(max_length=100)
    img_url = models.TextField()
    is_deleted = models.BooleanField(default=False, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Avatar"
        db_table = "avatars"

    def __str__(self):
        return str(self.name)
