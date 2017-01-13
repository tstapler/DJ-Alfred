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


COPY backend/requirements.txt /backend/
RUN pip install -r /backend/requirements.txt

# Turn off the default nginx daemon
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY backend/nginx-app.conf /etc/nginx/sites-available/default
COPY backend/supervisor-app.conf /etc/supervisor/conf.d/
COPY backend/ /backend

COPY frontend/dist /frontend/dist

EXPOSE 80
CMD ["/backend/run.sh"]
