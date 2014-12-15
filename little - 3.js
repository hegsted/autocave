



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


var env2 = env;


		for (var x_i=2;x_i<env.length - 2;x_i++){

			for (var y_i=2;y_i<env[3].length - 2;y_i++){

    

				var under = 1;
					under += y_i;
					

						if (env[x_i][under].on < env[x_i][y_i].on)
						{
							var holdit2 = env2[x_i][y_i].on;

							env2[x_i][y_i].on = env[x_i][under].on;
							env2[x_i][under].on= holdit2;

					
						
         


                   
}
									
				    		
					
			}

		
		}

		return env2;

}








function find_pattern(grid, startx, starty, endx, endy, pattern, image, spawn) {
for (x = startx; x < endx; x++) {
for (y = starty; y < endy; y++) {
var counter1 = 0;
var counter2 = 0;
for(ppx = 0; ppx < pattern.length; ppx++) {
for(ppy = 0; ppy < pattern[0].length; ppy++) {
counter1++
if (grid[x + ppx][y+ppy].on == pattern[ppx][ppy]) {
//grid[x + ppx][y+ppy].color = 1

if(grid[x + ppx][y+ppy].image == 0) { counter2++ }

}

}
}

if(counter1 == counter2) {
if (spawn) {
new_creature(x,y,spawn)
}

//alert(counter1 + "  " +  counter2)
for(ppx = 0; ppx < pattern.length; ppx++) {
for(ppy = 0; ppy < pattern[0].length; ppy++) {



//grid[x + ppx][y+ppy].color = 1
grid[x + ppx][y+ppy].image = image
grid[x + ppx][y+ppy].imagex = ppx * 10;
grid[x + ppx][y+ppy].imagey = ppy * 10;


}
}
} else {

//grid[x][y].color = 0

}






}
}
return grid

}


var test_pattern = [[1,1,1,1,1,1],
                    [1,1,1,1,1,1],
                    [1,1,1,1,1,1],
                    [1,1,1,1,1,1],
                    [1,1,1,1,1,1],
                    [1,1,1,1,1,1],
                    [1,1,1,1,1,1]];

var door_pattern = [[1,1,1,1,0,0],
                    [1,1,1,1,0,0],
                    [1,1,1,1,0,0],
                    [1,1,1,1,0,0],
                    [1,1,1,1,0,0],
                    [1,1,1,1,0,0],
                    [1,1,1,1,0,0]];

var small_pattern = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];

var tiles = new Image();
tiles.src = "tiles1.png";



var bullets = new Array();

function new_bullet(x, y, rotation,number, size, color, deviation, speed, damage, graphic) {



for (i = 0; i < number; i++) {
newbullet = new Object();
newbullet.x = x + (rand(0, deviation) - (deviation/2));
newbullet.y = y + (rand(0, deviation) - (deviation/2));
newbullet.speed = speed;
newbullet.g = graphic;
newbullet.rotation = rotation // + (rand(0, deviation) - (deviation/2));

newbullet.age = 0;

newbullet.color = color;
newbullet.size = size;
newbullet.damage = damage;
bullets.push(newbullet);
}




}


function new_creature (x, y, number) {

for (nc = 0; nc < number; nc++) {
newcreature = new Object();
choosetype =  (lineDistance(x, y, 500, 500)/5) - rand(1, 100);
;
newcreature.type = 0 


if (choosetype > 20) {newcreature.type = 1;}

if (choosetype > 40) {newcreature.type = 2;}

if (choosetype > 60) {newcreature.type = 3;}

if (choosetype > 80) {newcreature.type = 4;}

if (choosetype > 90) {newcreature.type = 5;}


newcreature.x = x * 10;
newcreature.y = y * 10;
newcreature.xvel = 0;
newcreature.yvel = 0;
newcreature .speed = 1;
newcreature.topspeed = 7;
newcreature.health = (newcreature.type + 1) * 5;

creatures.push(newcreature);

}


}




var particles = new Array();

function new_particles(x, y, number, size, color, deviation) {

for (i = 0; i < number; i++) {
new_particle = new Object();
new_particle.x = x + (rand(0, deviation) - (deviation/2));
new_particle.y = y + (rand(0, deviation) - (deviation/2));

new_particle.px = new_particle.x;
new_particle.py = new_particle.y;

new_particle.xvel = rand(1, 6) - 3;
new_particle.yvel = rand(1, 6) - 3;

new_particle.age = 0;
new_particle.lifespan = 5;


new_particle.color = color;
new_particle.size = size + ((rand(0, deviation) - (deviation/2))/10);
particles.push(new_particle);
}



}

function particle_gravity()  {
for (pg = 0; pg < particles.length; pg ++) {
if(particles[pg].x > 2 && particles[pg].x < grid.length *10- 2 && particles[pg].y > 2 && particles[pg].y < grid.length *10 -2) {


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
//particles[pg].yvel++

if(particles[pg].age > particles[pg].lifespan) { particles.splice(pg, 1); }


} else {
particles.splice(pg, 1);
}

}
}



var keys = new Object();
keys.w = new Object();
keys.a = new Object();
keys.s = new Object();
keys.d = new Object();

keys.w.on = 0;
keys.a.on = 0;
keys.s.on = 0;
keys.d.on = 0;

cursor_g = new Image();
cursor_g.src = 'cursor.png';

particle_g  = new Image();
particle_g.src = 'particle.png';

particle_r  = new Image();
particle_r.src = 'particle_r.png';

bullet_g = new Image();
bullet_g.src = 'bullets.png';


creature_g  = new Image();
creature_g.src = 'spider.png';


creature1_g  = new Image();
creature1_g.src = 'creature1.png';


var bg = new Image();
bg.src = "background1.jpg";

var scenery1 = new Image();
scenery1.src = "scenery1.png"

var scenery2 = new Image();
scenery2.src = "scenery2.png"

var scenery3 = new Image();
scenery3.src = "scenery3.png"

var score = 0;

var creatures = new Array();


var automatons = new Array();

function new_automation(x, y, radius, rules, lifespan, contract) {
na = new Object();
na.x = x;
na.y = y;
na.radius = radius;
na.rules = rules;
na.lifespan = lifespan;
na.age = 0;
na.contract = contract;
automatons.push(na);
}

var center = new Object();
center.x = 5000;
center.y = 5000;

var respawncounter = 44;
 
var guy = new Object();
guy.x = 5; //000;
guy.y = 5; //000;
guy.xvel = 0;
guy.yvel = 0;
guy.px = 5; //000;
guy.py = 5;  //000;
guy.dir = "r";
guy.walkframe = 0;
guy.walking = 0;
guy.health = 23;
guy.gun = new Object();


guy.gun.damage = 1;
guy.gun.speed = 9
guy.gun.reload = 1;
guy.gun.reloading = 0;
guy.gun.size = 4;
guy.gun.deviance = 5;
guy.gun.range = 100;
guy.gun.multi = 1;
guy.gun.muti_angle = 35;
guy.gun.graphic = 3;


guy.g = new Image();
guy.g.src = 'spaceguy.png';




/*

if (e.keyCode == 87) { guy.yvel = guy.yvel + 7;}
if (e.keyCode == 83) { guy.yvel = guy.yvel - 7;}
if (e.keyCode == 65) { guy.xvel = guy.xvel + 5; guy.dir = "l";}
if (e.keyCode == 68) { guy.xvel = guy.xvel - 5;guy.dir = "r";}

*/


document.onkeydown = function (e) {
    e = e || window.event;

if (e.keyCode == 87) { keys.w.on = 1; }
if (e.keyCode == 83) {  keys.s.on = 1 ;}
if (e.keyCode == 65) {  keys.a.on = 1 ; guy.dir = "l";}
if (e.keyCode == 68) { keys.d.on = 1 ;guy.dir = "r";}


};


document.onkeyup = function (e) {
    e = e || window.event;

if (e.keyCode == 87) { keys.w.on = 0; }
if (e.keyCode == 83) {  keys.s.on = 0 ;}
if (e.keyCode == 65) {  keys.a.on = 0 ; }
if (e.keyCode == 68) { keys.d.on = 0 ;}


};









function noise_grid(grid) {

for (x = 0; x < 1000; x++) {

for (y = 0; y < 1000; y++) {
grid[x][y].color = 0;
grid[x][y].f = rand (1, 50);
grid[x][y].tileset = 0;
grid[x][y].image = 0;
grid[x][y].imagex = 0;
grid[x][y].imagey = 0;

chance_of_on = rand(1, 100);  //(lineDistance(x,y, 500, 500)/10) + 

chance_of_block = rand(1, 100);

if (chance_of_on > 60){grid[x][y].on = 1;} else { grid[x][y].on = 0; }

if (chance_of_block > 95){grid[x][y].block = 1;} else { grid[x][y].block = 0; }

if (lineDistance(x,y, 500, 500) > 600 && lineDistance(x,y, 500, 500) < 620  ) {
grid[x][y].on = 1;
}


}
}

grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)

return grid;
}






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

grid[x][y].image = 0;
grid[x][y].imagex = 0;
grid[x][y].imagey = 0;



chance_of_on = rand(1, 100) + (lineDistance(x,y, 500, 500)/100);

chance_of_block = rand(1, 100);
if (chance_of_on > 60){grid[x][y].on = 1;} else { grid[x][y].on = 0; }

if (chance_of_block > 95){grid[x][y].block = 1;} else { grid[x][y].block = 0; }

if (lineDistance(x,y, 500, 500) > 600 && lineDistance(x,y, 500, 500) < 620  ) {
grid[x][y].on = 1;
}


}
}
var mouse = new Object();
mouse.x = 0;
mouse.y = 0;
mouse.down = 0;


canvas1 = document.getElementById('main');
var ctx = canvas1.getContext('2d');


canvas1.onmousemove = function (e) {
    e = e || window.event;

if (e.pageX || e.pageY) {

mouse.x = e.pageX;
mouse.y = e.pageY;


}

}


document.onmouseup = function (e) {
    e = e || window.event;

mouse.down = 0;

};


document.onmousedown = function (e) {
    e = e || window.event;

mouse.down = 1;

};







var count = 0;








//ctx.arc(light_x, light_y, light_radius, 0, 2 * Math.PI);

//ctx.fillStyle = gradient;
//ctx.fill();

function change_rules(new_rules) {
rules = new_rules;
}

var rules = "cave";

for(ggg = 0; ggg < 23; ggg++) {


}
grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)
grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)

grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)

grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)

grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)

grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)

grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)

//grid = find_pattern(grid,  10,10, grid.length -10, grid[0].length -10, door_pattern, 3)





function onTimerTick() {



 //ctx.clearRect(0, 0, 1000, 1000);


ctx.drawImage(bg,0,0);






count++;


//if (count < 10) {

//grid = gravity(grid)
//}
var guy_gx = Math.round((guy.x + 5)/10)
var guy_gy =Math.round((guy.y + 5)/10)


if(guy.x > 110 && guy.x < (grid.length*10)- 110 && guy.y > 110 && guy.y < (grid.length*10) -110) {

grid = automata(grid, rules, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10)

grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, test_pattern, 1, 1+(lineDistance(x,y, 500, 500)/50))
grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, door_pattern, 3, 3)
grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, small_pattern, 2, 0)

}
//grid = gravity(grid);
//grid = gravity(grid);
//grid = gravity(grid);
//for(aa = 0; aa< automatons.length; aa++) {
//if(automatons[aa]) {
//var ax = Math.round((automatons[aa].x + 5)/10)
//var ay =Math.round((automatons[aa].y + 5)/10)
//grid = automata(grid, automatons[aa].rules, ax - automatons[aa].radius, ay -  automatons[aa].radius, ax +  automatons[aa].radius, ay +  automatons[aa].radius)
//automatons[aa].radius -= automatons[aa].contract;
//automatons[aa].age++;
//if (automatons[aa].age > automatons[aa].lifespan) {automatons.splice(aa, 1);}


//}
//}




for (x = guy_gx - 30; x < guy_gx + 60; x++) {
for (y = guy_gy - 30; y < guy_gy + 30; y++) {
if (x > 2 && x < grid.length -2 && y > 2 && y < grid.length -2) {

if (lineDistance(x,y, 500, 500) > 10) {

grid[x][y].tileset = Math.round(lineDistance(x,y, 500, 500)/50);

}
}
}
}


for (x = guy_gx - 25; x < guy_gx + 50; x++) {
for (y = guy_gy - 25; y < guy_gy + 30; y++) {
if (x > 2 && x < grid.length -2 && y > 2 && y < grid.length -2) {



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
  

if(grid[x][y].image ==1) { 

ctx.drawImage(scenery1,grid[x][y].imagex,grid[x][y].imagey,10,10,p_x*10,p_y*10,10,10);


}
if(grid[x][y].image ==2) { 

ctx.drawImage(scenery2,grid[x][y].imagex,grid[x][y].imagey,10,10,p_x*10,p_y*10,10,10);


}

if(grid[x][y].image ==3) { 

ctx.drawImage(scenery3,grid[x][y].imagex,grid[x][y].imagey,10,10,p_x*10,p_y*10,10,10);


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





particle_gravity();
for (pp = 0; pp < particles.length; pp++ ) {

 if(particles[pp]) {

 pp_x = particles[pp].x - (guy.x - 250);
pp_y =  particles[pp].y - (guy.y - 250);



if (particles[pp].color == "green") {
 ctx.drawImage(particle_g, pp_x,pp_y,5+particles[pp].size,5+particles[pp].size);
}

if (particles[pp].color == "red") {
 ctx.drawImage(particle_r, pp_x,pp_y,5+particles[pp].size,5+particles[pp].size);
}


 }

}



for (s = 0; s < creatures.length; s ++) {
//alert(creatures[s].x + " "+  creatures[s].y);
if(creatures[s].x > 2 && creatures[s].x < grid.length*10- 2 && creatures[s].y > 2 && creatures[s].y < grid.length*10 -2) {


for (sc = 0; sc < creatures.length; sc ++) {
if(sc != s) {

if (creatures[s].x + 20 > creatures[sc].x && creatures[s].x < creatures[sc].x + 20 && creatures[s].y + 20 > creatures[sc].y && creatures[s].y < creatures[sc].y + 20) {

if (creatures[s].x < creatures[sc].x ) { creatures[sc].x = creatures[sc].x + rand(1, 3); }
if (creatures[s].x > creatures[sc].x ) { creatures[sc].x = creatures[sc].x - rand(1, 3); }
if (creatures[s].y < creatures[sc].y ) { creatures[sc].y = creatures[sc].y + rand(1, 3); }
if (creatures[s].y > creatures[sc].y ) { creatures[sc].y = creatures[sc].y - rand(1, 3); }


}
}
}


if (creatures[s].speed < creatures[s].topspeed) { creatures[s].speed = creatures[s].speed + 0.1; }

creatures[s] .rotation=Math.atan2(guy.y - creatures[s] .y, guy.x - creatures[s] .x);

creatures[s].x +=Math.cos(creatures[s].rotation)*creatures[s].speed;

creatures[s].y +=Math.sin(creatures[s].rotation)*creatures[s].speed;


if (creatures[s].x > guy.x - 4 && creatures[s].x < guy.x + 4 && creatures[s].y < guy.y + 4 && creatures[s].y > guy.y - 4) {
new_particles(creatures[s].x, creatures[s].y, 20, 1, "red", 5)

guy.health = guy.health - 1;//creatures[s].type/2;
}


if (grid[Math.round((creatures[s].x + 5)/10)][Math.round((creatures[s].y + 5)/10)].on == 1) {

creatures[s].speed = creatures[s].speed - 1.5;


grid[Math.round((creatures[s].x + 5)/10)][Math.round((creatures[s].y + 5)/10)].on = 0;
grid[Math.round((creatures[s].x + 5)/10) - 1][Math.round((creatures[s].y + 5)/10) ].on = 0;
grid[Math.round((creatures[s].x + 5)/10) + 1][Math.round((creatures[s].y + 5)/10) ].on = 0;
grid[Math.round((creatures[s].x + 5)/10)][Math.round((creatures[s].y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((creatures[s].x + 5)/10)][Math.round((creatures[s].y + 5)/10)  + 1 ].on = 0;

grid[Math.round((creatures[s].x + 5)/10) - 1][Math.round((creatures[s].y + 5)/10) - 1].on = 0;
grid[Math.round((creatures[s].x + 5)/10) + 1][Math.round((creatures[s].y + 5)/10) + 1 ].on = 0;
grid[Math.round((creatures[s].x + 5)/10) + 1][Math.round((creatures[s].y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((creatures[s].x + 5)/10) -1][Math.round((creatures[s].y + 5)/10)  + 1 ].on = 0;

new_particles(creatures[s].x, creatures[s].y, 20, 1, "green", 5)
 }


if (creatures[s].speed < -10) {creatures[s].speed = 10;}
 s_p_x = creatures[s].x - guy.x + 250;
s_p_y =  creatures[s].y - guy.y + 250;


if (creatures[s].hit == 1) {
ctx.drawImage(creature1_g,creatures[s].type*50,50,50,50,s_p_x, s_p_y,50,50);
creatures[s].hit = 0;
} else {
ctx.drawImage(creature1_g,creatures[s].type*50,0,50,50,s_p_x, s_p_y,50,50);

}

} else { //creatures.splice(s, 1);

}
}


ctx.font="20px Verdana";
ctx.fillStyle="red";
ctx.fillText("score:" + score, 100, 100);
ctx.fillText("health:" + guy.health, 100, 120);
ctx.font="10px Verdana";
ctx.fillText("gun: damage" + guy.gun.damage + " speed: " + guy.gun.speed + " deviation: " + guy.gun.deviance, 100, 130);

ctx.drawImage(cursor_g,  mouse.x -10 ,  mouse.y - 10, 21,21);



if(mouse.down == 1) {

new_rotation = Math.atan2(mouse.y+ (guy.y - 250) - guy.y, mouse.x + (guy.x -  250) - guy.x);

new_bullet(guy.x, guy.y, new_rotation, guy.gun.multi ,guy.gun.size, "color", guy.gun.deviance, guy.gun.speed, guy.gun.damage, guy.gun.graphic);


//guy.gun.damage = 5;
//guy.gun.speed = 5
//guy.gun.reload = 1;
//guy.gun.reloading = 0;
//guy.gun.size = 1;
//guy.gun.deviance = 3;
//guy.gun.range = 100;
//guy.gun.multi = 2;
//guy.gun.muti_angle = 35;


//function new_bullet(x, y, rotation,number, size, color, deviation, speed) {
}



for (s = 0; s < bullets.length; s ++) {
if(bullets[s]) {
if(bullets[s].x > 2 && bullets[s].x < grid.length*10- 2 && bullets[s].y > 2 && bullets[s].y < grid.length*10 -2) {



remove = 0;
bullets[s].x +=Math.cos(bullets[s].rotation)*bullets[s].speed;

bullets[s].y +=Math.sin(bullets[s].rotation)*bullets[s].speed;

ctx.drawImage(bullet_g, bullets[s].g * 10, 0,10,10,  bullets[s].x - guy.x + 250 - ( bullets[s].size/2),  bullets[s].y - guy.y + 250 - ( bullets[s].size/2), bullets[s].size, bullets[s].size);

for (bs = 0; bs < creatures.length;bs++) {
if (creatures[bs]) {
if (bullets[s].x > creatures[bs].x && bullets[s].x < creatures[bs].x + 20 && bullets[s].y > creatures[bs].y && bullets[s].y < creatures[bs].y + 20) {


creatures[bs].health = creatures[bs].health - bullets[s].damage; 
creatures[bs].hit = 1;// bullet damage
creatures[bs].speed = creatures[bs].speed - bullets[s].damage;
//new_particles(bullets[s].x, bullets[s].y, 3, 1, "red", 100)
//new_particles(bullets[s].x, bullets[s].y, 2, 1, "green", 50)
if (creatures[bs].health < 0) {
new_particles(bullets[s].x, bullets[s].y, 20, 1, "red", 5)
new_particles(bullets[s].x, bullets[s].y, 5, 1, "green", 50)
score = score + 1111;
creatures.splice(bs, 1);
}
remove = 1;//bullets.splice(s, 1);
}


}
}






if (grid[Math.round((bullets[s].x + 5)/10)][Math.round((bullets[s].y + 5)/10)].on == 1) {


// new_automation(bullets[s].x, bullets[s].y, 1, "city_cave", 20, -1)
if (bullets[s].damage > 5) {

grid[Math.round((bullets[s].x + 5)/10)][Math.round((bullets[s].y + 5)/10)].on = 0;
grid[Math.round((bullets[s].x + 5)/10) - 1][Math.round((bullets[s].y + 5)/10) ].on = 0;
grid[Math.round((bullets[s].x + 5)/10) + 1][Math.round((bullets[s].y + 5)/10) ].on = 0;
grid[Math.round((bullets[s].x + 5)/10)][Math.round((bullets[s].y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((bullets[s].x + 5)/10)][Math.round((bullets[s].y + 5)/10)  + 1 ].on = 0;
new_particles(bullets[s].x, bullets[s].y, 5, 1, "green", 5)
score = score + 5;
}
if (bullets[s].damage > 8) {

grid[Math.round((bullets[s].x + 5)/10) - 1][Math.round((bullets[s].y + 5)/10) - 1].on = 0;
grid[Math.round((bullets[s].x + 5)/10) + 1][Math.round((bullets[s].y + 5)/10) + 1 ].on = 0;
grid[Math.round((bullets[s].x + 5)/10) + 1][Math.round((bullets[s].y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((bullets[s].x + 5)/10) -1][Math.round((bullets[s].y + 5)/10)  + 1 ].on = 0;
new_particles(bullets[s].x, bullets[s].y, 5, 1, "green", 5)
score = score + 5;
}

//new_particles(bullets[s].x, bullets[s].y, 1, 1, "green", 5)
remove = 1;//bullets.splice(s, 1);
 }

} else { remove == 1; }

if (remove == 1) {bullets.splice(s, 1);}

}
}

if (guy.health > 0) {

if (guy.xvel < 0 || guy.xvel > 0 || guy.yvel < 0 || guy.yvel > 0) {
guy.walking = 1;
 guy.walkframe++ 
 if (guy.walkframe > 5){guy.walkframe = 2;}

} else {guy.walking = 0; }



if (keys.w.on == 1) {guy.yvel = -7;}

if (keys.a.on == 1) {guy.xvel = -7;}


if (keys.s.on == 1) {guy.yvel = 7;}

if (keys.d.on == 1) {guy.xvel = 7;}

guy.x = guy.x + guy.xvel;
guy.y = guy.y + guy.yvel;

guy.xvel = Math.round(guy.xvel/1.5);

guy.yvel = Math.round(guy.yvel/1.5);
//guy.yvel = guy.yvel + 3;

if (guy.xvel < 1.1 && guy.xvel > 0) { guy.xvel = 0; }  

if (guy.xvel > -1.1 && guy.xvel < 0) { guy.xvel = 0; }  

if (guy.yvel < 1.1 && guy.yvel > 0) { guy.yvel = 0; }  

if (guy.yvel > -1.1 && guy.yvel < 0) { guy.yvel = 0; }  
 
  
if(guy.x > 2 && guy.x < (grid.length*10)-2 && guy.y > 2 && guy.y < (grid.length*10) -2) {


if (grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].on == 1) {
//alert(Math.round(guy.x/10) + " " + Math.round(guy.px/10) );
//grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].color = 1;

grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].f++;

//if (guy.xvel < -2 || guy.xvel > 2) {
score = score + 100;
grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].on = 0;
grid[Math.round((guy.x + 5)/10) - 1][Math.round((guy.y + 5)/10) ].on = 0;
grid[Math.round((guy.x + 5)/10) + 1][Math.round((guy.y + 5)/10) ].on = 0;
grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)  + 1 ].on = 0;

grid[Math.round((guy.x + 5)/10) - 1][Math.round((guy.y + 5)/10) - 1].on = 0;
grid[Math.round((guy.x + 5)/10) + 1][Math.round((guy.y + 5)/10) + 1 ].on = 0;
grid[Math.round((guy.x + 5)/10) + 1][Math.round((guy.y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((guy.x + 5)/10) -1][Math.round((guy.y + 5)/10)  + 1 ].on = 0;

new_particles(guy.x, guy.y, 20, 1, "green", 5)
// }
//if (guy.xvel > 0) {guy.x = (Math.round(guy.x/10) - 1) * 10 }







guy.x = guy.px;
guy.y = guy.py;
guy.xvel = 0;
guy.yvel = 0;


}

}

guy.py = guy.y;
guy.px = guy.x;

if (guy.dir == "r") { yoffset = 13; } else { yoffset = 0; }

if (guy.xvel == 0 && guy.yvel == 0) {guy.walkframe = 0;}

xoffset = (guy.walkframe ) * 10;



ctx.drawImage(guy.g,xoffset,yoffset,10,12,250,250,10,12);





} else {
new_particles(guy.x, guy.y, 20, 10, "red", 50)

respawncounter--;
if (respawncounter < 0) {
guy.x = 5000;
guy.y = 5000;
guy.health = 23;
score = 0;
creatures = [];
bullets = [];
particles = [];

grid = noise_grid(grid);
respawncounter = 44;
}
}

}



 



//onTimerTick();

setInterval(onTimerTick, 99); 
