from django.db import models

class Business(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=2)
    postal_code = models.PositiveIntegerField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    phone_number = models.CharField(max_length=14)


class Violation(models.Model):
    business = models.ForeignKey(Business)
    date = models.DateField()
    description = models.TextField()


class Inspection(models.Model):
    TYPE_CHOICES = (
        ('FOLLOWUP', 'Follow Up'),
        ('REGULAR', 'Regular'),
    )

    business = models.ForeignKey(Business)
    score = models.IntegerField()
    date = models.DateField()
    type = models.CharField(max_length=20)

