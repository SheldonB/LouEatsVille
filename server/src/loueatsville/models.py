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
    phone_number = models.CharField(max_length=14, null=True)

    @property
    def full_address(self):
        return '%s %s, %s, %d' % (self.address, self.city, self.state, self.postal_code)


class Violation(models.Model):
    business = models.ForeignKey(Business, related_name='violations')
    date = models.DateField()
    description = models.TextField(null=True)


class Inspection(models.Model):
    TYPE_CHOICES = (
        ('FOLLOWUP', 'Follow Up'),
        ('REGULAR', 'Regular'),
    )

    business = models.ForeignKey(Business)
    score = models.IntegerField(null=True)
    date = models.DateField()
    type = models.CharField(max_length=20)

