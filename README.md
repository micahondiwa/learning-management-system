# learning-management-system
A Django + React comprehensive Learning Management System equipped with essential features for both learners and instructors.

## Repository Structure
```
learning-management-system/
├── backend/          # Django backend application
├── frontend/         # React frontend application
├── .gitignore        
└── README.md         
```

### Backend 
```
backend/
├── api/              # Handles REST API endpoints and models for LMS features
│   ├── models.py     
│   ├── views.py      
│   ├── admin.py
│   ├── apps.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
├── backend/          # Django project root (settings, main URLs)
│   ├── settings.py   
│   ├── urls.py      
│   ├── wsgi.py      
│   ├── asgi.py       
├── core/             # Core LMS models (e.g., courses, lessons; currently empty)
│   ├── models.py
│   ├── admin.py
│   ├── apps.py
│   ├── tests.py views.py
│   ├── views.py  
├── templates/        
│   └── email/ password_reset.html
│   └── email/ password_reset.txt      
├── userauths/        
│   ├── models.py
│   ├── admin.py
│   ├── apps.py
│   ├── tests.py
│   ├── views.py    
├── manage.py        
└── requirements.txt  
```
### Frontend 

```
frontend/
├── public/           
├── src/              
│   ├── App.jsx       
│   ├── components/   
│   ├── (other subdirs like assets/, pages/, services/ assumed for routing and API calls)
│   ├── main.jsx      
│   └── index.css     
├── .gitignore       
├── README.md         
├── eslint.config.js  
├── index.html        
├── package-lock.json
├── package.json      
└── vite.config.js   
```
