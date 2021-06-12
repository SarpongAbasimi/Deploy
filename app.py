from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)

@app.route("/api", methods=['GET'])
def index():
    return {
        "name": "sarpong"
    }

# @app.route('/')
# def serve():
#     return send_from_directory(app.static_folder, 'index.html')
    
if __name__ == '__main__':
    app.run()