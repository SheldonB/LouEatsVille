from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import detail_route
from rest_framework.response import Response

from loueatsville import models
from loueatsville import serializers

class ViolationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Violation.objects.all()
    serializer_class = serializers.ViolationSerializer


class InspectionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Inspection.objects.all()
    serializer_class = serializers.InspectionSerializer
    

class BusinessViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Business.objects.all()
    serializer_class = serializers.BusinessSerializer

    @detail_route()
    def violations(self, request, pk=None):
        violations = models.Violation.objects.filter(business_id=pk)
        serializer = serializers.ViolationSerializer(violations, many=True)
        return Response(serializer.data)
    
    @detail_route()
    def inspections(self, request, pk=None):
        inspections = models.Inspection.objects.filter(business_id=pk)
        serializer = serializers.InspectionSerializer(inspections, many=True)
        return Response(serializer.data)
        

