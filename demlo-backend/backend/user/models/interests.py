from django.db import models


class Interests(models.Model):
    name = models.CharField(max_length=100)
    img_url = models.TextField()
    description = models.TextField()
    is_deleted = models.BooleanField(default=False, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Interest"
        db_table = "interests"

    def __str__(self):
        return str(self.name)
