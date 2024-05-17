from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'persons', views.PersonViewSet)
# router.register(r'patients', PatientsViewSet)
# router.register(r'practitioners', PractitionersViewSet)
urlpatterns = [
    path('', include(router.urls)),
    # path('person/', PersonViewSet.as_view(), name='person'),
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('patient/<int:patient_id>/', views.PatientProfileAPIView.as_view(), name='patient_profile'),
    path('patient_report/<int:patient_id>/', views.PatientReportAPIView.as_view(), name='patient_report'),
]
