git clone https://github.com/User0676/event_management_system

pip3 install -r requirements.txt

npm install



running :

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser

python3 manage.py runserver

npm start


---------

http://127.0.0.1:8000/api/events/

по данному пути создать ивент

http://localhost:3000

а тут он появится, и у каждого ивента есть своя страничка