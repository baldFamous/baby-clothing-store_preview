from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()
    size = models.TextField()
    gender = models.TextField()
    image = models.ImageField(upload_to='products/')
    stock = models.IntegerField()

    def __str__(self):
        return f'{self.name} | {self.size} | {self.gender}'
