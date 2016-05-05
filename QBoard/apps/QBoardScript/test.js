print('QBOARD_VERSION_STRING =',QBOARD_VERSION_STRING);
print(toSource('Hi, world'));
//include('test2.js');
var pt = QPointF(3,6);
print( toSource(pt) );
var obj = {x:63,y:36};
print( toSource(obj) );
print( toSource(QPoint(obj)) );

var rc = QRect(2,4, 20, 40);
print(toSource(rc));
obj = {left:-2,top:-4,width:40,height:20};
var rc2 = QRect(obj);
print(toSource(obj),toSource(rc2));

var col = QColor(127,200,200,0.42);
print(toSource(col));
obj = {red:200,green:127,blue:200,alpha:0.6};
print( toSource(QColor(obj)) );
obj.fun = function foo(){print("woohoo");};
print( toSource([1,2,obj]) );
//include('/dev/stdin');
if(1) {
    var o2  = {x:obj};
    obj.o2 = o2;
    // endless loop...
    print(toSource(obj));
}
print(1,(2,null),3);
