## Server

1. cd into the `server` directory
2. Create a `.env` file with the following variables:
- `DATABASE_URL= (very easy to init one with railyway.app, postgresql preferred)`
- `SERVER_PORT= Just the server's port, w/e you like`
3. Run the following commands to start the server:
- `npm install`
- `npm run migrate:dev`
- `npm run build`
- `npm run start:watch`
4. Whenever you change the entity structure in the `prisma.schema` file, make sure to run `npm run migrate:dev` again.

## Client

1. cd into the `client` directory
2. Rum the following commands to start the client:
- `npm install`
- `npm start`
