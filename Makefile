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

all:
	@echo "Please select an action"

build: build-frontend
	$(DOCKER) build -t $(IMAGE_TAG):latest ./

build-frontend:
	npm --prefix frontend run build

RUN = $(DOCKER) run --rm -it -p 8000:80 --name $(IMAGE_NAME) 

run:
	$(RUN) $(IMAGE_TAG):latest

run-dev:
	$(RUN) -v $(CWD)/frontend:/frontend -v $(CWD)/backend:/backend $(IMAGE_TAG):latest

shell:
	$(DOCKER) exec -it $(IMAGE_NAME) bash
