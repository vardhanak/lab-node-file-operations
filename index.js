const data = require("./data");
const os =  require ("os");
const fs = require ("fs");
const crypto = require('crypto');

var value = os.userInfo();
var userdata= data("Prograd",2020,"BE")
const password = crypto.createHmac('sha256',"secret").update('Prograd').digest('hex');

fs.appendFileSync("message.txt", "ProGrad Details: \n")

fs.appendFileSync("message.txt", `\tUserId ->        ${value.uid},\n`)
fs.appendFileSync("message.txt", `\tName ->          ${userdata.name},\n`)
fs.appendFileSync("message.txt", `\tYear ->          ${userdata.Year},\n`)
fs.appendFileSync("message.txt", `\tQualification -> ${userdata.Qualification},\n`)
fs.appendFileSync("message.txt", `\tUserName ->      ${value.uname},\n`)
fs.appendFileSync("message.txt", `\tPassword ->      ${password},\n`)

console.log(value.uid)
console.log(userdata.name)
console.log(userdata.Year)
console.log(userdata.Qualification)
console.log(value.username)
console.log(password)
