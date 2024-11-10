FROM node:22.11.0

WORKDIR /app

ARG PORT=6000
ENV PORT=$PORT

EXPOSE ${PORT}

COPY . . 

RUN npm install && npm cache clean --force
RUN if [ "$AUDIT_FIX" = "true" ]; then npm audit fix; fi;
RUN npm run build

CMD ["npm", "run", "start:dev"]

