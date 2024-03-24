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

@app.route('/add_persons', methods=['POST'])
def add_person():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    firstname = data.get('firstname')
    lastname = data.get('lastname')
    email = data.get('email')
    phone = data.get('phone')
    password = data.get('password')

    if not firstname or not lastname or not password:
        return jsonify({"error": "First name, last name, and password are required"}), 400
    
    connection = connect_to_database()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO person (firstname, lastname, email, phone, password) VALUES (%s, %s, %s, %s, %s) RETURNING personid",
                           (firstname, lastname, email, phone, password))
            person_id = cursor.fetchone()[0]
            connection.commit()
            cursor.close()
            connection.close()
            return jsonify({"person_id": person_id}), 201
        except psycopg2.Error as e:
            print("Error executing SQL query:", e)
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Unable to connect to the database"}), 500

@app.route('/add_patients', methods=['POST'])
def add_patient():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    firstname = data.get('firstname')
    lastname = data.get('lastname')
    email = data.get('email')
    phone = data.get('phone')
    password = data.get('password')
    address = data.get('address')

    if not firstname or not lastname or not address:
        return jsonify({"error": "First name, last name, and address are required"}), 400
    
    connection = connect_to_database()
    if connection:
        try:
            cursor = connection.cursor()

            # Insert into person table first
            cursor.execute("INSERT INTO person (firstname, lastname, email, phone, password) VALUES (%s, %s, %s, %s, %s) RETURNING personid",
                           (firstname, lastname, email, phone, password))
            person_id = cursor.fetchone()[0]

            # Then insert into patients table with the same personid
            cursor.execute("INSERT INTO patients (patientid, address) VALUES (%s, %s)",
                           (person_id, address))

            connection.commit()
            cursor.close()
            connection.close()

            return jsonify({"patient_id": person_id}), 201
        except psycopg2.Error as e:
            print("Error executing SQL query:", e)
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Unable to connect to the database"}), 500


@app.route('/patients', methods=['GET'])
def get_patients():
    connection = connect_to_database()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM patients")
            patients = [dict(row) for row in cursor.fetchall()]
            cursor.close()
            connection.close()
            return jsonify(patients)
        except psycopg2.Error as e:
            print("Error executing SQL query:", e)
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Unable to connect to the database"}), 500

@app.route('/patients/<int:patient_id>', methods=['GET'])
def get_patient(patient_id):
    connection = connect_to_database()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM patients WHERE patientid = %s", (patient_id,))
            patient = cursor.fetchone()
            cursor.close()
            connection.close()
            
            if patient:
                return jsonify(dict(patient))
            else:
                return jsonify({'message': 'Patient not found'}), 404
        except psycopg2.Error as e:
            print("Error executing SQL query:", e)
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Unable to connect to the database"}), 500

if __name__ == '__main__':
    app.run(debug=True)
