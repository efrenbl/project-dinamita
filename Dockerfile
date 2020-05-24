# start from an official image
FROM python:3.6

# arbitrary location choice: you can change the directory
RUN mkdir -p /desktop/dinamita
WORKDIR /desktop/dinamita

# install our two dependencies
# we use --system flag because we don't need an extra virtualenv
COPY Pipfile Pipfile.lock /desktop/dinamita/
RUN pip install pipenv && pipenv install --system

# copy our project code
COPY . /desktop/dinamita

# expose the port 8000
EXPOSE 8000

# define the default command to run when starting the container
CMD ["gunicorn", "--chdir", "notibot", "--bind", ":8000", "notibot.wsgi:application"]