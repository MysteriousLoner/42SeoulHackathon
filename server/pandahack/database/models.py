from django.db import models

# Create your models here.
class UserInfo(models.Model):
    name = models.CharField(max_length=100)
    total_contributions = models.IntegerField()
    bamboos = models.IntegerField(default=0)

    def __str__(self):
        return self.name + " | contributions: " + str(self.total_contributions)   
