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
