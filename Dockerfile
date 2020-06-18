FROM node:11.13.0-alpine
WORKDIR /app
COPY . .
RUN npm install -g gatsby-cli
RUN npm install
RUN npm build
EXPOSE 80
CMD ["gatsby", "develop", "-H", "0.0.0.0","-p","80" ]