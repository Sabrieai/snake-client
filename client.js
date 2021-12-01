const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // allows us to recieve incoming data from the server, then logs it to the console so we can see
  conn.on("data", (data) => {
    console.log(`${data}`);
  });

  return conn;
};


module.exports = {
  net,
  connect,
};