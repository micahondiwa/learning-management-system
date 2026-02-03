# learning-management-system
A Django + React comprehensive Learning Management System equipped with essential features for both learners and instructors.

## Repository Structure
```
learning-management-system/
├── backend/          # Django backend application
├── frontend/         # React frontend application
├── .gitignore        # Standard Git ignore rules (e.g., excluding virtualenvs, build artifacts)
└── README.md         # Brief project description
```

### Backend Directory (Detailed Tree)

backend/
├── api/              # Handles REST API endpoints and models for LMS features
│   ├── models.py     
│   ├── views.py      # Contains authentication-related views (e.g., registration, token, password reset)
│   ├── (other files like serializers.py, urls.py assumed but not confirmed; likely present for API functionality)
├── backend/          # Django project root (settings, main URLs)
│   ├── settings.py   # Core configuration (apps, middleware, databases)
│   ├── urls.py       # Main URL routing, includes admin, API docs (Swagger), and static/media serving
│   ├── wsgi.py       # WSGI entry point (standard)
│   ├── asgi.py       # ASGI entry point (standard)
├── core/             # Intended for core LMS models (e.g., courses, lessons; currently empty)
│   ├── models.py     # Empty models file
├── templates/        # HTML templates (e.g., for emails)
│   └── email/        # Directory for email templates (likely used for password reset or notifications)
├── userauths/        # Custom user authentication app
│   ├── models.py     # Custom User and Profile models
├── manage.py         # Django CLI utility for admin tasks
└── requirements.txt  # Python dependencies list

