from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.conf import settings
from django.conf.urls.static import static
# from django.urls import path


router = DefaultRouter()
router.register(r'persons', views.PersonViewSet)
# router.register(r'patients', PatientsViewSet)
# router.register(r'practitioners', PractitionersViewSet)
urlpatterns = [
    path('', include(router.urls)),
    # path('person/', PersonViewSet.as_view(), name='person'),
    path('login/', views.LoginView.as_view(), name='login'),

    path('patient/<int:patient_id>/', views.PatientProfileAPIView.as_view(), name='patient_profile'),
    path('parient/', views.AllPatientProfileAPIView.as_view(), name='patient_profile'),

    path('practitioner/<int:practitioner_id>/', views.PractitionerProfileAPIView.as_view(), name='patient_profile'),
    path('practitioner/', views.Full_PractitionerProfileAPIView.as_view(), name='patient_profile'),
    # path('practitioner/', views.AllPractitionerProfileAPIView.as_view(), name='patient_profile'),


    path('diagnoses/', views.DiagnosisListCreateAPIView.as_view(), name='diagnosis-list-create'),
    path('diagnoses/<int:diagnosis_id>/', views.DiagnosisRetrieveUpdateDeleteAPIView.as_view(), name='diagnosis-detail'),

    path('diagnoses/concluded/', views.ConcludedDiagnosesListAPIView.as_view(), name='concluded-diagnoses-list'),
    path('diagnoses/non-concluded/', views.NonConcludedDiagnosesListAPIView.as_view(), name='non-concluded-diagnoses-list'),

    path('mydiagnoses/<int:prac_id>/', views.MyDiagnosisPatients.as_view(), name='my-diagnosis-patients-list'),
    path('myspecificdiagnoses/<int:diag_id>/', views.MySpecificDiagnosisPatients.as_view(), name='my-diagnosis-patients-list'),


    path('diseases/', views.DiseaseListCreateAPIView.as_view(), name='disease-list-create'),
    path('diseases/<int:diseaseid>/', views.DiseaseRetrieveUpdateDeleteAPIView.as_view(), name='disease-detail'),

    path('patient-disease', views.PatientDiseasesListCreateAPIView.as_view(), name='patient-disease-list-create'),
    path('patient-disease/<int:id>', views.PatientDiseasesRetrieveUpdateDeleteAPIView.as_view(), name='patient-diseases-detail'),

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

    path('symptoms/', views.SymptomsListCreateAPIView.as_view(), name='symptoms-list-create'),
    path('symptoms/<int:symptomid>/', views.SymptomsRetrieveUpdateDeleteAPIView.as_view(), name='symptoms-detail'),

    path('patient-symptoms/', views.PatientSymptomsListCreateAPIView.as_view(), name='patient-symptoms-list-create'),
    path('patient-symptoms/<int:id>/', views.PatientSymptomsRetrieveUpdateDeleteAPIView.as_view(), name='patient-symptoms-retrieve-update-delete'),

    path('symptom-disease/', views.SymptomDiseaseListCreateAPIView.as_view(), name='symptom-disease-list-create'),
    path('symptom-disease/<int:id>/', views.SymptomDiseaseRetrieveUpdateDeleteAPIView.as_view(), name='symptom-disease-retrieve-update-delete'),

    path('activities/', views.ActivityListCreateAPIView.as_view(), name='activity-list-create'),
    path('activities/<int:activity_id>/', views.ActivityRetrieveUpdateDeleteAPIView.as_view(), name='activity-detail'),

    path('domainexperts/', views.DomainExpertsListCreateAPIView.as_view(), name='domain-experts-list-create'),
    path('domainexperts/<int:expertid>/', views.DomainExpertsRetrieveUpdateDeleteAPIView.as_view(), name='domain-experts-detail'),

    path('ehr/', views.ElectronicHealthRecordsListCreateAPIView.as_view(), name='ehr-list-create'),
    path('ehr/<int:ehrid>/', views.ElectronicHealthRecordsRetrieveUpdateDeleteAPIView.as_view(), name='ehr-detail'),

    path('knowledge/', views.KnowledgeEntriesListCreateAPIView.as_view(), name='knowledge-list-create'),
    path('knowledge/<int:knowledgeid>/', views.KnowledgeEntriesRetrieveUpdateDeleteAPIView.as_view(), name='knowledge-detail'),

    path('data-ratings/', views.DigitalDataRatingsListCreateAPIView.as_view(), name='data-ratings-list-create'),
    path('data-ratings/<int:dataratingid>/', views.DigitalDataRatingsRetrieveUpdateDeleteAPIView.as_view(), name='data-ratings-detail'),

    path('practitioners_list/', views.PractitionersListAPIView.as_view(), name='practitioners-list'),

    path('patient_report/<int:patient_id>/', views.PatientReportAPIView.as_view(), name='patient_report')
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)