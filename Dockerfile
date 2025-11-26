# Use Node 22 for compatibility with isolated-vm
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files for caching
COPY package*.json ./

# Install dependencies + global tools
RUN npm install && npm install -g qrcode-terminal pm2

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the app with PM2 runtime
CMD ["pm2-runtime", "index.js", "--name", "ALI-MD"]
