# Backend Dockerfile for Node.js + TypeScript (Express)
FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
RUN npm install --save-dev @types/pg @types/bcrypt

COPY . .

# Only build backend (ignore frontend)
RUN rm -rf frontend
RUN npm run build

CMD ["npm", "start"]
# Backend Dockerfile for Node.js + TypeScript (Express)
# Backend Dockerfile for Node.js + TypeScript (Express)
# Backend Dockerfile for Node.js + TypeScript (Express)
