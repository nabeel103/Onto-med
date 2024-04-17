import psycopg2
from dbUtils import connect_to_database
    
def get_counts():
    try:
        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()

            cursor.execute("SELECT COUNT(*) FROM patients")
            num_patients = cursor.fetchone()[0]

            cursor.execute("SELECT COUNT(*) FROM practitioners")
            num_practitioners = cursor.fetchone()[0]

            cursor.execute("SELECT COUNT(*) FROM practitioners WHERE issenior = true")
            num_senior_practitioners = cursor.fetchone()[0]

            connection.close()

            return num_patients, num_practitioners, num_senior_practitioners
        else:
            return None, None, None
    except psycopg2.Error as e:
        print("Database error:", e)
        return None, None, 
def get_activity_details():
    try:
        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("SELECT date_time, description FROM activity")
            activities = cursor.fetchall()
            connection.close()
           
            return activities
        else:
            return None
    except psycopg2.Error as e:
        print("Error retrieving activity details:", e)
        return None

def get_activity_with_person_details():
    try:
        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("""
                SELECT a.date_time, p.firstname, p.lastname, p.personid, p.type , a.description 
                FROM activity a 
                INNER JOIN person p ON a.person_id = p.personid
            """)
            activities = cursor.fetchall()
            connection.close()
            return activities
        else:
            return None
    except psycopg2.Error as e:
        print("Error retrieving activity details with person:", e)
        return None

def get_diagnoses():
    try:
        connection = connect_to_database()
        if connection:
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM diagnoses")
            diagnoses = cursor.fetchall()
            connection.close()
            return diagnoses
        else:
            return None
    except psycopg2.Error as e:
        print(f"Error retrieving diagnoses: {e}")
        return None
