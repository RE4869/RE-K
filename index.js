const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // 根据请求路径处理不同的问题
    if (parsedUrl.pathname === '/help') {
        // 返回详细的技术支持和在线帮助信息
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to our technical support and online help.\nPlease contact us at support@example.com for assistance.');
    } else {
        // 返回404错误，表示请求的页面不存在
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});

// 启动服务器，监听端口3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
