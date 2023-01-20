from app import app
from utils.db import db
import config

#index.py va arrancar la aplicacion 
db.init_app(app)

with app.app_context():
    db.create_all()

if __name__== "__main__":
    app.run(debug=True)