const fs = require('fs')
const data = {
    fname: "Hardik",
    lname: "saini",
    adr: "Bus Stand"
}

let dataStringfy = JSON.stringify(data)
console.log(dataStringfy)

const store = fs.readFile("addData.json", "utf-8", (err, data) => {
    let dataobject = JSON.parse(data)
    console.log(dataobject)
    console.log(dataobject.fname)
})
