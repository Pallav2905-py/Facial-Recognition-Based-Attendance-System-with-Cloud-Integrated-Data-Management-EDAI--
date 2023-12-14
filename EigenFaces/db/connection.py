from pymongo import MongoClient 
def connect(uri):
    client = MongoClient(uri)
    return client