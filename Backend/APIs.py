from flask import Flask, jsonify, request
from app import app, engine
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError


@app.route('/patients', methods=['GET'])
def get_patients():
    return "hhhh"
    try:
        with engine.connect() as conn:
            query = "SELECT * FROM patients"
            result = conn.execute(query)
            print("hello")
            patients = [dict(row) for row in result]
            return jsonify(patients)
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 500

@app.route('/patients/<int:patient_id>', methods=['GET'])
def get_patient(patient_id):
    return "hhhh"
    try:
        with engine.connect() as conn:
            query = "SELECT * FROM patients WHERE patientid = :patient_id"
            result = conn.execute(text(query), patient_id=patient_id)
            patient = result.fetchone()
            print("hello2")

            if patient:
                return jsonify(dict(patient))
            else:
                return jsonify({'message': 'Patient not found'}), 404
    except SQLAlchemyError as e:
        return jsonify({'error': str(e)}), 500
