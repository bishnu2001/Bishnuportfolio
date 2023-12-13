# Use an official Node.js runtime as a parent image
FROM node:14-alpine


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
