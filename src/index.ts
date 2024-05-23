import { Server } from "./server";
require('dotenv').config();

const server = new Server();

// Get port from environment variable or use a default value
const port: number = parseInt(process.env.PORT || '4000', 10);

server.listen(port,"0.0.0.0", () => console.log(`Server running on port ${port}`));
