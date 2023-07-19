const fs = require('fs');

fs.writeFileSync("bio.txt","add some data here ?")
fs.appendFileSync("bio.txt", " I will add My intro here")

const readData = fs.readFileSync("bio.txt","utf8")
console.log(readData)

fs.renameSync("bio.txt", "Mybio.txt")                                   // rename the file

fs.unlinkSync("Mybio.txt");                                             // to delete the file                    

fs.rmdirSync("CRUD");                                                  // to delete the folder

