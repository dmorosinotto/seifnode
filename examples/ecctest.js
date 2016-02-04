var addon = require('seifnode');


var hash = new Buffer([0xB6,0x8F,0xE4,0x3F,0x0D,0x1A,0x0D,0x7A,0xEF,0x12,0x37,0x22,0x67,0x0B,0xE5,0x02,0x68,0xE1,0x53,0x65,0x40,0x1C,0x44,0x2F,0x88,0x06,0xEF,0x83,0xB6,0x12,0x97,0x6B]);
console.log("start");
var test = new addon.ECCISAAC(hash);

console.log("DONE1");

var keys = test.getKeys();

console.log(keys);

console.log("DONE2");

var msg = "jsekde \u00001dededer\u4589r\u4858g4hb";
var msg1 = new Buffer([0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41,0x41]);
console.log(msg1);
var d = test.encrypt(keys.enc, msg1);

console.log(d);

var m = test.decrypt(keys.dec, d);

console.log(m);

var n = new Buffer(m, 'binary');
console.log(n);



