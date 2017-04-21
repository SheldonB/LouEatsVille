import io
import csv
import urllib
import traceback
import datetime

from django.core.management.base import BaseCommand

from loueatsville.models import Business, Inspection, Violation


class Command(BaseCommand):
    help='Updates the database with any new data from the Louisville Open Data Portal'

    BUSINESS_URL = 'https://data.louisvilleky.gov/node/8026/download'
    INSPECTION_URL = 'https://data.louisvilleky.gov/node/8031/download'
    VIOLATIONS_URL = 'https://data.louisvilleky.gov/node/8021/download'

    def update_businesses(self):
        try:
            self.stdout.write('Downloading Businesses from Louisville Open Data Portal.....', ending='')
            response = urllib.request.urlopen(self.BUSINESS_URL)
            self.stdout.write('Completed')
            self.stdout.write('Checking for differences in Business data')
            reader = csv.DictReader(io.TextIOWrapper(response))

            for row in reader:
                id = row['business_id']
                name = row['name']
                address = row['address']
                city = row['city']
                state = row['state']
                postal_code = row['postal_code']
                latitude = row['latitude']
                longitude = row['longitude']
                phone_number = row['phone_number']

                if not Business.objects.filter(id=id).exists():
                    self.stdout.write('New Business Found: ' + name)
                    new_business = Business(id=id,
                                            name=name,
                                            address=address,
                                            city=city,
                                            state=state,
                                            postal_code=postal_code,
                                            latitude=latitude,
                                            longitude=longitude,
                                            phone_number=phone_number)
                    new_business.save()

        except Exception as e:
            self.stderr.write('Error Updating Businesses.')
            self.stderr.write(traceback.format_exc())

    def update_inspections(self):
        try:
            self.stdout.write('Downloading Inspections from Louisville Open Data Portal.....', ending='')
            response = urllib.request.urlopen(self.INSPECTION_URL)
            self.stdout.write('Completed')
            self.stdout.write('Checking for differences in Inspection data')
            reader = csv.DictReader(io.TextIOWrapper(response))

            for row in reader:
                business_id = row['business_id']
                date = datetime.datetime.strptime(row['date'], '%Y%m%d')
                score = row['score']
                type = row['type']

                if score == '':
                    score = None

                if not Inspection.objects.filter(business__id=business_id, date=date).exists():
                    business = Business.objects.get(id=business_id)
                    self.stdout.write('New inspection found for ' + business.name + ' on ' + str(date))
                    new_inspection = Inspection(business=business, score=score, date=date, type=type)
                    new_inspection.save()

        except Exception as e:
            self.stderr.write('Error Updating Inspections.')
            self.stderr.write(traceback.format_exc())

    def update_violations(self):
        try:
            self.stdout.write('Downloading Violations from Louisville Open Data Portal.....', ending='')
            response = urllib.request.urlopen(self.VIOLATIONS_URL)
            self.stdout.write('Completed')
            self.stdout.write('Checking for differences in Violation data')
            reader = csv.DictReader(io.TextIOWrapper(response))

            for row in reader:
                business_id = row['business_id']
                date = datetime.datetime.strptime(row['date'], '%Y%m%d')
                description = row['description']

                if description == '':
                    description = None

                if not Violation.objects.filter(business__id=business_id, date=date, description=description).exists():
                    business = Business.objects.get(id=business_id)
                    self.stdout.write('New violation found for ' + business.name + ' on ' + str(date) + ' - ' + str(description))
                    new_violation = Violation(business=business, date=date, description=description)
                    new_violation.save()

        except Exception as e:
            self.stderr.write('Error Updating Violations.')
            self.stderr.write(traceback.format_exc())

    def handle(self, *args, **options):
        try:
            self.update_businesses()
            self.update_inspections()
            self.update_violations()
        except Exception:
            return
