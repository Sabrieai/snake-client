const { net, connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
connect();

setupInput();