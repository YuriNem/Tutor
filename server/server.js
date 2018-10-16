const http = require('http');
const util = require('util');
const fs = require('fs');

const readFileSync = util.promisify(fs.readFile);

http.createServer(async (req, res) => {
  if (req.url === '/') {
    const html = await readFileSync('./public/index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url.match(/.css$/)) {
    const css = await readFileSync('./style/style.css');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(css);
  } else if (req.url.match(/.js$/)) {
    const js = await readFileSync('./dist/main.js');
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.end(js);
  }
}).listen(process.env.PORT || 3000, () => console.log('Server is working'));