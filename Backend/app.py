from flask import Flask, jsonify, request
import psycopg2

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

        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO person (firstname, lastname, email, password, phone, address, gender, date_of_birth, cnic, type) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING personid",
                           (firstname, lastname, email, password, phone, address, gender, date_of_birth, cnic, type))
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

        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("UPDATE person SET firstname = %s, lastname = %s, email = %s, password = %s, phone = %s, address = %s, gender = %s, date_of_birth = %s, cnic = %s, type = %s WHERE personid = %s",
                           (firstname, lastname, email, password, phone, address, gender, date_of_birth, cnic, type, id))
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
            cursor.execute("DELETE FROM person WHERE personid = %s", (id,))
            connection.commit()
            connection.close()
            return jsonify({'message': 'Person deleted successfully'}), 200
        else:
            return jsonify({'error': 'Unable to connect to the database'}), 500
    except psycopg2.Error as e:
        return jsonify({'error': f'Database error: {e}'}), 500

# CRUD operations for patients
# Implement similar CRUD operations for practitioners and domainexperts

if __name__ == '__main__':
    app.run(debug=True)
