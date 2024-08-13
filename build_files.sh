#!/bin/bash

# Exit on error
set -e

# Ensure virtualenv is installed
if ! python -m pip show virtualenv &> /dev/null; then
    python -m pip install virtualenv
fi

# Create and activate virtual environment
python -m venv env
source env/bin/activate

# Ensure pip is up-to-date
python -m pip install --upgrade pip

# Install Django and project dependencies
python -m pip install -r requirements.txt

# Make migrations and migrate
python manage.py makemigrations --noinput
python manage.py migrate --noinput

# Collect static files
python manage.py collectstatic --noinput --clear

# Deactivate the virtual environment
deactivate
