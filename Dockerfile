# Use official Node.js image as the base
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt app
RUN npm run build

# Production image
FROM node:18-alpine as production
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/.output .output
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json ./

# Expose port (default Nuxt port)
EXPOSE 3000

# Start the Nuxt app
CMD ["node", ".output/server/index.mjs"]
