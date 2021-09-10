var connect = require('connect');
var serveStatic = require('serve-static');
// Paste your HTML folder
var rootFolder = './src';

connect()
  .use(serveStatic(rootFolder, { 'index': ['index.html', 'index.htm'] }))
  .listen(8888, () => console.log('Server running on http://localhost:8888'));