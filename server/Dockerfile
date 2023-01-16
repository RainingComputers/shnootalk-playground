FROM ubuntu:latest

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get -y install tar g++ make findutils git python3 python3-pip curl libbsd-dev

RUN curl -sf -L https://raw.githubusercontent.com/RainingComputers/ShnooTalk/main/install.sh | sh

COPY ./shnootalk_playground_server ./shnootalk_playground_server
COPY ./Pipfile .
COPY ./Pipfile.lock .

RUN pip install pipenv
RUN pipenv install --system

CMD uvicorn shnootalk_playground_server:app --host 0.0.0.0 --port 8000
