FROM node:18.17-alpine

WORKDIR /app
RUN npm cache clean --force
RUN rm -rf package-lock.json node_modules

COPY ./package*.json ./
RUN npm ci
COPY . ./

CMD ["npm", "run", "dev"]
