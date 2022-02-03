FROM fedora:latest

RUN yum -y upgrade
RUN yum -y install llvm12 llvm12-devel clang make findutils git python3 python3-pip

RUN git clone https://github.com/RainingComputers/ShnooTalk
RUN cd ShnooTalk; make build; make install
COPY ./shnootalk_playground_server ./shnootalk_playground_server
COPY ./Pipfile .
COPY ./Pipfile.lock .

RUN pip install pipenv
RUN pipenv install --system

CMD uvicorn shnootalk_playground_server:app --host 0.0.0.0 --port 8000
