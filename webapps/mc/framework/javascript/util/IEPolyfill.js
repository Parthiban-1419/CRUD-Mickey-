if (!String.prototype.startsWith) {
String.prototype.startsWith = function(searchString, position) {
position = position || 0;
return this.indexOf(searchString, position) === position;
};
}
if (!Object.keys) Object.keys = function(o) {
if (o !== Object(o))
throw new TypeError('Object.keys called on a non-object');
var k=[],p;
for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
return k;
}
