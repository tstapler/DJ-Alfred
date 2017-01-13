MAINTAINER = tstapler
IMAGE_NAME = djalfred
IMAGE_TAG = $(MAINTAINER)/$(IMAGE_NAME)

CWD = $(shell pwd)
DOCKER_USER := $(shell id -Gn $$USER | grep -o "\bdocker\b")

ifeq ($(DOCKER_USER), docker)
	DOCKER = docker
else
	DOCKER = sudo docker
endif

NPM = npm --prefix frontend 
DJANGO = python backend/manage.py

all:
	@echo "Please select an action"

build: build-frontend
	$(DOCKER) build -t $(IMAGE_TAG):latest ./

build-frontend:
	$(NPM) run build

init:
	$(NPM) install
	pip install -r backend/requirements.txt
	$(DJANGO) collectstatic

RUN = $(DOCKER) run --rm -it -p 8001:80 --name $(IMAGE_NAME) 

# Run the containerized application
run:
	$(RUN) $(IMAGE_TAG):latest

# Run the container with local directories mounted
run-dev:
	$(RUN) -v $(CWD)/frontend:/frontend -v $(CWD)/backend:/backend $(IMAGE_TAG):latest

# Run Django locally
run-backend:
	backend/dev/start_dev_server.sh

# Run the angular 2 webpack dev server
run-frontend:
	$(NPM) start

shell:
	$(DOCKER) exec -it $(IMAGE_NAME) bash
