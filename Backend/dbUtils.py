import psycopg2

DB_HOST = 'localhost'
DB_NAME = 'Onto_Med'
DB_USER = 'postgres'
DB_PASSWORD = '1234'

def connect_to_database():
    try:
        connection = psycopg2.connect(
            dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST
        )
        return connection
    except psycopg2.Error as e:
        print("Unable to connect to the database:", e)
        return None

class Database:
    @staticmethod
    def add_diagnosis(patient_id, practitioner_id, diagnosis_date, automated_diagnosis, practitioner_diagnosis,
                      regulator_rating, face_image, nail_image, hands_image, other_image, is_accepted, is_concluded):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO diagnoses (patientid, practitionerid, diagnosisdate, automateddiagnosis, "
                               "practitionerdiagnosis, regulatorrating, face_image, nail_image, hands_image, "
                               "other_image, isaccepted, isconcluded) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, "
                               "%s, %s) RETURNING diagnosisid",
                               (patient_id, practitioner_id, diagnosis_date, automated_diagnosis, practitioner_diagnosis,
                                regulator_rating, face_image, nail_image, hands_image, other_image, is_accepted,
                                is_concluded))
                diagnosis_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return diagnosis_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_disease(disease_name):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO diseases (diseasename) VALUES (%s) RETURNING diseaseid", (disease_name,))
                disease_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return disease_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None


    @staticmethod
    def add_diagnosis_rating(regulator_id, diagnosis_id, rating_value, comment):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO diagnosisratings (regulatorid, diagnosisid, ratingvalue, comment) "
                               "VALUES (%s, %s, %s, %s) RETURNING ratingid",
                               (regulator_id, diagnosis_id, rating_value, comment))
                rating_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return rating_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_digital_data_rating(regulator_id, knowledge_id, rating_value, validation, editing):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO digitaldataratings (regulatorid, knowledgeid, ratingvalue, validation, "
                               "editing) VALUES (%s, %s, %s, %s, %s) RETURNING dataratingid",
                               (regulator_id, knowledge_id, rating_value, validation, editing))
                rating_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return rating_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_domain_expert(expertise_area, approved):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO domainexperts (expertisearea, approved) VALUES (%s, %s) RETURNING expertid",
                               (expertise_area, approved))
                expert_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return expert_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None


    @staticmethod
    def add_electronic_health_record(patient_id, height, weight, diagnosis_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO electronichealthrecords (patientid, height, weight, diagnosisid) "
                               "VALUES (%s, %s, %s, %s) RETURNING ehrid",
                               (patient_id, height, weight, diagnosis_id))
                record_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return record_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_knowledge_entry(expert_id, entry_date, content):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO knowledgeentries (expertid, entrydate, content) "
                               "VALUES (%s, %s, %s) RETURNING knowledgeid",
                               (expert_id, entry_date, content))
                entry_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return entry_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_meeting(patient_id, practitioner_id, meeting_date, status, meeting_time):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO meetings (patientid, practitionerid, meetingdate, status, meetingtime) "
                               "VALUES (%s, %s, %s, %s, %s) RETURNING meetingid",
                               (patient_id, practitioner_id, meeting_date, status, meeting_time))
                meeting_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return meeting_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_patient_disease(patient_id, disease_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO patientdiseases (patientid, diseaseid) "
                               "VALUES (%s, %s)",
                               (patient_id, disease_id))
                connection.commit()
                connection.close()
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')

    @staticmethod
    def add_patient(blood_group, occupation, marital_status):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO patients (blood_group, occupation, marital_status) "
                               "VALUES (%s, %s, %s) RETURNING patientid",
                               (blood_group, occupation, marital_status))
                patient_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return patient_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_patient_symptom(patient_id, symptom_id, intensity, is_in_family, odd_symptoms):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO patientsymptoms (patientid, symptomid, intensity, is_in_family, odd_symptoms) "
                               "VALUES (%s, %s, %s, %s, %s)",
                               (patient_id, symptom_id, intensity, is_in_family, odd_symptoms))
                connection.commit()
                connection.close()
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')

    @staticmethod
    def add_person(firstname, lastname, email, phone, password, address, gender, date_of_birth, cnic, type, image):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO person (firstname, lastname, email, phone, password, address, "
                               "gender, date_of_birth, cnic, type, image) "
                               "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING personid",
                               (firstname, lastname, email, phone, password, address, gender,
                                date_of_birth, cnic, type, image))
                person_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return person_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_practitioner(certification, experience, specialization, issenior):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO practitioners (certification, experience, specialization, issenior) "
                               "VALUES (%s, %s, %s, %s) RETURNING practitionerid",
                               (certification, experience, specialization, issenior))
                practitioner_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return practitioner_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_prescription(prescname, diet, amount, method, presc_date, patient_id, disease_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO prescription (prescname, diet, amount, method, presc_date, patientid, diseaseid) "
                               "VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING prescid",
                               (prescname, diet, amount, method, presc_date, patient_id, disease_id))
                prescription_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return prescription_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_question(statement, answer, type, body_part, answer_date):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO questions (statement, answer, type, body_part, answer_date) "
                               "VALUES (%s, %s, %s, %s, %s) RETURNING questionid",
                               (statement, answer, type, body_part, answer_date))
                question_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return question_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_symptom_disease(symptom_id, disease_id):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO symptomdisease (symptomid, diseaseid) "
                               "VALUES (%s, %s)",
                               (symptom_id, disease_id))
                connection.commit()
                connection.close()
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')

    @staticmethod
    def add_symptom(symptomname, description):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO symptoms (symptomname, description) "
                               "VALUES (%s, %s) RETURNING symptomid",
                               (symptomname, description))
                symptom_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return symptom_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_activity(person_id, description, datetime):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO Activity (personid, description, datetime) "
                               "VALUES (%s, %s, %s) RETURNING activityid",
                               (person_id, description, datetime))
                activity_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return activity_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None

    @staticmethod
    def add_diagnosed_disease(diagnosis_id, disease_id, diagnosed_datetime):
        try:
            connection = connect_to_database()
            if connection:
                cursor = connection.cursor()
                cursor.execute("INSERT INTO diagnosed_disease (diagnosis_id, disease_id, diagnosed_datetime) "
                               "VALUES (%s, %s, %s) RETURNING diagnosed_disease_id",
                               (diagnosis_id, disease_id, diagnosed_datetime))
                diagnosed_disease_id = cursor.fetchone()[0]
                connection.commit()
                connection.close()
                return diagnosed_disease_id
        except psycopg2.Error as e:
            raise Exception(f'Database error: {e}')
        return None




