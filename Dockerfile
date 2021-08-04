# Image we're building from
FROM node:14-alpine
# Sets environment for subsequent builds
ENV NODE_ENV=production
# Directory holding the application code inside the image
WORKDIR /app
# Wildcard used to ensure package.json & package-lock.json (if needed) are copied
COPY ["package.json", "package-lock.json*"]
# Installs depenedencies from package.json and/or package-lock.json
RUN yarn install --production --silent && mv node_modules ../
# Bundle app source
COPY . .
# App binds to port 3000, EXPOSE maps this by the docker daemon
EXPOSE 3000
# Run the app, using yarn to start the server form this image
CMD ["yarn", "start"]
