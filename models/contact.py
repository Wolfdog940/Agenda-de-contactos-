from utils.db import db
from sqlalchemy import Table, Column, Integer, String



class Contact(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    fullname = db.Column(db.String(12))
    email = db.Column(db.String(100))
    phone = db.Column(db.String(100))

    def __init__(self,fullname,email,phone):
        self.fullname = fullname
        self.email = email
        self.phone = phone

    def serialize(self):
        return{
            "id":self.id,
            "fullname":self.fullname,
            "email":self.email,
            "phone":self.phone

        }

