const { spawnSync } = require('child_process');

module.exports = (req, res) => {
  const result = spawnSync('php', ['index.php']); // Replace 'index.php' with your PHP script file name
  const output = result.stdout.toString();
  const error = result.stderr.toString();

  if (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } else {
    res.status(200).send(output);
  }
};
