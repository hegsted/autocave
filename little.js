







function automata(env, rules) {


											var env2 = env;
												var  rules_b = new Array();
															 var  rules_s = new Array();
															 
												var  rules2_b = new Array();
															 var  rules2_s = new Array();


															for (br=0;br <9 ; br++)                       ///   default all rules to 0
															{ rules_b[br] = 0;
															rules2_b[br] = 0;
															}

															for (sr=0;sr <9 ; sr++)
															{ rules_s[sr] = 0;
															rules2_s[sr] = 0;
															}


															
										


											if (rules == "city_sprawl") {
												rules_b[4] = 1;   //   these are the conditions upon which an empty cell will become full.
														rules_b[5] = 1;    // rules_b = born
														rules_b[6] = 1;
														
															rules_s[2] = 1;
															rules_s[3] = 1;				 // these are the conditions upon which a full cell will remain full
															rules_s[4] = 1;               // rules_s = survive
															rules_s[5] = 1;				
															rules_s[6] = 1;
															rules_s[7] = 1;		
											}

											if (rules == "city") {
												rules_b[1] = 1;  
												rules_b[2] = 1;  
												rules_b[3] = 1;    
																	 
												rules_s[1] = 1;	
																	 
												 rules_s[2] = 1;	

												 
															rules_s[4] = 1;
												 
															rules_s[5] = 1;
															rules_s[6] = 1;		
														
															rules_s[7] = 1;
															rules_s[8] = 1;		
											}

					if (rules == "chumpy") {
												rules_b[3] = 1;  
												rules_b[4] = 1;  

												rules_s[4] = 1;	
																	 
												 rules_s[5] = 1;	
														
															rules_s[6] = 1;
															rules_s[7] = 1;
															rules_s[8] = 1;		
											}


					if (rules == "sparse_tech") {
												rules_b[5] = 1;  
												rules_b[6] = 1;  
                                            	rules_b[7] = 1; 

												rules_s[3] = 1;	
																	 
												 rules_s[4] = 1;	
														
															rules_s[5] = 1;
					
															rules_s[8] = 1;		
											}
											
					if (rules == "eroder") {
												rules_b[6] = 1;  
												rules_b[7] = 1;  

												rules_s[4] = 1;	
																	 
												 rules_s[3] = 1;	
														
															rules_s[6] = 1;
															rules_s[7] = 1;
															rules_s[8] = 1;		
											}




					if (rules == "off") {
						
															rules_s[1] = 1;
															rules_s[2] = 1;
															rules_s[3] = 1;		
												rules_s[4] = 1;	
																	 
												 rules_s[5] = 1;	
														
															rules_s[6] = 1;
															rules_s[7] = 1;
															rules_s[8] = 1;		
											}

											if (rules == "tiles") {
												rules_b[1] = 1;  
												rules_b[2] = 1;  
												rules_b[3] = 1;    
													rules_b[4] = 1; 				
													

												rules_s[1] = 1;	
																	 
												 rules_s[2] = 1;	
														
															rules_s[6] = 1;
															rules_s[7] = 1;
															rules_s[8] = 1;		
											}


											if (rules == "city_cave") {
												rules_b[5] = 1;  
												rules_b[6] = 1;  
												rules_b[7] = 1;    
															
													

												rules_s[3] = 1;	
																	 
												 rules_s[4] = 1;	
														
															rules_s[5] = 1;
															rules_s[6] = 1;
															rules_s[8] = 1;		
											}



											if (rules == "worm_eaten") {
												rules_b[1] = 1;  
												rules_b[2] = 1;   //   these are the conditions upon which an empty cell will become full.
														rules_b[4] = 1;    // rules_b = born

																	 // rules_s = survive
																	 
																	 rules_s[3] = 1;	
																	 
																	 rules_s[4] = 1;	

																	 rules_s[5] = 1;	
															rules_s[6] = 1;				
															rules_s[7] = 1;
															rules_s[8] = 1;		
											}


											if (rules == "cave") {

												rules_b[5] = 1;   //   these are the conditions upon which an empty cell will become full.
														rules_b[6] = 1;    // rules_b = born
														rules_b[7] = 1;
														
															rules_s[3] = 1;
															rules_s[4] = 1;				 // these are the conditions upon which a full cell will remain full
															rules_s[5] = 1;               // rules_s = survive
															rules_s[6] = 1;				
															rules_s[7] = 1;
															rules_s[8] = 1;		
											}


											if (rules == "conways")
											{

														 rules_b[3] = 1;                                     // these are basic conway's life rules


														rules_s[2] = 1;                      //
														rules_s[3] = 1;     ///
											}


												rules2_b[5] = 1;  
												rules2_b[6] = 1;  
												rules2_b[7] = 1;    
															
													

												rules2_s[3] = 1;	
																	 
												 rules2_s[4] = 1;	
														
															rules2_s[5] = 1;
															rules2_s[6] = 1;
															rules2_s[8] = 1;		

var default_rules_s = rules_s;

var default_rules_b = rules_b;




													for (var x_i=1;x_i<79;x_i++){

														for (var y_i=1;y_i<59;y_i++){

rules_s = default_rules_s;
rules_b = default_rules_b;


														
															

														var n =  0;
														 var t_min = 50;
															
															if (env[x_i +1][y_i+1].on == 1 ){n = n + 1;}		
															if (env[x_i +1][y_i].on == 1){n = n + 1;}	
															if (env[x_i +1][y_i-1].on == 1){n = n + 1;}	
															if (env[x_i][y_i+1].on == 1){n = n + 1;}	                  // get number of neigbors
															if (env[x_i][y_i-1].on == 1){n = n + 1;}		
															if (env[x_i-1][y_i+1].on == 1){n = n + 1;}	
															if (env[x_i-1][y_i].on == 1){n = n + 1;}	
															if (env[x_i-1][y_i-1].on == 1){n = n + 1;}	

																				if (env[x_i][y_i].on == 0)
																				{

											env2[x_i][y_i].on = 0;
											

																								switch(n)           //   apply the results of the rules to a new blank array
																								{
																								
																								  case 1:if (rules_b[1] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 2:if (rules_b[2] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 3:if (rules_b[3] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 4:if (rules_b[4] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 5:if (rules_b[5] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 6:if (rules_b[6] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 7:if (rules_b[7] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 8:if (rules_b[8] > 0) {env2[x_i][y_i].on = 1; }   break;
																								 
																								}

																								
																								
																								
																								
																				}

																				if (env[x_i][y_i].on == 1) 
																				{
																					env2[x_i][y_i].on = 0;
																								
																								switch(n)
																								{
																								
																								  case 1:if (rules_s[1] > 0) {env2[x_i][y_i].on = 1;  }   break;
																								  
																								  case 2:if (rules_s[2] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 3:if (rules_s[3] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 4:if (rules_s[4] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 5:if (rules_s[5] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 6:if (rules_s[6] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 7:if (rules_s[7] > 0) {env2[x_i][y_i].on = 1; }   break;
																								  
																								  case 8:if (rules_s[8] > 0) {env2[x_i][y_i].on = 1; }   break;
																								 
																								
																								}

																											
																				}
																		
																
														}

													
													}

													return env2;

			
}







function gravity(env) {

var env2 = env


		for (var x_i=1;x_i<79;x_i++){

			for (var y_i=1;y_i<59;y_i++){

         if(env2[x_i][y_i].block == 0) {

				var under = 1;
					under += y_i;
					if (under < 60){

						if (env[x_i][under].on < env[x_i][y_i].on)
						{
							var holdit2 = env2[x_i][y_i].on;

							env2[x_i][y_i].on = env[x_i][under].on;
							env2[x_i][under].on= holdit2;

					}
						
         


                   }
}
									
				    		
					
			}

		
		}

		return env2;

}

















var guy = new Object();
guy.x = 23;
guy.y = 23;
guy.xvel = 0;
guy.yvel = 0;
guy.px = 23;
guy.py = 23;
guy.dir = "r";
guy.walkframe = 0;
guy.walking = 0;

guy.g = new Image();
guy.g.src = 'spaceguy.png';
// shitty 
document.onkeydown = function (e) {
    e = e || window.event;
if (e.keyCode == 87) { guy.yvel = guy.yvel + 23;}
if (e.keyCode == 83) { guy.yvel = guy.yvel - 5;}
if (e.keyCode == 65) { guy.xvel = guy.xvel + 5; guy.dir = "l";}
if (e.keyCode == 68) { guy.xvel = guy.xvel - 5;guy.dir = "r";}
};





function rand(min, max) {
    var dif = max - min;
    return (Math.floor((Math.random() * dif) ) + min);
}


var grid = new Array();
for (x = 0; x < 100; x++) {
grid[x] = new Array();
for (y = 0; y < 100; y++) {
grid[x][y] = new Object();
grid[x][y].color = 0;
grid[x][y].f = rand (1, 5);
chance_of_on = rand(1, 100);
chance_of_block = rand(1, 100);
if (chance_of_on > 60){grid[x][y].on = 1;} else { grid[x][y].on = 0; }

if (chance_of_block > 95){grid[x][y].block = 1;} else { grid[x][y].block = 0; }
}
}


canvas1 = document.getElementById('main');
var ctx = canvas1.getContext('2d');

ctx.moveTo(0,10);
ctx.lineTo(10, 0);
ctx.lineTo(10, 10);
ctx.lineTo(0, 10);
 ctx.fillStyle = "rgb(0,0,0)";  
ctx.fill();

var left_slope=ctx.getImageData(0,0,10,10);


 ctx.clearRect(0, 0, 100, 100);
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(0, 0);

ctx.lineTo(0, 10);
ctx.lineTo(10, 10);
 ctx.fillStyle = "rgb(0,0,0)"; 
ctx.fill();
var right_slope=ctx.getImageData(0,0,10,10);


 ctx.clearRect(0, 0, 100, 100);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(10, 0);
ctx.lineTo(0, 10);
ctx.lineTo(0, 0);
 ctx.fillStyle = "rgb(0,0,0)";   
ctx.fill();
var right_hang=ctx.getImageData(0,0,10,10);


 ctx.clearRect(0, 0, 100, 100);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(10, 0);
ctx.lineTo(10, 10);
ctx.lineTo(0, 0);
 ctx.fillStyle = "rgb(0,0,0)";  
ctx.fill();
var left_hang=ctx.getImageData(0,0,10,10);



var count = 0;



var light_x = 100,
    light_y = 75,
    // Radii of the white glow.
    l_innerRadius = 5,
    l_outerRadius = 70,
    // Radius of the entire circle.
    light_radius = 60;

var gradient = ctx.createRadialGradient(light_x, light_y, l_innerRadius, light_x, light_y, l_outerRadius);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'blue');

ctx.arc(light_x, light_y, light_radius, 0, 2 * Math.PI);

ctx.fillStyle = gradient;
ctx.fill();







function onTimerTick() {

 ctx.clearRect(0, 0, 1000, 1000);
count++;
grid = automata(grid, "cave")

if (count < 10) {

grid = gravity(grid)
}
for (x = 1; x < 99; x++) {
for (y = 1; y < 99; y++) {
if (grid[x][y].on == 1) {

if( grid[x + 1][y].on == 1 && grid[x][y + 1].on == 1 && grid[x - 1][y - 1].on == 0 && grid[x - 1][y].on == 0 && grid[x][y - 1].on == 0  ) {

ctx.putImageData(left_slope,x*10,y*10);

} else  if( grid[x - 1][y].on == 1 && grid[x][y + 1].on == 1 && grid[x + 1][y - 1].on == 0 && grid[x + 1][y].on == 0 && grid[x][y - 1].on == 0  ) {

ctx.putImageData(right_slope,x*10,y*10);

} else  if( grid[x + 1][y].on == 1 && grid[x][y - 1].on == 1 && grid[x - 1][y + 1].on == 0 && grid[x - 1][y].on == 0 && grid[x][y + 1].on == 0  ) {

ctx.putImageData(left_hang,x*10,y*10);


} else  if( grid[x - 1][y].on == 1 && grid[x][y - 1].on == 1 && grid[x + 1][y + 1].on == 0 && grid[x + 1][y].on == 0 && grid[x][y + 1].on == 0  ) {

ctx.putImageData(right_hang,x*10,y*10);





} else {
if (grid[x][y].color == 0) {
 ctx.fillStyle = "rgb(0,0,0)";
} else {
 ctx.fillStyle = "rgb(255,0,0)";
}    
 ctx.fillRect(x * 10, y * 10, 10, 10);
 
}
  

if(grid[x][y-1].on ==0) { 
for (rep = 0; rep < 5; rep ++) {


	ctx.beginPath()
ctx.lineWidth=2;
ctx.lineCap="round";
ctx.moveTo(x*10, (y*10) + 10)


ctx.bezierCurveTo(x*10, (y*10) + 10,(x*10) + (rand(1, grid[x][y].f) - grid[x][y].f/2), (y*10) + (rand(1, grid[x][y].f) - grid[x][y].f/2) ,(x*10) + (rand(1, grid[x][y].f) - grid[x][y].f/2), (y*10) + (rand(1, grid[x][y].f) - grid[x][y].f/2) );
	
ctx.stroke()
	



ctx.move

}



}


}
}
}

//ctx.globalCompositeOperation = "lighten";
//ctx.beginPath();
//ctx.arc(guy.x , guy.y , light_radius, 0, 2 * Math.PI);

//ctx.fillStyle = gradient;
//ctx.fill();

//ctx.globalCompositeOperation =  "source-over";

if (guy.xvel < 0 || guy.xvel > 0) {
guy.walking = 1;
 guy.walkframe++ 
 if (guy.walkframe > 5){guy.walkframe = 2;}

} else {guy.walking = 0; }



guy.x = guy.x - guy.xvel;
guy.y = guy.y - guy.yvel;

guy.xvel = Math.round(guy.xvel/1.5);

guy.yvel = Math.round(guy.yvel/1.5);
guy.yvel = guy.yvel - 3;


if (grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].on == 1) {
//alert(Math.round(guy.x/10) + " " + Math.round(guy.px/10) );
//grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].color = 1;
//grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].f = 1111;
//if (guy.xvel > 0) {guy.x = (Math.round(guy.x/10) - 1) * 10 }


//guy.x = guy.px;
guy.y = guy.py;
//guy.xvel = 0;
guy.yvel = 0;


}

guy.py = guy.y;
guy.px = guy.x;

if (guy.dir == "r") { yoffset = 13; } else { yoffset = 0; }

xoffset = (guy.walkframe ) * 10;


ctx.drawImage(guy.g,xoffset,yoffset,10,12,guy.x,guy.y,10,12);



}






//onTimerTick();

setInterval(onTimerTick, 99); 
