function draw131(id){
	var canvas = document.getElementById(id);
	var context = canvas.getContext('2d');
	context.fillStyle="black";
	context.strokeStyle="orange";
	context.lineWidth= 5;
	context.fillRect(0,0,400,300);
	context.strokeRect(50,50,180,120);
	context.strokeRect(100,100,180,120);
	
}
function draw132(id){
	var canvas = document.getElementById(id);
	var context = canvas.getContext('2d');
	context.fillStyle="gray";
	context.fillRect(0,0,800,800);
	context.beginPath();
	
	var ags = 50*Math.PI/180;
	var age = 360*Math.PI/180;
	context.arc(100,100,100,ags,age,true);
	context.closePath();
	context.fillStyle="pink";
	context.fill();
	
}
