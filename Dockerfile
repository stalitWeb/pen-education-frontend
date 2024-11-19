# Configuration

# Set a base image
FROM node:alpine

# Spefify a working directory
WORKDIR /usr/app

# Copy package.json file first from the local fs to the image fs
COPY ./package.json ./

# Download and install some dependencies
RUN npm install

# Copy the all the local fs into the image fs
COPY ./ ./

# Set a default/primary command that get execture as soon as a container starts with this image
CMD [ "npm", "run dev" ]