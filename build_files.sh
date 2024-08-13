# #!/bin/bash

# # Exit on error
# set -e

# echo "Building the project..."

# # Ensure pip and virtualenv are installed
# if ! command -v pip &> /dev/null; then
#     echo "pip could not be found"
#     exit 1
# fi

# if ! python -m pip show virtualenv &> /dev/null; then
#     python -m pip install virtualenv
# fi

# # Create and activate virtual environment
# python -m venv env
# source env/bin/activate

# # Upgrade pip to the latest version
# python -m pip install --upgrade pip

# # Install project dependencies
# python -m pip install -r requirements.txt

# echo "Making migrations..."
# python manage.py makemigrations --noinput
# python manage.py migrate --noinput
 
# echo "Collecting static files..."
# python manage.py collectstatic --noinput --clear

# # Deactivate the virtual environment
# deactivate

# echo "Build process completed successfully."

pip install -r requirements.txt
python3.9 manage.py collectstatic