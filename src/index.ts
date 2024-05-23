import { Server } from "./server";
require('dotenv').config();

// Parse the PORT as a number
const port = parseInt(process.env.PORT || '5000', 10);  
const host = process.env.HOST || "0.0.0.0"; // Use HOST environment variable or default to '0.0.0.0'

const server = new Server();

server.listen(port, host, () => {
  console.log(`Server is listening on http://${port}`);
});
