from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Using SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/fastrack'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Model
class Detail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    purchasedprice = db.Column(db.Integer)

# Routes
@app.route('/details', methods=['POST'])
def create_detail():
    data = request.get_json()
    new_detail = Detail(id=data['id'], name=data['name'], purchasedprice=data['purchasedprice'])
    db.session.add(new_detail)
    db.session.commit()
    return jsonify({'message': 'Record created'}), 201

@app.route('/details', methods=['GET'])
def get_details():
    all_details = Detail.query.all()
    result = [{'id': d.id, 'name': d.name, 'purchasedprice': d.purchasedprice} for d in all_details]
    return jsonify(result)

@app.route('/details/<int:id>', methods=['GET'])
def get_detail(id):
    detail = Detail.query.get(id)
    if not detail:
        return jsonify({'message': 'Not found'}), 404
    return jsonify({'id': detail.id, 'name': detail.name, 'purchasedprice': detail.purchasedprice})

@app.route('/details/<int:id>', methods=['PUT'])
def update_detail(id):
    data = request.get_json()
    detail = Detail.query.get(id)
    if not detail:
        return jsonify({'message': 'Not found'}), 404
    detail.name = data['name']
    detail.purchasedprice = data['purchasedprice']
    db.session.commit()
    return jsonify({'message': 'Record updated'})

@app.route('/details/<int:id>', methods=['DELETE'])
def delete_detail(id):
    detail = Detail.query.get(id)
    if not detail:
        return jsonify({'message': 'Not found'}), 404
    db.session.delete(detail)
    db.session.commit()
    return jsonify({'message': 'Record deleted'})

# ✅ Correct way to create tables if @before_first_request doesn't work
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)