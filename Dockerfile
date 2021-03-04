FROM node:alpine

WORKDIR /usr/webpage-visits

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]