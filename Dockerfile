# Backend Dockerfile for Node.js + TypeScript (Express)
FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

# Only build backend (ignore frontend)
RUN rm -rf frontend
RUN npm run build

CMD ["npm", "start"]
