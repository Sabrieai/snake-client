const net = require("net");

// establishes a connection with the game server
const connect = function() {
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

  //
  conn.on("connect", () => {
    conn.write('Name: AMS');
    conn.write('Say: nom nom nom');
    console.log("connection is successfully established");
  });


  /* conn.on('connect', () => {
    conn.write('Move: up');
  });

  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: right');
    } ,1000);
  });

  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: down');
    } ,5000);
  });

  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: left');
    } ,10000);
  });
*/

  return conn;
};


module.exports = {
  net,
  connect,
};