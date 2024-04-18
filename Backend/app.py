from flask import Flask, jsonify, request
import psycopg2
from patientUtils import Patient
from AdminUtils import get_counts,connect_to_database, get_activity_details, get_activity_with_person_details, get_diagnoses

from pracUtils import Practitioner as pr

app = Flask(__name__)

# PostgreSQL database configuration
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

# Auth route to get JWT token
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    connection = connect_to_database()
    if connection:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM person WHERE email = %s AND password = %s", (email, password))
        person = cursor.fetchone()
        connection.close()

        if person:
            return jsonify({'message': 'Login successful'}), 200
        else:
            return jsonify({'error': 'Invalid credentials'}), 401
    else:
        return jsonify({'error': 'Unable to connect to the database'}), 500

# CRUD operations for person
@app.route('/person', methods=['GET'])
def get_all_persons():
    try:
        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM person")
            persons = cursor.fetchall()
            connection.close()
            return jsonify(persons), 200
        else:
            return jsonify({'error': 'Unable to connect to the database'}), 500
    except psycopg2.Error as e:
        return jsonify({'error': f'Database error: {e}'}), 500

@app.route('/person/<int:id>', methods=['GET'])
def get_person(id):
    try:
        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM person WHERE personid = %s", (id,))
            person = cursor.fetchone()
            connection.close()
            if person:
                return jsonify(person), 200
            else:
                return jsonify({'error': 'Person not found'}), 404
        else:
            return jsonify({'error': 'Unable to connect to the database'}), 500
    except psycopg2.Error as e:
        return jsonify({'error': f'Database error: {e}'}), 500

@app.route('/person', methods=['POST'])
def add_person():
    try:
        data = request.json
        firstname = data.get('firstname')
        lastname = data.get('lastname')
        email = data.get('email')
        password = data.get('password')
        phone = data.get('phone')
        address = data.get('address')
        gender = data.get('gender')
        date_of_birth = data.get('date_of_birth')
        cnic = data.get('cnic')
        type = data.get('type')
        image = data.get('image')

        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO person (firstname, lastname, email, password, phone, address, gender, date_of_birth, cnic, type, image) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING personid",
                           (firstname, lastname, email, password, phone, address, gender, date_of_birth, cnic, type, image))
            new_person_id = cursor.fetchone()[0]

            # Insert into specific table based on type
            if type == 1:
                blood_group = data.get('blood_group')
                occupation = data.get('occupation')
                marital_status = data.get('marital_status')
                cursor.execute("INSERT INTO patients (patientid, blood_group, occupation, marital_status) VALUES (%s, %s, %s, %s)",
                               (new_person_id, blood_group, occupation, marital_status))
            elif type == 2:
                certification = data.get('certification')
                experience = data.get('experience')
                specialization = data.get('specialization')
                issenior = data.get('issenior', False)
                cursor.execute("INSERT INTO practitioners (practitionerid, certification, experience, specialization, issenior) VALUES (%s, %s, %s, %s, %s)",
                               (new_person_id, certification, experience, specialization, issenior))
            elif type == 3:
                expertisearea = data.get('expertisearea')
                approved = data.get('approved', False)
                cursor.execute("INSERT INTO domainexperts (expertid, expertisearea, approved) VALUES (%s, %s, %s)",
                               (new_person_id, expertisearea, approved))

            connection.commit()
            connection.close()
            return jsonify({'message': 'Person added successfully'}), 201
        else:
            return jsonify({'error': 'Unable to connect to the database'}), 500
    except psycopg2.Error as e:
        return jsonify({'error': f'Database error: {e}'}), 500
    

@app.route('/person/<int:id>', methods=['PUT'])
def update_person(id):
    try:
        data = request.json
        firstname = data.get('firstname')
        lastname = data.get('lastname')
        email = data.get('email')
        password = data.get('password')
        phone = data.get('phone')
        address = data.get('address')
        gender = data.get('gender')
        date_of_birth = data.get('date_of_birth')
        cnic = data.get('cnic')
        type = data.get('type')
        image = data.get('image')

        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("UPDATE person SET firstname = %s, lastname = %s, email = %s, password = %s, phone = %s, address = %s, gender = %s, date_of_birth = %s, cnic = %s, type = %s, image = %s WHERE personid = %s",
                           (firstname, lastname, email, password, phone, address, gender, date_of_birth, cnic, type, image, id))

            # Update specific table based on type
            if type == 1:
                blood_group = data.get('blood_group')
                occupation = data.get('occupation')
                marital_status = data.get('marital_status')
                cursor.execute("UPDATE patients SET blood_group = %s, occupation = %s, marital_status = %s WHERE patientid = %s",
                               (blood_group, occupation, marital_status, id))
            elif type == 2:
                certification = data.get('certification')
                experience = data.get('experience')
                specialization = data.get('specialization')
                issenior = data.get('issenior', False)
                cursor.execute("UPDATE practitioners SET certification = %s, experience = %s, specialization = %s, issenior = %s WHERE practitionerid = %s",
                               (certification, experience, specialization, issenior, id))
            elif type == 3:
                expertisearea = data.get('expertisearea')
                approved = data.get('approved', False)
                cursor.execute("UPDATE domainexperts SET expertisearea = %s, approved = %s WHERE expertid = %s",
                               (expertisearea, approved, id))

            connection.commit()
            connection.close()
            return jsonify({'message': 'Person updated successfully'}), 200
        else:
            return jsonify({'error': 'Unable to connect to the database'}), 500
    except psycopg2.Error as e:
        return jsonify({'error': f'Database error: {e}'}), 500
    
@app.route('/person/<int:id>', methods=['DELETE'])
def delete_person(id):
    try:
        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            
            # Get type of person based on id
            cursor.execute("SELECT type FROM person WHERE personid = %s", (id,))
            person_type = cursor.fetchone()[0]

            # Delete from child table based on type
            if person_type == 1:
                cursor.execute("DELETE FROM patients WHERE patientid = %s", (id,))
            elif person_type == 2:
                cursor.execute("DELETE FROM practitioners WHERE practitionerid = %s", (id,))
            elif person_type == 3:
                cursor.execute("DELETE FROM domainexperts WHERE expertid = %s", (id,))

            # Delete from parent table
            cursor.execute("DELETE FROM person WHERE personid = %s", (id,))
            
            connection.commit()
            connection.close()
            return jsonify({'message': 'Person deleted successfully'}), 200
        else:
            return jsonify({'error': 'Unable to connect to the database'}), 500
    except psycopg2.Error as e:
        return jsonify({'error': f'Database error: {e}'}), 500



# Admin routes
@app.route('/counts', methods=['GET'])
def get_entity_counts():
    num_patients, num_practitioners, num_senior_practitioners = get_counts()
    if num_patients is not None and num_practitioners is not None and num_senior_practitioners is not None:
        return jsonify({
            'patients': num_patients,
            'practitioners': num_practitioners,
            'senior_practitioners': num_senior_practitioners
        }), 200
    else:
        return jsonify({'error': 'Unable to retrieve counts from the database'}), 500
# Endpoint to get activity details (date, time, description)
@app.route('/activity_deshboard', methods=['GET'])
def get_activity():
    activity_details = get_activity_details()
    print(activity_details)
    if activity_details:
        return jsonify(activity_details), 200
    else:
        return jsonify({'error': 'Failed to retrieve activity details'}), 500

# Endpoint to get activity details with person details (name, person id, description)
@app.route('/activity', methods=['GET'])
def get_activity_with_person():
    activity_with_person_details = get_activity_with_person_details()
    if activity_with_person_details:
        return jsonify(activity_with_person_details), 200
    else:
        return jsonify({'error': 'Failed to retrieve activity details with person'}), 500

@app.route('/diagnoses', methods=['GET'])
def get_diagnoses_data():
    diagnoses_data = get_diagnoses()
    if diagnoses_data:
        return jsonify(diagnoses_data), 200
    else:
        return jsonify({'error': 'Failed to retrieve diagnoses data'}), 500

# Patients Routes 
@app.route('/patient/profile/<int:patient_id>', methods=['GET'])
def get_patient_profile_by_id_route(patient_id):
    patient_profile, status_code = Patient.get_patient_profile_by_id(patient_id)
    if status_code == 200:
        return jsonify(patient_profile)
    else:
        return jsonify(patient_profile), status_code


@app.route('/patient/report/<int:patient_id>', methods=['GET'])
def get_patient_data_by_id_route(patient_id):
    patient_data, status_code = Patient.get_patient_report(patient_id)
    if status_code == 200:
        return jsonify(patient_data)
    else:
        return jsonify(patient_data), status_code
    
@app.route('/patient/history/<int:patient_id>', methods=['GET'])
def patient_history_route(patient_id):
    return jsonify(Patient.get_patient_history(patient_id))

@app.route('/patient/diagnose', methods=['POST'])
def diagnose_patient():
    try:
        data = request.json

        # Extract data from request JSON
        patient_id = data.get('patient_id')
        prac_id = data.get('prac_id')
        symptoms = data.get('symptoms')
        patient_symp = data.get('patient_symptoms')
        diagnose_data = data.get('diagnose_data')
        ehr_data = data.get('ehr_data')

        # Call initiate_diagnosis function
        diagnosis_id = Patient.initiate_diagnosis(patient_id, prac_id, symptoms, patient_symp, diagnose_data, ehr_data)

        return jsonify({'diagnosis_id': diagnosis_id}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


#Practioner Routes
@app.route('/doctor/cases/<int:doctor_id>', methods=['GET'])
def doctor_cases_route(doctor_id):
    return jsonify(pr.get_cases_checked_by_practitioner(doctor_id))

@app.route('/practitioner/recent_cases/<int:practitioner_id>', methods=['GET'])
def practitioner_recent_cases_route(practitioner_id):
    recent_cases = pr.get_recent_cases(practitioner_id)
    if 'error' in recent_cases:
        return jsonify(recent_cases), 500
    else:
        formatted_cases = [{
            'diagnosis_id': case[0],
            'diagnosis_date': case[1],
            'patient_id': case[2],
            'patient_firstname': case[3],
            'patient_lastname': case[4],
            'disease_name': case[5]
        } for case in recent_cases]
        return jsonify(formatted_cases)
    
@app.route('/practitioner/checked_cases/<int:practitioner_id>/recent_cases', methods=['GET'])
def get_recent_cases_route(practitioner_id):
    return pr.get_recent_cases_by_practitioner(practitioner_id)

if __name__ == '__main__':
    app.run(debug=True)
