email_dict = {
    "student1":"s1@vit.edu",
    "pallav":"pallav@vit.edu",
    "vansh":"vansh@vit.edu"
}
print(email_dict.get("pallav"))

from connection import connect
from datetime import date, datetime
print(date.today().strftime("%d/%m/%Y"))
print(datetime.now().strftime("%H:%M:%S"))
client = connect("mongodb://localhost:27017/")
db = client["attendence"]
collection = db["attendances"]
sample_input = {
    "date":"30-12-2023",
    "email":"pallav@vit.edu",
    "time":"11:06"
}
print(collection.insert_one(sample_input))

name = ["vansh", "Pallav", "ved"]
print(len(name))
