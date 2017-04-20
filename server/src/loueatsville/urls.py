from django.conf.urls import url, include
from django.views.generic.base import TemplateView
from rest_framework.routers import DefaultRouter

from loueatsville import views

router = DefaultRouter()
router.register(r'businesses', views.BusinessViewSet)
router.register(r'violations', views.ViolationViewSet)
router.register(r'inspections', views.InspectionViewSet)

urlpatterns = [
        url(r'^api/', include(router.urls)),
        url(r'^$', TemplateView.as_view(template_name='index.html'))
]
