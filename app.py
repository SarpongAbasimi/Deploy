from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='my-app/build', static_url_path='')
cors = CORS(app)

@app.route("/api", methods=['GET'])
@cross_origin()
def index():
    return {
        "name": "Nana Sarpong Kumakuma",
        "country": "Me fri Ghana",
        "occupation": "Software Engineer",
        "currentCompany": "47degs",
        "previousCompany": ["Deloitte 🚀", "Makers 🤙🏿", "47degs ❤️"],
        "Youtube": "https://www.youtube.com/channel/UCIvL4BDxk3MrKjTF1avFmQQ/videos"
    }

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')
    
if __name__ == '__main__':
    app.run()