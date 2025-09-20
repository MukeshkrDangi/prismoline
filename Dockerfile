# Use Node 20
FROM node:20

# Set root workdir
WORKDIR /app

# ---------------------------
# STEP 1: Server
# ---------------------------
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install
COPY server .

# ---------------------------
# STEP 2: Client
# ---------------------------
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install
COPY client .
RUN npm run build

# ---------------------------
# STEP 3: Expose ports
# ---------------------------
EXPOSE 5000 3000

# ---------------------------
# STEP 4: Use concurrently to start both
# ---------------------------
RUN npm install -g concurrently
WORKDIR /app
CMD ["concurrently", "--kill-others", "npm:start --prefix server", "npm:start --prefix client"]


