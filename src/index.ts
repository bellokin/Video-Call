import { Server } from "./server";
require('dotenv').config();

const server = new Server();
const port = parseInt(process.env.PORT || '5000', 10); // Parse the PORT as a number
const host = process.env.HOST || '0.0.0.0'; // Use HOST environment variable or default to '0.0.0.0'

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
