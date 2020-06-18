FROM node:11.13.0-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm build
EXPOSE 80
CMD["npm","serve"]
