FROM python:3.8.2

ENV PYTHONUNBUFFERED 1

RUN mkdir /src

WORKDIR /src

COPY requirements.txt /src/

#RUN python -m pip install django
#RUN pip install django==2.2.12 --no-cache-dir
RUN rm ~/.cache/pip -rf
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt
RUN rm ~/.cache/pip -rf

RUN pip install --no-cache-dir django

COPY . /src