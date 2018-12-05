var spawn = require('child_process').exec;

spawn('twitter-proxy');
spawn('http-server -P http://localhost:7890');

console.log('Server running on http://localhost:8080');
console.log('twitter-proxy: http://localhost:7890');
