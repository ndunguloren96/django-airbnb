FROM python:3.10-slim-bullseye 

# Set the working directory in the container
WORKDIR /usr/src/airbnb_backend

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy your application code into the container
COPY ./requirements.txt .

# Install any Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

