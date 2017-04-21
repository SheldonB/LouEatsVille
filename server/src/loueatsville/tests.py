import datetime

from django.test import TestCase
from loueatsville.models import Business, Inspection, Violation

class ModelsTestCase(TestCase):
    def setUp(self):
        business = Business.objects.create(id=1, name='Test Business', address='123 Test Rd.',
                                city='Test City', state='KY', postal_code=40208,
                                latitude=87.23, longitude=23.23, phone_number='270-123-4567')
        Inspection.objects.create(business=business, score=100, date='2016-01-15', type='REGULAR')
        Inspection.objects.create(business=business, score=95, date='2017-01-18', type='REGULAR')
        Violation.objects.create(business=business, date='2017-01-18', description='Some sort of violation')

    def test_business_full_address(self):
        business = Business.objects.get(name='Test Business')
        full_address = business.full_address
        self.assertEqual(full_address, '123 Test Rd.\n\rTest City, KY 40208')

    def test_business_most_recent_inspection(self):
        business = Business.objects.get(name='Test Business')
        recent_inspection = business.most_recent_inspection
        self.assertEqual(recent_inspection.date, datetime.date(2017, 1, 18))

    def test_business_has_inspections(self):
        business = Business.objects.get(name='Test Business')
        inspections = Inspection.objects.filter(business=business)
        self.assertEqual(len(inspections), 2)

    def test_business_has_violations(self):
        business = Business.objects.get(name='Test Business')
        inspection = Inspection.objects.get(business=business, date='2017-01-18')
        violation = Violation.objects.get(business=business, date='2017-01-18')
        self.assertEqual(violation.description, 'Some sort of violation')
        self.assertEqual(violation.date, inspection.date)
        self.assertEqual(violation.business.name, violation.business.name)

