# Use Node 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# ---------------------------
# STEP 1: Install server dependencies
# ---------------------------
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install
COPY server .

# ---------------------------
# STEP 2: Install client dependencies & build
# ---------------------------
COPY client/package*.json ./  # <- copy directly into /app
WORKDIR /app
RUN mkdir client && cp package*.json client/ && cd client && npm install
COPY client ./client
WORKDIR /app/client
RUN npm run build

# ---------------------------
# STEP 3: Expose ports
# ---------------------------
EXPOSE 5000  # server
EXPOSE 3000  # client

# ---------------------------
# STEP 4: Start both server & client
# ---------------------------
CMD sh -c "cd /app/server && npm start & cd /app/client && npm start"

