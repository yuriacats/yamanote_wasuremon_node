FROM node:18.12.1-slim
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY --chown=node:node package.json ./
RUN yarn install 
COPY --chown=node:node . .

USER node
CMD ["yarn","start"]
