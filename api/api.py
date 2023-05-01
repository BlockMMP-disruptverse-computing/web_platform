from flask import Flask, request
from google.cloud import storage
from google.oauth2 import service_account
from computational_setup import main

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/upload", methods=["POST"])
def get_upload_url():
    file = request.files['file']

    credentials = service_account.Credentials.from_service_account_file("key.json")

    #upload file to google cloud storage
    client = storage.Client(credentials=credentials)                       # gets a client object
    bucket = client.get_bucket('gliotestbucket')
    blob = bucket.blob(file.filename)
    blob.upload_from_file(file)
    print("uploaded")

    return {'message': 'File uploaded successfully'}

@app.route("/download", methods=["POST"])
def download():
    file = request.files['file']

    credentials = service_account.Credentials.from_service_account_file("key.json")

    #upload file to google cloud storage
    client = storage.Client(credentials=credentials)                    
    bucket = client.get_bucket('gliotestbucket')
    blob = bucket.blob(file.filename)
    blob.download_to_filename(file)
    print("downloaded")

    return {'message': 'File downloaded successfully'}

@app.route('/api/analysis')
def analyze():
    main.fetch_data()
    main.run_analysis()
    return "Success!"
