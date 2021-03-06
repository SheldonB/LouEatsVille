from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend, FilterSet, CharFilter, RangeFilter

from loueatsville import models
from loueatsville import serializers


class ViolationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Violation.objects.all()
    serializer_class = serializers.ViolationSerializer


class InspectionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Inspection.objects.all()
    serializer_class = serializers.InspectionSerializer

    @detail_route()
    def violations(self, request, pk=None):
        inspection = models.Inspection.objects.get(id=pk)
        business_id = inspection.business_id
        date = inspection.date

        violations = models.Violation.objects.filter(business_id=business_id, date=date)
        serializer_context = { 'request': request }
        serializer = serializers.ViolationSerializer(violations, many=True,
                                                    context=serializer_context)
        return Response(serializer.data)


class BusinessFilter(FilterSet):
    name = CharFilter(name='name', lookup_expr='icontains')
    class Meta:
        model = models.Business
        fields = ['name']


class BusinessViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Business.objects.all()
    serializer_class = serializers.BusinessSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_class = BusinessFilter

    @detail_route()
    def inspections(self, request, pk=None):
        inspections = models.Inspection.objects.filter(business_id=pk)
        serializer_context = { 'request': request }
        serializer = serializers.InspectionSerializer(inspections, many=True,
                                                        context=serializer_context)
        return Response(serializer.data)
