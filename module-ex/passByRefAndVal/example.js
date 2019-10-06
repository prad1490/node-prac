// pass by val
function changeVal(b){
    b = 2;
}

var a = 1;
changeVal(a);
console.log('pass by val' +  a + '\n');

//pass by ref
function changeRef(tempObj){
    tempObj.prop1 = function(){};
    tempObj.prop2 = 'hello';
}
var c = {};
c.prop1 = 'hi';
changeRef(c);
console.log('pass by ref' +  c.prop2 + '\n');

