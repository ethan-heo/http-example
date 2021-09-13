import { createServer } from "http";
import app from "./app";

const server = createServer(app);

server.listen(3030, () => {
	console.log(`listening to ${3030}`);
});
