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
MAVEN = mvn

all:
	@echo "Please select an action"

build:
	build-frontend
	build-backend
	$(DOCKER) build -t $(IMAGE_TAG):latest ./

build-frontend:
	$(NPM) run build

build-backend:
	$(MAVEN) install -f backend/pom.xml

init:
	$(NPM) install
	$(MAVEN) compile -f backend/pom.xml

RUN = $(DOCKER) run --rm -it -p 8001:80 --name $(IMAGE_NAME)

# Run the containerized application
run:
	$(RUN) $(IMAGE_TAG):latest

# Run the container with local directories mounted
run-dev:
	$(RUN) -v $(CWD)/frontend:/frontend -v $(CWD)/backend:/backend $(IMAGE_TAG):latest

# Run java backend locally
run-backend:
	java -jar backend/target/dj-afred-backend-0.0.1.jar

# Run the angular 2 webpack dev server
run-frontend:
	$(NPM) start

shell:
	$(DOCKER) exec -it $(IMAGE_NAME) bash
