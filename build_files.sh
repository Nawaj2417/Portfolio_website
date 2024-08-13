#!/bin/bash

<<<<<<< HEAD
#build the project
echo "Building the project..."
python3.9 -m pip install -r requirements.txt
=======
# Exit on error
set -e

# Ensure virtualenv is installed
if ! python -m pip show virtualenv &> /dev/null; then
    python -m pip install virtualenv
fi
>>>>>>> de455e3f4597fdd1aaec9c8a6c3080e5bbc8dc3b

echo "Make migrations..."
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput

<<<<<<< HEAD
echo "Collect static files..."
python3.9 manage.py collectstatic --noinput
=======
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
>>>>>>> de455e3f4597fdd1aaec9c8a6c3080e5bbc8dc3b
