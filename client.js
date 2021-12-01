const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // allows us to recieve incoming data from the server, then logs it to the console so we can see
  conn.on("data", (data) => {
    console.log(`${data}`);
  });

  //
  conn.on("connect", () => {
    conn.write('Name: AMS');
    console.log("connection is successfully established");
  });
  return conn;
};


module.exports = {
  net,
  connect,
};