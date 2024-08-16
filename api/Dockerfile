FROM node:20.10-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci || npm ci --verbose

COPY . .

RUN npm run build

FROM node:20.10-alpine AS production

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
