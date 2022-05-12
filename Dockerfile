# pull the official base image
FROM node:latest

# set working direction
WORKDIR /app

# add app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

# install application dependencies 
RUN npm i

# start app
CMD ["npm", "run", "start"]