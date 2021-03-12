class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.image=loadImage("dustbingreen.png")
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.image=loadImage("dustbingreen.png")

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			





			

			push()
			translate(posLeft.x, posLeft.y);
			//rectMode(CENTER)
			//imageMode(CENTER)
			// strokeWeight(4);
			rotate(this.angle)
			imageMode(CENTER);
        	image(this.image, 0, 0, this.width, this.height);
			fill(255)
			
			// rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()







			push()
			translate(posLeft.x, posLeft.y);
			//rectMode(CENTER)
			//imageMode(CENTER)
			// strokeWeight(4);
			rotate(this.angle)
			imageMode(CENTER);
        	image(this.image, 0, 0, this.width, this.height);
			fill(255)
			
			pop()
// 




			push()
			translate(posLeft.x, posLeft.y);
			//rectMode(CENTER)
			//imageMode(CENTER)
			// strokeWeight(4);
			rotate(this.angle)
			imageMode(CENTER);
        	image(this.image, 0, 0, this.width, this.height);
			fill(255)
			

			pop()
			
	}

}