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

    path('practitioner/<int:practitioner_id>/', views.PatientProfileAPIView.as_view(), name='patient_profile'),

    path('diagnoses/', views.DiagnosisListCreateAPIView.as_view(), name='diagnosis-list-create'),
    path('diagnoses/<int:diagnosis_id>/', views.DiagnosisRetrieveUpdateDeleteAPIView.as_view(), name='diagnosis-detail'),


    path('diseases/', views.DiseaseListCreateAPIView.as_view(), name='disease-list-create'),
    path('diseases/<int:diseaseid>/', views.DiseaseRetrieveUpdateDeleteAPIView.as_view(), name='disease-detail'),

    path('diagnosed-diseases/', views.DiagnosedDiseaseListCreateAPIView.as_view(), name='diagnosed-disease-list-create'),
    path('diagnosed-diseases/<int:diagnosed_disease_id>/', views.DiagnosedDiseaseRetrieveUpdateDeleteAPIView.as_view(), name='diagnosed-disease-detail'),

    path('diagnosis-ratings/', views.DiagnosisRatingsListCreateAPIView.as_view(), name='diagnosisratings-list-create'),
    path('diagnosis-ratings/<int:ratingid>/', views.DiagnosisRatingsRetrieveUpdateDeleteAPIView.as_view(), name='diagnosisratings-detail'),

    path('prescriptions/', views.PrescriptionListCreateAPIView.as_view(), name='prescription-list-create'),
    path('prescriptions/<int:prescid>/', views.PrescriptionRetrieveUpdateDestroyAPIView.as_view(), name='prescription-retrieve-update-destroy'),

    path('meetings/', views.MeetingListCreateAPIView.as_view(), name='meeting-list-create'),
    path('meetings/<int:meetingid>/', views.MeetingRetrieveUpdateDeleteAPIView.as_view(), name='meeting-detail'),

    path('questions/', views.QuestionsListCreateAPIView.as_view(), name='questions-list-create'),
    path('questions/<int:questionid>/', views.QuestionsRetrieveUpdateDeleteAPIView.as_view(), name='questions-detail'),

    path('patient_report/<int:patient_id>/', views.PatientReportAPIView.as_view(), name='patient_report'),
]
