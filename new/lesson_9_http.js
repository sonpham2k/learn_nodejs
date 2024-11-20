var http = require('http');

// Khoi tao 1 server cong 8000
http.createServer(
  function(request, response){
    // Thiet lap kieu trang muon server tra ve 1 trang html
    response.writeHead(200, {'Content-Type': 'text/html'});

    // Thiet lap noi dung trang tra ve dang html
    // response.write('<html>');
    // response.write('<head>');
    // response.write('<title>Hello world </title>');
    // response.write('</head>');
    // response.write('<body> <h1>Hello world<h1> </body>');
    // response.write('</html>');

    // Thiet lap noi dung tra ve
    // response.write("Hello! 1234567");

    // Thiet lap url ma client gui len server, cac gia tri cua params
    var param = request.url;
    response.write(param);

    response.end();
  }

).listen(8000);