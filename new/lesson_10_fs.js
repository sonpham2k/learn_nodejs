var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  res.writeHead('200', {'content-type': 'text/html'});

  // Doc noi dung file va in ra website
  fs.readFile('code.html', 'utf-8', function (err, data) {
    if (err) throw err;

    res.write(data);
    res.end;
  })

  // Ghi noi dung vao file write.html
  fs.writeFile('write.html', "123", 'utf8', function (err) {
    //Kiểm tra nếu có lỗi thì xuất ra lỗi
    if (err)
        throw err;
    else //nếu không thì hiển thị nội dung ghi file thành công
        console.log('Ghi file thanh cong!');
  });
  
}).listen(8000)