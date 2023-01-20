from flask import Flask
from routes.contacts import contacts
from flask_sqlalchemy import SQLAlchemy
from config import DATABASE_URI
# app.py va a tener la configuracion de la app

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] ='mysql://root:password@localhost/contactsdb'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


SQLAlchemy(app)

app.register_blueprint(contacts)
