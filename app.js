/**
 * Created by deeb on 11/21/15.
 */
var app = function () {};
app.prototype.test = function () {
    console.log('Test Function ');
};
app.prototype.app = function (name,age) {
    this.name = name;
    this.age = age;
};
app.prototype.toString = function(){
    console.log(this.name+" "+this.age);
};
app.name = 'yassine';
app.age = 21;
app.toString();

