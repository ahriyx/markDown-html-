// 1.先引入核心模块
// 2.引入第三方模块
// 3.引入自己的模块
// 把markdown转化为html的步骤
// 1.文件读取，转化为marked，在使用模板拼接html结构
// 引入核心模块
var fs = require('fs');
// 引入第三方模块
var marked = require('marked');
fs.readFile('../README.md', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  var htmlStr = marked(data);


  // 读取成功后，将文件写入
  // console.log(htmlStr);
  fs.readFile('./tpl.html', 'utf8', function (err, data) {
    if (err) {
      throw err;
    }
    htmlStr = data.replace('^_^', htmlStr);
    // console.log(htmlStr);

    fs.writeFile('./index.html', htmlStr, function (err) {
      if (err) {
        throw err;
      }
      console.log('success');
    })

  })


})