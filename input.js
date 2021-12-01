// Stores the active TCP connection object.
let connection;

// function that allows us to turn our key inputs into movement
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === '1') {
    connection.write('Say: nom nom nom');
  }
  if (key === '2') {
    connection.write("Say: I'm stuffed");
  }
  if (key === '3') {
    connection.write("Say: I'm moving!!");
  }
  if (key === '4') {
    connection.write('Say: longboy time');
  }
};
// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};