from flask import jsonify
import psycopg2
from dbUtils import connect_to_database

class Practitioner:
    def get_cases_checked_by_practitioner(doctor_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()

                
                query = """
                SELECT COUNT(*) FROM diagnoses WHERE practitionerid = %s;
                """
                cursor.execute(query, (doctor_id,))
                cases_checked = cursor.fetchone()[0]

                connection.close()

                return cases_checked
            else:
                return {'error': 'Unable to connect to the database'}
        except psycopg2.Error as e:
            return {'error': f'Database error: {e}'}
        
    def get_recent_cases(practitioner_id, limit=10):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()

                # SQL query to fetch recent cases checked by a practitioner
                query = """
                SELECT dg.diagnosis_id, dg.diagnosisdate, p.personid AS patient_id,
                    p.firstname AS patient_firstname, p.lastname AS patient_lastname, 
                    d.diseasename
                FROM diagnoses dg
                INNER JOIN patients pa ON dg.patientid = pa.patientid
                INNER JOIN person p ON pa.patientid = p.personid
                INNER JOIN diseases d ON dg.diseaseid = d.diseaseid
                WHERE dg.practitionerid = %s
                ORDER BY dg.diagnosisdate DESC
                LIMIT %s;
                """
                cursor.execute(query, (practitioner_id, limit))
                recent_cases = cursor.fetchall()

                connection.close()

                return recent_cases
            else:
                return {'error': 'Unable to connect to the database'}
        except psycopg2.Error as e:
            return {'error': f'Database error: {e}'}

    
    def get_recent_cases_by_practitioner(practitioner_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("""
                    SELECT 
                        d.diagnosisid AS diagnosis_id,
                        d.patientid AS patient_id,
                        d.diagnosisdate AS diagnosis_date,
                        d.automateddiagnosis AS automated_diagnosis,
                        d.practitionerdiagnosis AS practitioner_diagnosis,
                        p.firstname AS practitioner_firstname,
                        p.lastname AS practitioner_lastname,
                        dis.diseaseid AS disease_id,
                        dis.diseasename AS disease_name
                    FROM 
                        diagnoses d
                    JOIN 
                        practitioners pr ON d.practitionerid = pr.practitionerid
                    JOIN 
                        person p ON pr.practitionerid = p.personid
                    JOIN 
                        diagnosed_disease dd ON d.diagnosisid = dd.diagnosis_id
                    JOIN 
                        diseases dis ON dd.disease_id = dis.diseaseid
                    WHERE 
                        pr.practitionerid = %s
                    ORDER BY 
                        d.diagnosisdate DESC
                    LIMIT 10
                """, (practitioner_id,))
                recent_cases = cursor.fetchall()
                connection.close()
                result = [{
                    'diagnosis_id': row[0],
                    'patient_id': row[1],
                    'diagnosis_date': row[2].strftime('%Y-%m-%d'),
                    'automated_diagnosis': row[3],
                    'practitioner_diagnosis': row[4],
                    'practitioner_firstname': row[5],
                    'practitioner_lastname': row[6],
                    'disease_id': row[7],
                    'disease_name': row[8]
                } for row in recent_cases]
                return jsonify(result), 200
            else:
                return jsonify({'error': 'Unable to connect to the database'}), 500
        except psycopg2.Error as e:
            return jsonify({'error': f'Database error: {e}'}), 500