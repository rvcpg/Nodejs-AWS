const fs = require('fs');

fs.writeFile('writeME.txt', "hey", function(err){
    if(err) {
        console.log(err);
    }
    console.log('The file was saved!');
})