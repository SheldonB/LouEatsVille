from rest_framework import serializers
from loueatsville import models

class ViolationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Violation
        fields = ('id', 'date', 'description', 'business_id')


class InspectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Inspection
        fields = ('id', 'score', 'date', 'type', 'business_id')


class BusinessSerializer(serializers.ModelSerializer):
    inspections = serializers.HyperlinkedIdentityField(view_name='business-inspections')
    violations = serializers.HyperlinkedIdentityField(view_name='business-violations')

    class Meta:
        model = models.Business
        fields = ('id', 'name', 'full_address',
                'latitude', 'longitude', 'phone_number',
                'inspections', 'violations')

