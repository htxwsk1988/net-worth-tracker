FROM node:8.7.0-alpine

# Create app directory and use it as the working directory
RUN mkdir -p /srv/app/net-worth-tracker-server
WORKDIR /srv/app/net-worth-tracker-server

COPY package.json /srv/app/net-worth-tracker-server
COPY package-lock.json /srv/app/net-worth-tracker-server

RUN npm install

COPY . /srv/app/net-worth-tracker-server

CMD ["nodemon", "server"]