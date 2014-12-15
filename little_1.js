



 function lineDistance(x1,y1,x2,y2) {
//point2.y = point2.y * ysquish;
//point2.x = point2.x * xsquish;
            var xs = 0;
            var ys = 0;

            xs = x2 - x1;
            xs = xs * xs;

            ys = y2 - y1;
            ys = ys * ys;

            return Math.sqrt(xs + ys);
 }




function automata(env, rules, leftx, topy, endx, endy) {


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




													for (var x_i=leftx;x_i<endx;x_i++){

														for (var y_i=topy;y_i<endy;y_i++){

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








function find_pattern(grid, startx, starty, endx, endy, pattern) {
for (x = startx; x < endx; x++) {
for (y = starty; y < endy; y++) {
var counter1 = 0;
var counter2 = 0;
for(ppx = 0; ppx < pattern.length; ppx++) {
for(ppy = 0; ppy < pattern[0].length; ppy++) {
counter1++
if (grid[x + ppx][y+ppy].on == pattern[ppx][ppy]) {
//grid[x + ppx][y+ppy].color = 1
counter2++
}

}
}

if(counter1 == counter2) {
//alert(counter1 + "  " +  counter2)
for(ppx = 0; ppx < pattern.length; ppx++) {
for(ppy = 0; ppy < pattern[0].length; ppy++) {
grid[x + ppx][y+ppy].color = 1
}
}
} else {

//grid[x][y].color = 0

}






}
}
return grid

}


var test_pattern = [[0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [1,1,1,1],
                    [1,1,1,1]]
       
var tiles = new Image();
tiles.src = "tiles1.png";






var particles = new Array();

function new_particles(x, y, number, size, color, deviation) {

for (i = 0; i < number; i++) {
new_particle = new Object();
new_particle.x = x + (rand(0, deviation) - (deviation/2));
new_particle.y = y + (rand(0, deviation) - (deviation/2));

new_particle.px = new_particle.x;
new_particle.py = new_particle.y;

new_particle.xvel = rand(1, 10) - 5;
new_particle.yvel = rand(1, 10) - 5;

new_particle.age = 0;

new_particle.color = color;
new_particle.size = rand(1, 10);
particles.push(new_particle);
}



}

new_particles(5000,5000, 230, 1, 1, 50);



function particle_gravity()  {
for (pg = 0; pg < particles.length; pg ++) {

particles[pg].age++

if (grid[Math.round((particles[pg].x + 5)/10)][Math.round((particles[pg].y + 5)/10)].on == 1) {

 if (grid[Math.round((particles[pg].px + 5)/10)][Math.round((particles[pg].py + 5)/10)].on == 0) {
  if (particles[pg].x < particles[pg].px) {particles[pg].xvel = 3; } 
  if (particles[pg].x > particles[pg].px) {particles[pg].xvel = -3; } 
  if (particles[pg].y < particles[pg].px) {particles[pg].xvel = 3; } 
  if (particles[pg].y > particles[pg].px) {particles[pg].xvel = -3; } 
particles[pg].y = particles[pg].y + particles[pg].yvel;
particles[pg].x = particles[pg].x + particles[pg].xvel;

 } else {
 grid[Math.round((particles[pg].x + 5)/10)][Math.round((particles[pg].y + 5)/10) -1].on == 1
 }

} else {
particles[pg].y = particles[pg].y + particles[pg].yvel;
particles[pg].x = particles[pg].x + particles[pg].xvel;
}
particles[pg].yvel++


if(particles[pg].y > 9990) { particles.splice(pg, 1); }

if(particles[pg].age > 23) { particles.splice(pg, 1); }



}
}




particle_g  = new Image();
particle_g.src = 'particle.png';
spider_g  = new Image();
spider_g.src = 'spider.png';


var bg = new Image();
bg.src = "background1.jpg";


var spider = new Object();
spider.x = 5023;
spider.y = 5023;
spider.xvel = 0;
spider.yvel = 0;

var center = new Object();
center.x = 5000;
center.y = 5000;

 
var guy = new Object();
guy.x = 5000;
guy.y = 5000;
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
for (x = 0; x < 1000; x++) {
grid[x] = new Array();
for (y = 0; y < 1000; y++) {
grid[x][y] = new Object();
grid[x][y].color = 0;
grid[x][y].f = rand (1, 50);


grid[x][y].tileset = 0;





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





//ctx.arc(light_x, light_y, light_radius, 0, 2 * Math.PI);

//ctx.fillStyle = gradient;
//ctx.fill();

function change_rules(new_rules) {
rules = new_rules;
}

var rules = "cave";

for(ggg = 0; ggg < 23; ggg++) {

grid = gravity(grid)
}
//grid = automata(grid, "chumpy", 2,2, grid.length -2, grid[0].length -2)


function onTimerTick() {



if(guy.x < spider.x) {spider.xvel = -3;}
if(guy.x > spider.x) {spider.xvel = 3;}
if(guy.y < spider.y) {spider.yvel = -3;}
if(guy.y < spider.y) {spider.yvel = 3;}

spider.x = spider.x + spider.xvel;

spider.y = spider.y + spider.yvel;




 //ctx.clearRect(0, 0, 1000, 1000);


ctx.drawImage(bg,0,0);






count++;


//if (count < 10) {

//grid = gravity(grid)
//}
var guy_gx = Math.round((guy.x + 5)/10)
var guy_gy =Math.round((guy.y + 5)/10)

grid = automata(grid, rules, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10)
grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, test_pattern)


for (x = guy_gx - 30; x < guy_gx + 30; x++) {
for (y = guy_gy - 30; y < guy_gy + 30; y++) {

if (lineDistance(x,y, 500, 500) > 10) {
grid[x][y].tileset = Math.round(lineDistance(x,y, 500, 500)/50);
}

}
}


for (x = guy_gx - 25; x < guy_gx + 60; x++) {
for (y = guy_gy - 25; y < guy_gy + 40; y++) {



 p_x = x - ((guy.x + 5)/10) + 25;
p_y =  y - ((guy.y + 5)/10) + 25;





if (grid[x+1][y] && grid[x-1][y] && grid[x][y+1] && grid[x][y-1] && grid[x][y].on == 1) {



if( grid[x + 1][y].on == 1 && grid[x][y + 1].on == 1 && grid[x - 1][y - 1].on == 0 && grid[x - 1][y].on == 0 && grid[x][y - 1].on == 0  ) {

//ctx.putImageData(left_slope,p_x*10,p_y*10);

ctx.drawImage(tiles,10,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);


} else  if( grid[x - 1][y].on == 1 && grid[x][y + 1].on == 1 && grid[x + 1][y - 1].on == 0 && grid[x + 1][y].on == 0 && grid[x][y - 1].on == 0  ) {

//ctx.putImageData(right_slope,p_x*10,p_y*10);

ctx.drawImage(tiles,20,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);


} else  if( grid[x + 1][y].on == 1 && grid[x][y - 1].on == 1 && grid[x - 1][y + 1].on == 0 && grid[x - 1][y].on == 0 && grid[x][y + 1].on == 0  ) {

//ctx.putImageData(left_hang,p_x*10,p_y*10);
ctx.drawImage(tiles,40,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);


} else  if( grid[x - 1][y].on == 1 && grid[x][y - 1].on == 1 && grid[x + 1][y + 1].on == 0 && grid[x + 1][y].on == 0 && grid[x][y + 1].on == 0  ) {

//ctx.putImageData(right_hang,p_x*10,p_y*10);
ctx.drawImage(tiles,50,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);


} else  if( grid[x][y - 1].on == 0 ) {

//ctx.putImageData(right_hang,p_x*10,p_y*10);
ctx.drawImage(tiles,30,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);

} else  if( grid[x][y + 1].on == 0  ) {

//ctx.putImageData(right_hang,p_x*10,p_y*10);
ctx.drawImage(tiles,60,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);




} else {
if (grid[x][y].color == 0) {
 ctx.drawImage(tiles,0,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);

} else { 
ctx.drawImage(tiles,70,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);

 
}    

}
  

if(grid[x][y-1].on ==0) { 
for (rep = 0; rep < 2; rep ++) {


	ctx.beginPath()
ctx.lineWidth=2;
ctx.lineCap="round";
ctx.moveTo(x*10, (y*10) + 10)


ctx.bezierCurveTo
(x*10,
 (y*10) + 10,(x*10) + (rand(1, grid[x][y].f) - grid[x][y].f/2),
 (y*10) + (rand(1, grid[x][y].f) - grid[x][y].f/2) ,
(x*10) + (rand(1, grid[x][y].f) - grid[x][y].f/2),
 (y*10) + (rand(1, grid[x][y].f) - grid[x][y].f/2)

 );
	
ctx.stroke()
	



//ctx.move

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

grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].f++;
grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].on = 0;
grid[Math.round((guy.x + 5)/10) - 1][Math.round((guy.y + 5)/10) ].on = 0;
grid[Math.round((guy.x + 5)/10) + 1][Math.round((guy.y + 5)/10) ].on = 0;
grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)  + 1 ].on = 0;

grid[Math.round((guy.x + 5)/10) - 1][Math.round((guy.y + 5)/10) - 1].on = 0;
grid[Math.round((guy.x + 5)/10) + 1][Math.round((guy.y + 5)/10) + 1 ].on = 0;
grid[Math.round((guy.x + 5)/10) + 1][Math.round((guy.y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((guy.x + 5)/10) -1][Math.round((guy.y + 5)/10)  + 1 ].on = 0;

new_particles(guy.x, guy.y, 20, 1, 1, 5)
 
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


ctx.drawImage(guy.g,xoffset,yoffset,10,12,250,250,10,12);




particle_gravity();
for (pp = 0; pp < particles.length; pp++ ) {

 if(particles[pp]) {

 pp_x = particles[pp].x - (guy.x - 250);
pp_y =  particles[pp].y - (guy.y - 250);




 ctx.drawImage(particle_g, pp_x,pp_y,5+particles[pp].size,5+particles[pp].size);

 }

}

ctx.drawImage(spider_g, spider.x - (guy.x - 250) , spider.y - (guy.x - 250),20,20);



}



 



//onTimerTick();

setInterval(onTimerTick, 99); 
