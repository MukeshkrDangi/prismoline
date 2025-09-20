# Use Node 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# ---------------------------
# STEP 1: Install server dependencies
# ---------------------------
# Copy server package files
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install

# Copy full server code
COPY server .

# ---------------------------
# STEP 2: Install client dependencies & build
# ---------------------------
# Set workdir to root
WORKDIR /app

# Copy client package files
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install

# Copy full client code
COPY client .

# Build client
RUN npm run build

# ---------------------------
# STEP 3: Expose ports
# ---------------------------
EXPOSE 5000
EXPOSE 3000

# ---------------------------
# STEP 4: Start server & client
# ---------------------------
# Use sh -c to run both processes
CMD sh -c "cd /app/server && npm start & cd /app/client && npm start"

