from rest_framework import serializers
from loueatsville import models

class ViolationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Violation
        fields = ('id', 'date', 'description', 'business_id')


class InspectionSerializer(serializers.ModelSerializer):
    violations = serializers.HyperlinkedIdentityField(view_name='inspection-violations')

    class Meta:
        model = models.Inspection
        fields = ('id', 'score', 'date', 'type', 'business_id', 'violations')


class BusinessSerializer(serializers.ModelSerializer):
    inspections = serializers.HyperlinkedIdentityField(view_name='business-inspections')

    class Meta:
        model = models.Business
        fields = ('id', 'name', 'full_address',
                'latitude', 'longitude', 'phone_number',
                'inspections',)

