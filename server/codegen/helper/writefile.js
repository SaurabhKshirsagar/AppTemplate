let fs = require('fs');
let prettier = require("prettier");
let path = require('path');
let appDir = path.resolve(process.cwd())

//prettier function
let getFormattedCode = (fn) => prettier.format(fn, {
        printWidth: 80,
        tabWidth: 2,
        parser: "flow",
        singleQuote: false,
        trailingComma: false,
        bracketSpacing: true
        }
    )
//write file in directory
let writeFileInDir=function(filePath,contents){
   fs.writeFile(path.resolve(appDir, filePath), getFormattedCode(contents), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(`File Saved at path ${filePath}`);
    });
    return this;
}

module.exports={writeFileInDir};