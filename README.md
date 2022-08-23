## Create a .env file in the server directory, which has the following variables:

DATABASE_URL= (very easy to init one with railyway.app, postgresql preferred)\
SERVER_PORT= Just the server's port, w/e you like\

Once that's done, cd into the server folder, and run:\
npm install\
migrate:dev\
npm run build\
npm run start:watch\

Then for the client, run:
npm install\
npm start
