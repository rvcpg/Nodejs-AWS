var fs = require ('fs');

fs.writeFile('WritingOn.txt', "hello there", function(err) {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.appendFile('WritingOn.txt', "\nwhat's up?", function(err) {
    if (err) throw err;
    console.log('The file has been updated!');
  });

fs.readFile('WritingOn.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});