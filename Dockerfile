# backend/Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the port and start the server
EXPOSE 5000
CMD [ "npm", "run", "dev" ]
