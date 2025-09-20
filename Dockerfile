# Use Node 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# ---------------------------
# STEP 1: Build server
# ---------------------------
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install
COPY server .
EXPOSE 5000

# ---------------------------
# STEP 2: Build client
# ---------------------------
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install
COPY client .
RUN npm run build
EXPOSE 3000

# ---------------------------
# STEP 3: Start both apps
# ---------------------------
CMD sh -c "cd /app/server && npm start & cd /app/client && npm start"

