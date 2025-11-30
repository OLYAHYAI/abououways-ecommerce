FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production=false

# Copy the rest of the application
COPY . .

# Create data directory for SQLite
RUN mkdir -p data

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "run", "develop"]