FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Add build tools for any native modules
RUN apk add --no-cache build-base python3

# Install dependencies
RUN npm install --production

# Copy all project files
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
