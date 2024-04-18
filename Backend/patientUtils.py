import datetime
from flask import jsonify
import psycopg2
from dbUtils import connect_to_database, Database as db


class Patient:
    @staticmethod
    def get_patient_profile_by_id(patient_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("""
                    SELECT p.image,p.firstname, p.lastname, p.email, p.phone, p.address, p.gender, 
                           p.date_of_birth, p.cnic, pt.*
                    FROM public.person p
                    JOIN public.patients pt ON p.personid = pt.patientid
                    WHERE p.type = 1
                    AND p.personid = %s
                """, (patient_id,))
                patient_profile = cursor.fetchone()
                connection.close()
                return patient_profile, 200
            else:
                return {'error': 'Unable to connect to the database'}, 500
        except psycopg2.Error as e:
            return {'error': f'Database error: {e}'}, 500



    def get_patient_report(patient_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()    
                cursor.execute("""
                    SELECT 
                        p.firstname AS patient_firstname, 
                        p.lastname AS patient_lastname, 
                        p.gender, 
                        p.date_of_birth, 
                        p.cnic,
                        pa.blood_group, 
                        pa.occupation, 
                        pa.marital_status,
                        json_agg(json_build_object('symptomname', s.symptomname)) AS symptoms,
                        json_agg(json_build_object('diseasename', d.diseasename)) AS diseases,
                        json_build_object(
                            'diagnosisdate', dg.diagnosisdate,
                            'automateddiagnosis', dg.automateddiagnosis,
                            'practitionerdiagnosis', dg.practitionerdiagnosis,
                            'practitioner_firstname', pr_person.firstname,
                            'practitioner_lastname', pr_person.lastname,
                            'practitioner_certification', pr.certification,
                            'practitioner_specialization', pr.specialization
                        ) AS diagnosis,
                        json_build_object(
                            'prescname', pre.prescname,
                            'diet', pre.diet,
                            'amount', pre.amount,
                            'method', pre.method
                        ) AS prescription
                    FROM 
                        person p
                    JOIN 
                        patients pa ON p.personid = pa.patientid
                    LEFT JOIN 
                        patientsymptoms ps ON pa.patientid = ps.patientid
                    LEFT JOIN 
                        symptoms s ON ps.symptomid = s.symptomid
                    LEFT JOIN 
                        patientdiseases pd ON pa.patientid = pd.patientid
                    LEFT JOIN 
                        diseases d ON pd.diseaseid = d.diseaseid
                    LEFT JOIN 
                        diagnoses dg ON pa.patientid = dg.patientid
                    LEFT JOIN 
                        practitioners pr ON dg.practitionerid = pr.practitionerid
                    LEFT JOIN 
                        person pr_person ON pr.practitionerid = pr_person.personid
                    LEFT JOIN 
                        prescription pre ON pa.patientid = pre.patientid
                    WHERE 
                        p.personid = %s
                    GROUP BY 
                        p.firstname, p.lastname, p.gender, p.date_of_birth, p.cnic, 
                        pa.blood_group, pa.occupation, pa.marital_status,
                        dg.diagnosisdate, dg.automateddiagnosis, dg.practitionerdiagnosis,
                        pr_person.firstname, pr_person.lastname, pr.certification, pr.specialization,
                        pre.prescname, pre.diet, pre.amount, pre.method
                """, (patient_id,))
                patient_data = cursor.fetchone()
                connection.close()
                if patient_data:
                    return {
                        "patient_firstname": patient_data[0],
                        "patient_lastname": patient_data[1],
                        "gender": patient_data[2],
                        "date_of_birth": str(patient_data[3]),
                        "cnic": patient_data[4],
                        "blood_group": patient_data[5],
                        "occupation": patient_data[6],
                        "marital_status": patient_data[7],
                        "symptoms": patient_data[8],
                        "diseases": patient_data[9],
                        "diagnosis": patient_data[10],
                        "prescription": patient_data[11]
                    }, 200
                else:
                    return {'error': 'Patient not found'}, 404
            else:
                return {'error': 'Unable to connect to the database'}, 500
        except psycopg2.Error as e:
            return {'error': f'Database error: {e}'}, 500
    
    @staticmethod
    def get_patient_history(patient_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
    
                query = """
                SELECT 
                    p.firstname AS patient_firstname, 
                    p.lastname AS patient_lastname, 
                    p.gender, 
                    p.date_of_birth, 
                    p.cnic,
                    pa.blood_group, 
                    pa.occupation, 
                    pa.marital_status,
                    json_agg(json_build_object('symptomname', s.symptomname)) AS symptoms,
                    json_agg(json_build_object('diseasename', d.diseasename)) AS diseases,
                    json_build_object(
                        'diagnosisdate', dg.diagnosisdate,
                        'automateddiagnosis', dg.automateddiagnosis,
                        'practitionerdiagnosis', dg.practitionerdiagnosis,
                        'practitioner_firstname', pr_person.firstname,
                        'practitioner_lastname', pr_person.lastname,
                        'practitioner_certification', pr.certification,
                        'practitioner_specialization', pr.specialization
                    ) AS diagnosis,
                    json_build_object(
                        'prescname', pre.prescname,
                        'diet', pre.diet,
                        'amount', pre.amount,
                        'method', pre.method
                    ) AS prescription,
                    json_agg(
                        json_build_object(
                            'diagnosisdate', hist_dg.diagnosisdate,
                            'automateddiagnosis', hist_dg.automateddiagnosis,
                            'practitionerdiagnosis', hist_dg.practitionerdiagnosis,
                            'practitioner_firstname', hist_pr_person.firstname,
                            'practitioner_lastname', hist_pr_person.lastname,
                            'practitioner_certification', hist_pr.certification,
                            'practitioner_specialization', hist_pr.specialization
                        )
                    ) AS diagnosis_history,
                    json_agg(
                        json_build_object(
                            'prescname', hist_pre.prescname,
                            'diet', hist_pre.diet,
                            'amount', hist_pre.amount,
                            'method', hist_pre.method
                        )
                    ) AS prescription_history
                FROM 
                    person p
                JOIN 
                    patients pa ON p.personid = pa.patientid
                LEFT JOIN 
                    patientsymptoms ps ON pa.patientid = ps.patientid
                LEFT JOIN 
                    symptoms s ON ps.symptomid = s.symptomid
                LEFT JOIN 
                    patientdiseases pd ON pa.patientid = pd.patientid
                LEFT JOIN 
                    diseases d ON pd.diseaseid = d.diseaseid
                LEFT JOIN 
                    diagnoses dg ON pa.patientid = dg.patientid
                LEFT JOIN 
                    practitioners pr ON dg.practitionerid = pr.practitionerid
                LEFT JOIN 
                    person pr_person ON pr.practitionerid = pr_person.personid
                LEFT JOIN 
                    prescription pre ON pa.patientid = pre.patientid
                LEFT JOIN 
                    diagnoses hist_dg ON pa.patientid = hist_dg.patientid AND dg.diagnosisdate > hist_dg.diagnosisdate
                LEFT JOIN 
                    practitioners hist_pr ON hist_dg.practitionerid = hist_pr.practitionerid
                LEFT JOIN 
                    person hist_pr_person ON hist_pr.practitionerid = hist_pr_person.personid
                LEFT JOIN 
                    prescription hist_pre ON pa.patientid = hist_pre.patientid AND pre.presc_date > hist_pre.presc_date
                WHERE 
                    p.personid = %s
                GROUP BY 
                    p.firstname, p.lastname, p.gender, p.date_of_birth, p.cnic, 
                    pa.blood_group, pa.occupation, pa.marital_status,
                    dg.diagnosisdate, dg.automateddiagnosis, dg.practitionerdiagnosis,
                    pr_person.firstname, pr_person.lastname, pr.certification, pr.specialization,
                    pre.prescname, pre.diet, pre.amount, pre.method;
                """
                cursor.execute(query, (patient_id,))
                patient_data = cursor.fetchone()
    
                connection.close()
    
                if patient_data:
                    # Convert patient_data to a dictionary
                    patient_dict = {
                        'patient_firstname': patient_data[0],
                        'patient_lastname': patient_data[1],
                        'gender': patient_data[2],
                        'date_of_birth': patient_data[3],
                        'cnic': patient_data[4],
                        'blood_group': patient_data[5],
                        'occupation': patient_data[6],
                        'marital_status': patient_data[7],
                        'symptoms': patient_data[8],
                        'diseases': patient_data[9],
                        'diagnosis': patient_data[10],
                        'prescription': patient_data[11],
                        'diagnosis_history': patient_data[12],
                        'prescription_history': patient_data[13]
                    }
    
                    return patient_dict
                else:
                    return {'error': 'Patient not found'}
            else:
                return {'error': 'Unable to connect to the database'}
        except psycopg2.Error as e:
            return {'error': f'Database error: {e}'}
        
    def initiate_diagnosis(patient_id, prac_id, symptoms, patient_symp, diagnose_data, ehr_data ):
        for symptom in symptoms:
            sname = symptom['symptomname']
            sdesc = symptom['description']

            symp_id = db.add_symptom(sname, sdesc)
            if symp_id:
                intensity = patient_symp['intensity']
                family = patient_symp['is_in_family']
                odds = patient_symp['odd_symptoms']
                db.add_patient_symptom(patient_id, symp_id, intensity, family, odds)
        

        diagnosis_date = diagnose_data.get('diagnosis_date')
        automated_diagnosis = diagnose_data.get('automated_diagnosis')
        practitioner_diagnosis = diagnose_data.get('practitioner_diagnosis')
        
        face_image = diagnose_data.get('face_image')
        nail_image = diagnose_data.get('nail_image')
        hands_image = diagnose_data.get('hands_image')
        other_image = diagnose_data.get('other_image')
        

        # Add diagnosis
        diagnosis_id = db.add_diagnosis(patient_id, prac_id, diagnosis_date,
                                              automated_diagnosis, practitioner_diagnosis,
                                              0, face_image, nail_image,
                                              hands_image, other_image, False, False,
        )
        print("Diagnosis ID: ", diagnosis_id)
        if diagnosis_id:
           
            height = ehr_data.get('height')
            weight = ehr_data.get('weight')
            db.add_electronic_health_record(patient_id, height, weight, diagnosis_id)
            return diagnosis_id



    