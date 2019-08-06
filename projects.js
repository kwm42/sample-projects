const fs = require('fs'),
  path = require('path');

function deepRead1(dirpath) {
  var files = fs.readdirSync(dirpath, {
    withFileTypes: true
  });
  var o = {}
  files.forEach(file => {
    if (file.isFile() && file.name === 'index.html') {
      o = {
        path: dirpath,
        name: path.basename(dirpath)
      }
    }
    else if (file.isDirectory()) {
      // console.log(`${file.name} is a directory`);
      o[file.name] = deepRead1(dirpath + file.name + '/');
    }
  });
  return o;
}

function deepRead(dirpath) {
  var files = fs.readdirSync(dirpath, {
    withFileTypes: true}
  );
  var o = {}
  files.forEach(file => {
    if (file.isDirectory()) {
      // console.log(`${file.name} is a directory`);
      o[file.name] = [];
      var projects = fs.readdirSync(dirpath + file.name + '/', {
        withFileTypes: true}
      );
      projects.forEach(p => {
        o[file.name].push({
          name: p.name
        })
      })
    }
  });
  return o;
}

var o = deepRead('./projects/');
fs.writeFileSync('./src/projects.json', JSON.stringify(o, null, 2));
console.log('project load completed =>');