from rest_framework import serializers
from loueatsville import models

class ViolationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Violation
        fields = ('id', 'date', 'description', 'business_id')


class InspectionSerializer(serializers.ModelSerializer):
    violations_url = serializers.HyperlinkedIdentityField(view_name='inspection-violations')
    type = serializers.SerializerMethodField()
    date = serializers.DateField(format='%x')

    class Meta:
        model = models.Inspection
        fields = ('id', 'score', 'date', 'type', 'business_id', 'violations_url')

    def get_type(self, obj):
        return obj.get_type_display()


class BusinessSerializer(serializers.ModelSerializer):
    most_recent_inspection = InspectionSerializer()
    inspections = serializers.HyperlinkedIdentityField(view_name='business-inspections')

    class Meta:
        model = models.Business
        fields = ('id', 'name', 'full_address',
                'latitude', 'longitude', 'phone_number',
                'inspections', 'most_recent_inspection')
