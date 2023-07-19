const path = require("path")

console.log(path.dirname("\Users\hemantgupta\Documents\Hardik\Node_project\pathmodule\path.js"))
console.log(path.extname("\Users\hemantgupta\Documents\Hardik\Node_project\pathmodule\path.js"))
console.log(path.basename("\Users\hemantgupta\Documents\Hardik\Node_project\pathmodule\path.js"))

console.log(path.parse("\Users\hemantgupta\Documents\Hardik\Node_project\pathmodule\path.js"))
const storepath = path.parse("\Users\hemantgupta\Documents\Hardik\Node_project\pathmodule\path.js")
console.log(storepath,"ll")

console.log(storepath.root,"uu")