APP_NAME = shnootalk_playground_server
DOCKER_BASE_NAME = shnootalk-playground-server
DOCKER_TAG_VERSION = 0.3.6

.PHONY: help push clean test lint  typechk push

help:
	@echo "Note: Please make sure you are in pipenv shell"
	@echo ""
	@echo "clean"
	@echo "    Remove generated files"
	@echo "test"
	@echo "    Run tests"
	@echo "lint"
	@echo "    Print pylint score"
	@echo "typechk"
	@echo "    Type check source"
	@echo "push"
	@echo "    Build and push docker image to dockerhub"
	@echo ""

clean:
	rm -f -r $(APP_NAME)/__pycache__
	rm -f -r .pytest_cache/
	rm -f tests/fixtures/*/*.o
	rm -f -r tests/fixtures/*/*prog*
	find . -type d -name  "__pycache__" -exec rm -r {} +
	rm -f -r build/
	rm -f -r dist/
	rm -rf .mypy_cache

test:
	pytest tests -vv

lint:
	pylint $(APP_NAME)  --rcfile ./.pylintrc

typechk:
	mypy --package $(APP_NAME) --namespace-packages --install-types

rundev:
	uvicorn $(APP_NAME):app --reload

push:
	docker buildx build --platform linux/amd64 . -t shnoo28/$(DOCKER_BASE_NAME):$(DOCKER_TAG_VERSION)
	docker push shnoo28/$(DOCKER_BASE_NAME):$(DOCKER_TAG_VERSION)
