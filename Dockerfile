FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install -g gatsby-cli && npm install

COPY . .

EXPOSE 8000
CMD ["gatsby", "develop", "-H", "0.0.0.0"]