#!/bin/bash

# Ensure pip is installed
if ! command -v pip &> /dev/null; then
    echo "pip could not be found"
    exit 1
fi

# Create and activate virtual environment
python -m venv env
source env/bin/activate

# Install Django and project dependencies
pip install -r requirements.txt

# Make migrations and migrate
python manage.py makemigrations --noinput
python manage.py migrate --noinput

# Collect static files
python manage.py collectstatic --noinput --clear

# Deactivate the virtual environment
deactivate
