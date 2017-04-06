from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from loueatsville import views

router = DefaultRouter()
router.register(r'businesses', views.BusinessViewSet)
router.register(r'violations', views.ViolationViewSet)
router.register(r'inspections', views.InspectionViewSet)

urlpatterns = [
        url(r'^api/', include(router.urls)),
]
