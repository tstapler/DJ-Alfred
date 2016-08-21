FROM ubuntu:14.04

MAINTAINER Tyler Stapler

# Install required packages and remove the apt packages cache when done.

RUN apt-get update && apt-get install -y \
	git \
	python \
	python-dev \
	python-setuptools \
	nginx \
	supervisor \
  && rm -rf /var/lib/apt/lists/*

RUN easy_install pip

RUN pip install uwsgi


COPY backend/requirements.txt /home/docker/code/backend/
RUN pip install -r /home/docker/code/backend/requirements.txt

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY nginx-app.conf /etc/nginx/sites-available/default
COPY supervisor-app.conf /etc/supervisor/conf.d/
COPY uwsgi.ini /home/docker/code/

EXPOSE 80
CMD ["supervisord", "-n"]
