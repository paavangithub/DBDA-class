var name="iacsd";
var data=89;
data=data +34;
status=false;

//JSON object

var contact={
		"firstname":"ravi",
		"lastname":"tambade",
		"email":"ravi.tambade@transflower.in",
		"age":47
	    };

// function declaration
//set of functions
function getOrder(){
	console.log("showing customer orders");

}
function cancelOrder(){
	console.log("cancelling order");

}
function processOrder(){
	console.log ("processing order");
}


processOrder();//invoking function
console.log("Hello from Application");
console.log(data);
console.log(contact);