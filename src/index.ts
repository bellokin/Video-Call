import { Server } from "./server";
require('dotenv').config();

// Parse the PORT as a number

const server = new Server();

server.listen(port => {
  console.log(`Server is listening on http://localhost:${port}`);
});