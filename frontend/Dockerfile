FROM node:8.7.0-alpine

# Create app directory and use it as the working directory
RUN mkdir -p /srv/app/net-worth-tracker-client
WORKDIR /srv/app/net-worth-tracker-client

COPY package.json /srv/app/net-worth-tracker-client
COPY package-lock.json /srv/app/net-worth-tracker-client

RUN npm install

COPY . /srv/app/net-worth-tracker-client

CMD ["npm", "start"]