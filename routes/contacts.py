from flask import Blueprint,render_template,request,jsonify
from models.contact import Contact
from utils.db import db

contacts = Blueprint("contacts", __name__)

@contacts.route("/")
def home():

   
    return render_template("/")



@contacts.route("/new",methods =["POST"] )
def add_contact():

    fullname= request.form["fullname"]
    email=request.form["email"]
    phone=request.form["phone"]

    if fullname is None:
        return jsonify({"msg":"Name is missing,write one please"}),404
    if email is None :
        return jsonify({"msg":"Email is missing , write one please"}),404
    if phone is None :
        return jsonify({"msg":"Phone is missing , write one please"})
        

    new_contact=Contact(fullname,email,phone)

    db.session.add(new_contact)
    db.session.commit()
    
    return jsonify(new_contact.serialize()),200


@contacts.route("/update/<int:id>" , methods=["PUT"])
def update(id):

    contact= Contact.query.get(id)
    contact.fullname= request.form["fullname"]
    contact.email=request.form["email"]
    contact.phone=request.form["phone"]
    db.session.commit()
    

    return jsonify({"msg": "contact has been update"}), 200



@contacts.route("/delete/<int:id>", methods=["DELETE"])
def delete(id):

    contact= Contact.query.get(id)
    db.session.delete(contact)
    db.session.commit()

    return jsonify({"msg": "contact has been deleted"}), 200



@contacts.route('/allcontacs', methods=['GET'])

def get_contacts():
    contacts = Contact.query.all()
    serializer = list(map(lambda x: x.serialize(), contacts))
    print(serializer)

    return jsonify({"data": serializer}), 200