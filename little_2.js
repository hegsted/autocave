



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








function find_pattern(grid, startx, starty, endx, endy, pattern, image) {
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




//alert(counter1 + "  " +  counter2)
for(ppx = 0; ppx < pattern.length; ppx++) {
for(ppy = 0; ppy < pattern[0].length; ppy++) {

newspider = new Object();
newspider.x = x * 10;
newspider.y = y * 10;
newspider.xvel = 0;
newspider.yvel = 0;
newspider .speed = 1;
newspider.topspeed = 7;

spiders.push(newspider);

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

function new_bullet(x, y, rotation,number, size, color, deviation, speed, damage) {



for (i = 0; i < number; i++) {
newbullet = new Object();
newbullet.x = x + (rand(0, deviation) - (deviation/2));
newbullet.y = y + (rand(0, deviation) - (deviation/2));
newbullet.speed = speed;

newbullet.rotation = rotation // + (rand(0, deviation) - (deviation/2));

newbullet.age = 0;

newbullet.color = color;
newbullet.size = size;
newbullet.damage = damage;
bullets.push(newbullet);
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
bullet_g.src = 'bullet.png';


spider_g  = new Image();
spider_g.src = 'spider.png';


var bg = new Image();
bg.src = "background1.jpg";

var scenery1 = new Image();
scenery1.src = "scenery1.png"

var scenery2 = new Image();
scenery2.src = "scenery2.png"

var scenery3 = new Image();
scenery3.src = "scenery3.png"

var score = 0;

var spiders = new Array();

spiders[0] = new Object();
spiders[0] .x = 5023;
spiders[0] .y = 5023;
spiders[0] .xvel = 0;
spiders[0] .yvel = 0;
spiders[0] .speed = 1;
spiders[0] .topspeed = 7;

spiders[0] .rotation = 0;

spiders[1] = new Object();
spiders[1] .x = 5023;
spiders[1] .y = 4723;
spiders[1] .xvel = 0;
spiders[1] .yvel = 0;
spiders[1] .speed = 5;
spiders[0] .topspeed = 7.5;
spiders[1] .rotation = 0;

spiders[2] = new Object();
spiders[2] .x = 5123;
spiders[2] .y = 5029;
spiders[2] .xvel = 0;
spiders[2] .yvel = 0;
spiders[2] .speed = 0.1;
spiders[0] .topspeed = 10.3;
spiders[2] .rotation = 0;

var center = new Object();
center.x = 5000;
center.y = 5000;

 
var guy = new Object();
guy.x = 5000;
guy.y = 5000;
guy.xvel = 0;
guy.yvel = 0;
guy.px = 5000;
guy.py = 5000;
guy.dir = "r";
guy.walkframe = 0;
guy.walking = 0;
guy.gun = new Object();

guy.gun.damage = 5;
guy.gun.speed = 5
guy.gun.reload = 1;
guy.gun.reloading = 0;
guy.gun.size = 1;
guy.gun.deviance = 1;
guy.gun.range = 100;
guy.gun.multi = 2;
guy.gun.muti_angle = 35;


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

chance_of_on = rand(1, 100);  //(lineDistance(x,y, 500, 500)/10) + 

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
console.log(e.clientX);
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

grid = gravity(grid)
}
grid = automata(grid, "cave", 2,2, grid.length -2, grid[0].length -2)

//grid = find_pattern(grid,  10,10, grid.length -10, grid[0].length -10, door_pattern, 3)





function onTimerTick() {



//console.log(spider.x, spider.y, guy.x,guy.y);

 //ctx.clearRect(0, 0, 1000, 1000);


ctx.drawImage(bg,0,0);






count++;


//if (count < 10) {

//grid = gravity(grid)
//}
var guy_gx = Math.round((guy.x + 5)/10)
var guy_gy =Math.round((guy.y + 5)/10)

grid = automata(grid, rules, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10)



grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, test_pattern, 1)
grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, door_pattern, 3)
grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, small_pattern, 2)

for (x = guy_gx - 30; x < guy_gx + 30; x++) {
for (y = guy_gy - 30; y < guy_gy + 30; y++) {

if (lineDistance(x,y, 500, 500) > 10) {
grid[x][y].tileset = Math.round(lineDistance(x,y, 500, 500)/50);
}

}
}


for (x = guy_gx - 25; x < guy_gx + 50; x++) {
for (y = guy_gy - 25; y < guy_gy + 30; y++) {



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

if (keys.w.on == 1) {
guy.yvel = -7;
}

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
  
  


if (grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].on == 1) {
//alert(Math.round(guy.x/10) + " " + Math.round(guy.px/10) );
//grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].color = 1;

grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].f++;

if (guy.xvel < -2 || guy.xvel > 2) {
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
 }
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



if (particles[pp].color == "green") {
 ctx.drawImage(particle_g, pp_x,pp_y,5+particles[pp].size,5+particles[pp].size);
}

if (particles[pp].color == "red") {
 ctx.drawImage(particle_r, pp_x,pp_y,5+particles[pp].size,5+particles[pp].size);
}


 }

}



for (s = 0; s < spiders.length; s ++) {
for (sc = 0; sc < spiders.length; sc ++) {
if(sc != s) {

if (spiders[s].x + 20 > spiders[sc].x && spiders[s].x < spiders[sc].x + 20 && spiders[s].y + 20 > spiders[sc].y && spiders[s].y < spiders[sc].y + 20) {

if (spiders[s].x < spiders[sc].x ) { spiders[sc].x = spiders[sc].x + rand(1, 3); }
if (spiders[s].x > spiders[sc].x ) { spiders[sc].x = spiders[sc].x - rand(1, 3); }
if (spiders[s].y < spiders[sc].y ) { spiders[sc].y = spiders[sc].y + rand(1, 3); }
if (spiders[s].y > spiders[sc].y ) { spiders[sc].y = spiders[sc].y - rand(1, 3); }


}
}
}


if (spiders[s].speed < spiders[s].topspeed) { spiders[s].speed = spiders[s].speed + 0.1; }

spiders[s] .rotation=Math.atan2(guy.y - spiders[s] .y, guy.x - spiders[s] .x);

spiders[s].x +=Math.cos(spiders[s].rotation)*spiders[s].speed;

spiders[s].y +=Math.sin(spiders[s].rotation)*spiders[s].speed;


if (spiders[s].x > guy.x - 4 && spiders[s].x < guy.x + 4 && spiders[s].y < guy.y + 4 && spiders[s].y > guy.y - 4) {
new_particles(spiders[s].x, spiders[s].y, 20, 1, "red", 5)

score = score - 25;
}


if (grid[Math.round((spiders[s].x + 5)/10)][Math.round((spiders[s].y + 5)/10)].on == 1) {

spiders[s].speed = spiders[s].speed - 1.5;


grid[Math.round((spiders[s].x + 5)/10)][Math.round((spiders[s].y + 5)/10)].on = 0;
grid[Math.round((spiders[s].x + 5)/10) - 1][Math.round((spiders[s].y + 5)/10) ].on = 0;
grid[Math.round((spiders[s].x + 5)/10) + 1][Math.round((spiders[s].y + 5)/10) ].on = 0;
grid[Math.round((spiders[s].x + 5)/10)][Math.round((spiders[s].y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((spiders[s].x + 5)/10)][Math.round((spiders[s].y + 5)/10)  + 1 ].on = 0;

grid[Math.round((spiders[s].x + 5)/10) - 1][Math.round((spiders[s].y + 5)/10) - 1].on = 0;
grid[Math.round((spiders[s].x + 5)/10) + 1][Math.round((spiders[s].y + 5)/10) + 1 ].on = 0;
grid[Math.round((spiders[s].x + 5)/10) + 1][Math.round((spiders[s].y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((spiders[s].x + 5)/10) -1][Math.round((spiders[s].y + 5)/10)  + 1 ].on = 0;

new_particles(spiders[s].x, spiders[s].y, 20, 1, "green", 5)
 }


if (spiders[s].speed < -10) {spiders[s].speed = 10;}
 s_p_x = spiders[s].x - guy.x + 250;
s_p_y =  spiders[s].y - guy.y + 250;

//console.log(s_p_x, s_p_y + " spiders[s]" + spiders[s].x,spiders[s].y," guy " +guy.x,guy.y);
ctx.drawImage(spider_g, s_p_x, s_p_y,20,20);
}


ctx.font="10px Verdana";
ctx.fillStyle="red";
ctx.fillText("score:" + score, 100, 100);


ctx.drawImage(cursor_g,  mouse.x -10 ,  mouse.y - 10, 21,21);



if(mouse.down == 1) {

new_rotation = Math.atan2(mouse.y+ (guy.y - 250) - guy.y, mouse.x + (guy.x -  250) - guy.x);

new_bullet(guy.x, guy.y, new_rotation, guy.gun.multi ,guy.gun.size, "color", guy.gun.deviance, guy.gun.speed);


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



bullets[s].x +=Math.cos(bullets[s].rotation)*bullets[s].speed;

bullets[s].y +=Math.sin(bullets[s].rotation)*bullets[s].speed;

ctx.drawImage(bullet_g,  bullets[s].x - guy.x + 250 ,  bullets[s].y - guy.y + 250,3,3);

for (bs = 0; bs < spiders.length;bs++) {
if (spiders[bs]) {
if (bullets[s].x > spiders[bs].x && bullets[s].x < spiders[bs].x + 20 && bullets[s].y > spiders[bs].y && bullets[s].y < spiders[bs].y + 20) {
new_particles(bullets[s].x, bullets[s].y, 20, 1, "red", 50)
new_particles(bullets[s].x, bullets[s].y, 5, 1, "green", 50)

score = score + 1111;

spiders.splice(bs, 1);
}
}
}

if (grid[Math.round((bullets[s].x + 5)/10)][Math.round((bullets[s].y + 5)/10)].on == 1) {

grid[Math.round((bullets[s].x + 5)/10)][Math.round((bullets[s].y + 5)/10)].on = 0;
grid[Math.round((bullets[s].x + 5)/10) - 1][Math.round((bullets[s].y + 5)/10) ].on = 0;
grid[Math.round((bullets[s].x + 5)/10) + 1][Math.round((bullets[s].y + 5)/10) ].on = 0;
grid[Math.round((bullets[s].x + 5)/10)][Math.round((bullets[s].y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((bullets[s].x + 5)/10)][Math.round((bullets[s].y + 5)/10)  + 1 ].on = 0;

grid[Math.round((bullets[s].x + 5)/10) - 1][Math.round((bullets[s].y + 5)/10) - 1].on = 0;
grid[Math.round((bullets[s].x + 5)/10) + 1][Math.round((bullets[s].y + 5)/10) + 1 ].on = 0;
grid[Math.round((bullets[s].x + 5)/10) + 1][Math.round((bullets[s].y + 5)/10)  - 1 ].on = 0;
 grid[Math.round((bullets[s].x + 5)/10) -1][Math.round((bullets[s].y + 5)/10)  + 1 ].on = 0;

score = score + 10;
new_particles(bullets[s].x, bullets[s].y, 5, 1, "green", 5)
bullets.splice(s, 1);
 }



//console.log(s_p_x, s_p_y + " spiders[s]" + spiders[s].x,spiders[s].y," guy " +guy.x
}

}



}



 



//onTimerTick();

setInterval(onTimerTick, 99); 
