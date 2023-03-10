var names = new Array();
names[0] = "Charles";
names[1] = "Alexander";
names[2] = "Jerry";
names[3] = "Daniel";
names[4] = "Harry";
names[5] = "Jack";
names[6] = "Luke";
names[7] = "Matthew";
names[8] = "Peter";
names[9] = "Thomas";

for(var i=0; i<names.length;i++){
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j')
	{
		console.log("GoodBye" + names[i]);
	}
	else{
		console.log("Hello" + names[i]);
	}
}