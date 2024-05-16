from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'persons', PersonViewSet)
# router.register(r'patients', PatientsViewSet)
# router.register(r'practitioners', PractitionersViewSet)
urlpatterns = [
    path('', include(router.urls)),
    # path('person/', PersonViewSet.as_view(), name='person'),
    path('patient/<int:patient_id>/', PatientProfileAPIView.as_view(), name='patient_profile'),
    path('patient_report/<int:patient_id>/', PatientReportAPIView.as_view(), name='patient_report'),
]