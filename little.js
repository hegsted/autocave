



///////   VER e E z 5 awguiss











function lineDistance(x1, y1, x2, y2) {

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
    var rules_b = new Array();
    var rules_s = new Array();
    var rules2_b = new Array();
    var rules2_s = new Array();

    for (br = 0; br < 9; br++) ///   default all rules to 0
    {
        rules_b[br] = 0;
        rules2_b[br] = 0;
    }

    for (sr = 0; sr < 9; sr++) {
        rules_s[sr] = 0;
        rules2_s[sr] = 0;
    }




    if (rules == "city_sprawl") {
        rules_b[4] = 1; //   these are the conditions upon which an empty cell will become full.
        rules_b[5] = 1; // rules_b = born
        rules_b[6] = 1;

        rules_s[2] = 1;
        rules_s[3] = 1; // these are the conditions upon which a full cell will remain full
        rules_s[4] = 1; // rules_s = survive
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
        rules_b[2] = 1; //   these are the conditions upon which an empty cell will become full.
        rules_b[4] = 1; // rules_b = born

        // rules_s = survive

        rules_s[3] = 1;

        rules_s[4] = 1;

        rules_s[5] = 1;
        rules_s[6] = 1;
        rules_s[7] = 1;
        rules_s[8] = 1;
    }


    if (rules == "cave") {

        rules_b[5] = 1; //   these are the conditions upon which an empty cell will become full.
        rules_b[6] = 1; // rules_b = born
        rules_b[7] = 1;

        rules_s[3] = 1;
        rules_s[4] = 1; // these are the conditions upon which a full cell will remain full
        rules_s[5] = 1; // rules_s = survive
        rules_s[6] = 1;
        rules_s[7] = 1;
        rules_s[8] = 1;
    }


    if (rules == "conways") {

        rules_b[3] = 1; // these are basic conway's life rules


        rules_s[2] = 1; //
        rules_s[3] = 1; ///
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




    for (var x_i = leftx; x_i < endx; x_i++) {

        for (var y_i = topy; y_i < endy; y_i++) {

            rules_s = default_rules_s;
            rules_b = default_rules_b;




            var n = 0;
            var t_min = 50;

            if (env[x_i + 1][y_i + 1].on == 1) {
                n = n + 1;
            }
            if (env[x_i + 1][y_i].on == 1) {
                n = n + 1;
            }
            if (env[x_i + 1][y_i - 1].on == 1) {
                n = n + 1;
            }
            if (env[x_i][y_i + 1].on == 1) {
                n = n + 1;
            } // get number of neigbors
            if (env[x_i][y_i - 1].on == 1) {
                n = n + 1;
            }
            if (env[x_i - 1][y_i + 1].on == 1) {
                n = n + 1;
            }
            if (env[x_i - 1][y_i].on == 1) {
                n = n + 1;
            }
            if (env[x_i - 1][y_i - 1].on == 1) {
                n = n + 1;
            }

            if (env[x_i][y_i].on == 0) {

                env2[x_i][y_i].on = 0;


                switch (n) //   apply the results of the rules to a new blank array
                {

                    case 1:
                        if (rules_b[1] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 2:
                        if (rules_b[2] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 3:
                        if (rules_b[3] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 4:
                        if (rules_b[4] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 5:
                        if (rules_b[5] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 6:
                        if (rules_b[6] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 7:
                        if (rules_b[7] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 8:
                        if (rules_b[8] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                }




            }

            if (env[x_i][y_i].on == 1) {
                env2[x_i][y_i].on = 0;

                switch (n) {

                    case 1:
                        if (rules_s[1] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 2:
                        if (rules_s[2] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 3:
                        if (rules_s[3] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 4:
                        if (rules_s[4] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 5:
                        if (rules_s[5] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 6:
                        if (rules_s[6] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 7:
                        if (rules_s[7] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;

                    case 8:
                        if (rules_s[8] > 0) {
                            env2[x_i][y_i].on = 1;
                        }
                        break;


                }


            }


        }


    }

    return env2;


}




function gravity(env) {


    var env2 = env;


    for (var x_i = 2; x_i < env.length - 2; x_i++) {

        for (var y_i = 2; y_i < env[3].length - 2; y_i++) {



            var under = 1;
            under += y_i;


            if (env[x_i][under].on < env[x_i][y_i].on) {
                var holdit2 = env2[x_i][y_i].on;

                env2[x_i][y_i].on = env[x_i][under].on;
                env2[x_i][under].on = holdit2;




            }



        }


    }

    return env2;

}



function quad_pathfind(grid, ent, size) {
    xx = Math.round(ent.x / 10)
    yy = Math.round(ent.y / 10)
    rx = 0;
    ry = 0;

    quads = new Array();
    for (y = yy - size; y < yy + size; y++) {
        ry++
        rx = 0;
        for (x = xx - size; x < xx + size; x++) {
            rx++



            if (rx < size / 2 && ry < size / 2) {
                quad = 0
            } else if (rx < size && ry < size / 2) {
                quad = 1
            } else if (rx < size + (size / 2) && ry < size / 2) {
                quad = 2
            } else if (rx > size + (size / 2) && ry < size / 2) {
                quad = 3
            } else if (rx < size / 2 && ry < size) {
                quad = 4
            } else if (rx < size && ry < size) {
                quad = 5
            } else if (rx < size + (size / 2) && ry < size) {
                quad = 6
            } else if (rx > size + (size / 2) && ry < size) {
                quad = 7
            } else if (rx < size / 2 && ry < size + (size / 2)) {
                quad = 8
            } else if (rx < size && ry < size + (size / 2)) {
                quad = 9
            } else if (rx < size + (size / 2) && ry < size + (size / 2)) {
                quad = 10
            } else if (rx > size + (size / 2) && ry < size + (size / 2)) {
                quad = 11
            } else if (rx < size / 2 && ry > size + (size / 2)) {
                quad = 12
            } else if (rx < size && ry > size + (size / 2)) {
                quad = 13
            } else if (rx < size + (size / 2) && ry > size + (size / 2)) {
                quad = 14
            } else if (rx > size + (size / 2) && ry > size + (size / 2)) {
                quad = 15
            }

            //alert(rx + " " + ry + " " + quad);
            if (quads[quad]) {} else {
                quads[quad] = 0;
            }



            if (grid[x][y].on == 1) {
                quads[quad] = quads[quad] + 1
            }



        }
    }

    //console.log(quads[0], quads[1], quads[2], quads[3] );
    //console.log(quads[4], quads[5], quads[6], quads[7] );
    //console.log(quads[8], quads[9], quads[10], quads[11] );
    //console.log(quads[12], quads[13], quads[14], quads[15] );

    return quads;
}



function updatemap() {
    map_ctx.clearRect(0, 0, 1000, 1000);

    for (x = 1; x < grid.length; x++) {
        for (y = 1; y < grid[0].length; y++) {
            if (x > 2 && x < grid.length - 2 && y > 2 && y < grid.length - 2) {




                if (grid[x][y].on == 1) {
                    map_ctx.drawImage(floor_g, 0, grid[x][y].tileset * 10, 10, 10, x, y, 1, 1);
                }



            }
        }
    }

    map_ctx.drawImage(particle_r, guy.x / 10, guy.y / 10, 10, 10);

    for (b = 0; b < buddies.length; b++) {
        if (buddies[b]) {

            map_ctx.drawImage(particle_r, buddies[b].x / 10, buddies[b].y / 10, 5, 5);


        }
    }


}



function find_pattern(grid, startx, starty, endx, endy, pattern, image, spawn) {
    for (x = startx; x < endx; x++) {
        for (y = starty; y < endy; y++) {
            var counter1 = 0;
            var counter2 = 0;
            for (ppx = 0; ppx < pattern.length; ppx++) {
                for (ppy = 0; ppy < pattern[0].length; ppy++) {
                    counter1++
                    if (grid[x + ppx][y + ppy].on == pattern[ppx][ppy]) {
                        //grid[x + ppx][y+ppy].color = 1

                        if (grid[x + ppx][y + ppy].image == 0) {
                            counter2++
                        }

                    }

                }
            }

            if (counter1 == counter2) {
                if (spawn) {
                    new_creature(x, y, spawn)
                }

                //alert(counter1 + "  " +  counter2)
                for (ppx = 0; ppx < pattern.length; ppx++) {
                    for (ppy = 0; ppy < pattern[0].length; ppy++) {



                        //grid[x + ppx][y+ppy].color = 1
                        grid[x + ppx][y + ppy].image = image
                        grid[x + ppx][y + ppy].imagex = ppx * 10;
                        grid[x + ppx][y + ppy].imagey = ppy * 10;


                    }
                }
            } else {

                //grid[x][y].color = 0

            }




        }
    }
    return grid

}


var test_pattern = [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
];

var door_pattern = [
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0, 0]
];

var small_pattern = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
];


var pattern0 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1]
];


var pattern1 = [
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0]
];

var pattern2 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0]
];

var pattern3 = [
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1]
];

var pattern4 = [
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0]
];


var pattern5 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
];

var crashed_ship_g = new Image();
crashed_ship_g.src = "crashed_ship.png"

crashed_ship = new Object;

crashed_ship.x = 5500;
crashed_ship.y = 5000;

var all_scenery = new Image();
all_scenery.src = "all_scenery.png"

var plant_g = new Image();
plant_g.src = "plant.png"

var cliffs_g = new Image();
cliffs_g.src = "cliffs.png"

var explosions_g = new Image();
explosions_g.src = "explosions.png";

var tiles = new Image();
tiles.src = "tiles1.png";

var floortiles = new Image();
floortiles.src = "floortiles1.png";


var pickups_g = new Image();
pickups_g.src = "pickups.png"


var explosions = new Array();



var bullets = new Array();

function new_bullet(x, y, rotation, number, size, color, deviation, speed, damage, graphic, lifespan, wallspan, wallspeed) {



    for (i = 0; i < number; i++) {
        newbullet = new Object();
        newbullet.x = x; 
        newbullet.y = y; 
        newbullet.speed = speed;
        newbullet.g = graphic;
        newbullet.rotation = rotation + ((rand(0, deviation) - (deviation / 2)) / 100);   // 1 rand

        newbullet.age = 0;
        newbullet.lifespan = lifespan;
        newbullet.wallspan = wallspan;
        newbullet.wallspeed = wallspeed;


        newbullet.color = color;
        newbullet.size = size;
        newbullet.damage = damage;
        bullets.push(newbullet);
    }




}


function new_creature(x, y, number) {


    for (nc = 0; nc < number; nc++) {
        newcreature = new Object();
        choosetype = (lineDistance(x, y, 500, 500) / 5) - rand(1, 100);;
        newcreature.type = 0


        if (choosetype > 20) {
            newcreature.type = 1;
        }

        if (choosetype > 40) {
            newcreature.type = 2;
        }

        if (choosetype > 60) {
            newcreature.type = 3;
        }

        if (choosetype > 80) {
            newcreature.type = 4;
        }

        if (choosetype > 90) {
            newcreature.type = 5;
        }


        newcreature.x = x * 10;
        newcreature.y = y * 10;
        newcreature.xvel = 0;
        newcreature.yvel = 0;
        newcreature.speed = 1;
        newcreature.topspeed = 7;
        newcreature.health = (newcreature.type + 1) * 5;

        creatures.push(newcreature);

    }


}




var particles = new Array();

function new_particles(x, y, number, size, color, deviation) {

    for (i = 0; i < number; i++) {
        new_particle = new Object();
        new_particle.x = x + (rand(0, deviation) - (deviation / 2));
        new_particle.y = y + (rand(0, deviation) - (deviation / 2));

        new_particle.px = new_particle.x;
        new_particle.py = new_particle.y;

        new_particle.xvel = rand(1, 6) - 3;
        new_particle.yvel = rand(1, 6) - 3;

        new_particle.age = 0;
        new_particle.lifespan = 5;


        new_particle.color = color;
        new_particle.size = size + ((rand(0, deviation) - (deviation / 2)) / 10);
        particles.push(new_particle);
    }



}

function particle_gravity() {
    for (pg = 0; pg < particles.length; pg++) {
        if (particles[pg].x > 2 && particles[pg].x < grid.length * 10 - 2 && particles[pg].y > 2 && particles[pg].y < grid.length * 10 - 2) {


            particles[pg].age++



                if (grid[Math.round((particles[pg].x + 5) / 10)][Math.round((particles[pg].y + 5) / 10)].on == 1) {

                    if (grid[Math.round((particles[pg].px + 5) / 10)][Math.round((particles[pg].py + 5) / 10)].on == 0) {
                        if (particles[pg].x < particles[pg].px) {
                            particles[pg].xvel = 3;
                        }
                        if (particles[pg].x > particles[pg].px) {
                            particles[pg].xvel = -3;
                        }
                        if (particles[pg].y < particles[pg].px) {
                            particles[pg].xvel = 3;
                        }
                        if (particles[pg].y > particles[pg].px) {
                            particles[pg].xvel = -3;
                        }
                        particles[pg].y = particles[pg].y + particles[pg].yvel;
                        particles[pg].x = particles[pg].x + particles[pg].xvel;

                    } else {
                        grid[Math.round((particles[pg].x + 5) / 10)][Math.round((particles[pg].y + 5) / 10) - 1].on == 1
                    }

                } else {
                    particles[pg].y = particles[pg].y + particles[pg].yvel;
                    particles[pg].x = particles[pg].x + particles[pg].xvel;
                }
                //particles[pg].yvel++

            if (particles[pg].age > particles[pg].lifespan) {
                particles.splice(pg, 1);
            }


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
keys.t = new Object();
keys.y = new Object();
keys.u = new Object();


keys.w.on = 0;
keys.a.on = 0;
keys.s.on = 0;
keys.d.on = 0;
keys.t.on = 0;
keys.y.on = 0;
keys.u.on = 0;

var light = new Object();
light.noise = 10;
light.amt = 1;


sword_g = new Image ();
sword_g.src = "sword.png";

cursor_g = new Image();
cursor_g.src = 'cursor.png';

buddy_g = new Image();
buddy_g.src = 'spaceguy_b.png';

particle_g = new Image();
particle_g.src = 'particle.png';

particle_r = new Image();
particle_r.src = 'particle_r.png';

bullet_g = new Image();
bullet_g.src = 'bullets.png';


creature_g = new Image();
creature_g.src = 'spider.png';


creature1_g = new Image();
creature1_g.src = 'creature1.png';

var floor_g = new Image();
floor_g.src = "floor.png";

var bg = new Image();
bg.src = "background1.jpg";

var scenery1 = new Image();
scenery1.src = "scenery1.png"

var scenery2 = new Image();
scenery2.src = "scenery2.png"

var scenery3 = new Image();
scenery3.src = "scenery3.png"

var score = 0;

var fadebg = 0;

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

var gravity = 0;

var buddies = new Array;
/*
for(b = 0; b<230; b++) {
buddies[b] = new Object;
buddies[b] .x = 5000 + rand(1,1000) - 500; //000;
buddies[b] .y = 5000 + rand(1,1000) - 500; //000;
buddies[b] .px = 5000 + rand(1,1000) - 500;
buddies[b] .py = 5000 + rand(1,1000) - 500;
buddies[b] .xvel = 1;
buddies[b] .yvel = 1;
buddies[b] .ph = 0;
buddies[b] .goalx =1;

buddies[b] .goaly =-1;

buddies[b].fav = rand(1, 16) -1;
}
*/
winbuddies = 0;
var guy = new Object();
guy.x = 5000; //000;
guy.y = 5000; //000;
guy.xvel = 0;
guy.yvel = 0;
guy.px = 5000; //000;
guy.py = 5000; //000;
guy.dir = "r";
guy.walkframe = 0;
guy.walking = 0;
guy.health = 23;
guy.gun = new Object();
guy.speed = 4;
guy.lit = 0;
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
guy.gun.lifespan = 25;
guy.gun.wallspan = 2;
guy.gun.wallspeed = 6;


guy.g = new Image();
guy.g.src = 'spaceguy.png';

guy.gl = new Image();
guy.gl.src = 'spaceguy_light.png';


var gun_sound = new Howl({
  urls: ['gun.mp3']
});

var bug_sound = new Howl({
  urls: ['bug.mp3']
});




/*

if (e.keyCode == 87) { guy.yvel = guy.yvel + 7;}
if (e.keyCode == 83) { guy.yvel = guy.yvel - 7;}
if (e.keyCode == 65) { guy.xvel = guy.xvel + 5; guy.dir = "l";}
if (e.keyCode == 68) { guy.xvel = guy.xvel - 5;guy.dir = "r";}

*/


document.onkeydown = function(e) {
    e = e || window.event;

    if (e.keyCode == 87) {
        keys.w.on = 1;
    }
    if (e.keyCode == 83) {
        keys.s.on = 1;
    }
    if (e.keyCode == 65) {
        keys.a.on = 1;
    }
    if (e.keyCode == 68) {
        keys.d.on = 1;
    }

    if (e.keyCode == 84) {
        keys.t.on = 1;
    }
    if (e.keyCode == 89) {
        keys.y.on = 1;
    }
    if (e.keyCode == 85) {
        keys.u.on = 1;
        guy.gun.size = rand(1, 15);
        guy.gun.speed = rand(1, 15);
        guy.gun.multi = 1;
        guy.gun.damage = rand(1, 10) + 1;
        guy.gun.graphic = rand(0, 9);
        guy.gun.deviance = rand(1, 23);
        guy.gun.multi = rand(1, 5);
        guy.gun.lifespan = rand(15, 1500);
    }



};


document.onkeyup = function(e) {
    e = e || window.event;

    if (e.keyCode == 87) {
        keys.w.on = 0;
    }
    if (e.keyCode == 83) {
        keys.s.on = 0;
    }
    if (e.keyCode == 65) {
        keys.a.on = 0;
    }
    if (e.keyCode == 68) {
        keys.d.on = 0;
    }


};




function noise_grid(grid, towns) {

cliff = 500;
dev = 0;



    for (x = 0; x < 1000; x++) {
        grid[x] = new Array();
        for (y = 0; y < 1000; y++) {
            grid[x][y] = new Object();
            grid[x][y].color = 0;
            grid[x][y].f = rand(1, 50);


            grid[x][y].tileset = 0;

            grid[x][y].image = 0;
            grid[x][y].imagex = 0;
            grid[x][y].imagey = 0;

	  grid[x][y].cliff = 0;


            grid[x][y].alphaoverride = 0;


            chance_of_on = rand(1, 100) + (lineDistance(x, y, 500, 500) / 150);
            if (lineDistance(x, y, 500, 500) > 499) {
                chance_of_on = 0;
            }


            if (chance_of_on > 64) {
                grid[x][y].on = 1;
            } else {
                grid[x][y].on = 0;


            }




            if (lineDistance(x, y, 500, 500) > 168 && lineDistance(x, y, 500, 500) < 176) {
                grid[x][y].on = 1;
            }



            if (lineDistance(x, y, 500, 500) < 30) {
                grid[x][y].on = 0;
            }

            for (t = 0; t < towns.length; t++) {

                if (lineDistance(x, y, towns[t].x, towns[t].y) < towns[t].radius + 1) {
                    grid[x][y].on = 1;

                    if (lineDistance(x, y, towns[t].x, towns[t].y) < towns[t].radius - 1) {
                        grid[x][y].on = 0;
                    }

                }



            }








        }
    }

    grid = automata(grid, "cave", 2, 2, grid.length - 2, grid[0].length - 2)
    grid = automata(grid, "cave", 2, 2, grid.length - 2, grid[0].length - 2)

    grid = automata(grid, "cave", 2, 2, grid.length - 2, grid[0].length - 2)

    grid = automata(grid, "cave", 2, 2, grid.length - 2, grid[0].length - 2)

    grid = automata(grid, "cave", 2, 2, grid.length - 2, grid[0].length - 2)

    grid = automata(grid, "cave", 2, 2, grid.length - 2, grid[0].length - 2)

    grid = automata(grid, "cave", 2, 2, grid.length - 2, grid[0].length - 2)

    grid = find_pattern(grid, 10, 10, grid.length - 10, grid[0].length - 10, pattern0, 1, 0)
    grid = find_pattern(grid, 10, 10, grid.length - 10, grid[0].length - 10, pattern1, 2, 0)
    grid = find_pattern(grid, 10, 10, grid.length - 10, grid[0].length - 10, pattern2, 3, 0)
    grid = find_pattern(grid, 10, 10, grid.length - 10, grid[0].length - 10, pattern3, 4, 0)
    grid = find_pattern(grid, 10, 10, grid.length - 10, grid[0].length - 10, pattern4, 5, 0)
    grid = find_pattern(grid, 10, 10, grid.length - 10, grid[0].length - 10, pattern5, 6, 0)




    for (x = 2; x < grid.length - 2; x++) {

	dev = dev + (rand(1,4) -2)


	if (dev > 2) { dev = 2; }
        if (dev < 0) { dev = 0; }


        for (y = 2; y < grid[0].length - 2; y++) {



            if (grid[x][y].on == 0) {

                if (rand(1, 1000) < 2) {
                    grid[x][y].pickup = rand(1, 6);
                } else {
                    grid[x][y].pickup = 0
                }
            }


            if (lineDistance(x, y, 500, 500) > 10) {

                grid[x][y].tileset = Math.round(lineDistance(x, y, 500, 500) / 50);


            }


/*z
if (y > cliff && y < cliff + 30) { 



	grid[x][y].on = 0; 





console.log(dev);
	if (y > (cliff + 4 + dev )  && y < (cliff + 16 + dev )) {

  		if (grid[x][y].cliff == 0) {


   				grid[x][y].cliff = 1;
  				 grid[x][y+1].cliff = 2;
   				grid[x][y+2].cliff = 2;
  				grid[x][y+3].cliff = 2;
 				 grid[x][y+4].cliff = 2;
 				 grid[x][y+5].cliff = 2;
				 grid[x][y+6].cliff = 2;
				grid[x][y+7].cliff = 2;
				grid[x][y+8].cliff = 2;
				grid[x][y+9].cliff = 2;
				grid[x][y+10].cliff = 3;
				grid[x][y+11].cliff = 3;


				   grid[x][y].on = 1;
 				  grid[x][y+1].on = 1;
  				 grid[x][y+2].on = 1;
 				 grid[x][y+3].on = 1;
				  grid[x][y+4].on = 1;
 				 grid[x][y+5].on = 1;

	                          grid[x][y+6].on = 1;
				grid[x][y+7].on = 1;
				grid[x][y+8].on = 1;
				grid[x][y+9].on = 1;
				grid[x][y+10].on = 1;
				grid[x][y+11].on = 1;


		 } else if (grid[x][y].cliff > 0) { grid[x][y].on =1; }

	}


}



*/





        }
    }


//for (c = 








    return grid;
}




function rand(min, max) {
    var dif = max - min;
    return (Math.floor((Math.random() * dif)) + min);
}


var grid = new Array();

var towns = new Array();


for (t = 0; t < 230; t++) {
    town = new Object();
    town.x = rand(1, 1000);
    town.y = rand(1, 1000);
    town.radius = rand(5, 20);

    if (lineDistance(town.x, town.y, 500, 500) < 440) {
        towns.push(town);
    }
}


grid = noise_grid(grid, towns)




var floorgrid = new Array();
for (x = 0; x < 1000; x++) {
    floorgrid[x] = new Array();
    for (y = 0; y < 1000; y++) {
        floorgrid[x][y] = new Object();
        floorgrid[x][y].color = 0;
        floorgrid[x][y].f = rand(1, 50);

        floorgrid[x][y].tileset = 0;
        floorgrid[x][y].image = 0;
        floorgrid[x][y].imagex = 0;
        floorgrid[x][y].imagey = 0;

        chance_of_on = rand(1, 100);
        if (lineDistance(x, y, 500, 500) > 505) {
            chance_of_on = 0;
        }

        if (chance_of_on > 50) {
            floorgrid[x][y].on = 1;
        } else {
            floorgrid[x][y].on = 0;
        }

        for (t = 0; t < towns.length; t++) {

            if (lineDistance(x, y, towns[t].x, towns[t].y) < towns[t].radius + 1) {
                floorgrid[x][y].on = 1;

                if (lineDistance(x, y, towns[t].x, towns[t].y) < towns[t].radius - 1) {
                    floorgrid[x][y].on = 0;
                }

            }



        }


        if (lineDistance(x, y, 500, 500) > 10) {

            floorgrid[x][y].tileset = Math.round(lineDistance(x, y, 500, 500) / 50);
        }


    }
}



floorgrid = automata(floorgrid, "cave", 2, 2, floorgrid.length - 2, floorgrid[0].length - 2)
floorgrid = automata(floorgrid, "cave", 2, 2, floorgrid.length - 2, floorgrid[0].length - 2)
floorgrid = automata(floorgrid, "eroder", 2, 2, floorgrid.length - 2, floorgrid[0].length - 2)
floorgrid = automata(floorgrid, "cave", 2, 2, floorgrid.length - 2, floorgrid[0].length - 2)
floorgrid = automata(floorgrid, "cave", 2, 2, floorgrid.length - 2, floorgrid[0].length - 2)
for (t = 0; t < towns.length; t++) {
    floorgrid = automata(floorgrid, "tiles", towns[t].x - (towns[t].radius), towns[t].y - (towns[t].radius), towns[t].x + (towns[t].radius), towns[t].y + (towns[t].radius));
    floorgrid = automata(floorgrid, "tiles", towns[t].x - (towns[t].radius), towns[t].y - (towns[t].radius), towns[t].x + (towns[t].radius), towns[t].y + (towns[t].radius));
    floorgrid = automata(floorgrid, "tiles", towns[t].x - (towns[t].radius), towns[t].y - (towns[t].radius), towns[t].x + (towns[t].radius), towns[t].y + (towns[t].radius));

}


function new_explosion(x, y, type, size) {
    ne = new Object;
    ne.x = x;
    ne.y = y;
    ne.type = type;
    ne.frame = 0;
    ne.size = size
    explosions.push(ne);


}


var mouse = new Object();
mouse.x = 0;
mouse.y = 0;
mouse.down = 0;


canvas1 = document.getElementById('main');

var ctx = canvas1.getContext('2d');




canvas2 = document.getElementById('counters');

var ctx2 = canvas2.getContext('2d');


mapcanvas = document.getElementById('map');
var map_ctx = mapcanvas.getContext('2d');


canvas1.onmousemove = function(e) {
    e = e || window.event;

    if (e.pageX || e.pageY) {

        mouse.x = e.pageX;
        mouse.y = e.pageY;


    }

}


document.onmouseup = function(e) {
    e = e || window.event;

    mouse.down = 0;

};


document.onmousedown = function(e) {
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

for (ggg = 0; ggg < 23; ggg++) {


}




ctx.save();

var zoom = 1;

guy.sword = 1;
function onTimerTick() {

//requestAnimationFrame(onTimerTick);

    ctx.restore();
    ctx.save();

    if (zoom < 1) {
        zoom = 1;
    }


    if (zoom > 1.6) {
        zoom = 1.6;
    }



    ctx.translate(0 - 2 * (zoom * 100) + 200, 0 - 2 * (zoom * 100) + 200)


    ctx.scale(1 * zoom, 1 * zoom);



    if (mouse.down == 1) {

 guy.sword =  guy.sword + 1;
if (guy.sword > 3) {guy.sword = 0;}
        //zoom = zoom + 0.01;
        //ctx.restore();
        //

        guy.lit = 1;
        new_rotation = Math.atan2(mouse.y + (guy.y - 250) - guy.y, mouse.x + (guy.x - 250) - guy.x);
        //
        new_bullet(guy.x + 4.5, guy.y + 6, new_rotation, guy.gun.multi, guy.gun.size, "color", guy.gun.deviance, guy.gun.speed, guy.gun.damage, guy.gun.graphic, guy.gun.lifespan, guy.gun.wallspan, guy.gun.wallspeed);
gun_sound.play();
    } else {
       // zoom = zoom - 0.01;


    }




    x = guy.x / 10;
    y = guy.y / 10;

    if (lineDistance(x, y, 500, 500) > 420) {
        fadebg = fadebg + 0.1;
    } else {
        fadebg = fadebg - 0.1;
    }


    if (fadebg < 0) {
        fadebg = 0;
    }
    if (fadebg > 1) {
        fadebg = 1;
    }

    if (fadebg > 0) {
        ctx.globalAlpha = 1;
        //ctx.fillStyle = "blue";
        // ctx.fillRect(0, 0, 1000, 1000);

        ctx.drawImage(bg, 0, 0);
    }

    ctx.globalAlpha = 1 - fadebg;
    if (guy.health > 0) {
        ctx.fillStyle = "black";
    } else {
        ctx.fillStyle = "red";
    }

    ctx.fillRect(0, 0, 1000, 1000);

    ctx.globalAlpha = 1;
    //ctx.drawImage(bg,0,0);




    count++;


    //if (count < 10) {

    //grid = gravity(grid)
    //}
    var guy_gx = Math.round((guy.x + 5) / 10)
    var guy_gy = Math.round((guy.y + 5) / 10)


    if (guy.x > 110 && guy.x < (grid.length * 10) - 110 && guy.y > 110 && guy.y < (grid.length * 10) - 110) {

       // grid = automata(grid, rules, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10)
        //floorgrid = automata(floorgrid, "tiles", guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10)

        //grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, test_pattern, 1, 1+(lineDistance(x,y, 500, 500)/50))
        //grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, door_pattern, 3, 3)
       grid = find_pattern(grid, guy_gx - 10, guy_gy - 10, guy_gx + 10, guy_gy + 10, small_pattern, 2, 1 + (lineDistance(x, y, 500, 500) / 50))

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




    line = lineDistance(guy.x / 10, guy.y / 10, 500, 500)

    if (guy.lit == 1) {
        l = 25 + rand(1, 10);
    } else {
        l = 20;
    }

    if (line < 165) {

        if (light.noise > 0) {
            light.noise = light.noise - 1;
        }
        if (light.amt < 3) {
            light.amt = light.amt + 0.1;
        }
        if (light.amt > 3) {
            light.amt = light.amt - 0.1;
        }

    } else if (line > 165 && line < 168) {

        if (light.amt < 3) {
            light.amt = light.amt + 0.1;
        }

    } else if (line > 168 && line < 179) {

        if (light.amt > 1) {
            light.amt = light.amt - 0.1;
        }

    } else if (line > 179 && line < 320) {

        if (light.amt < 1) {
            light.amt = light.amt + 0.1;
        }
        if (light.amt > 1) {
            light.amt = light.amt - 0.1;
        }
        if (light.noise > 0) {
            light.noise = light.noise - 1;
        }


    } else if (line > 320 && line < 405) {
        if (light.noise < 15) {
            light.noise = light.noise + 1;
        }

        if (light.amt < 1.3) {
            light.amt = light.amt + 0.1;
        }
        if (light.amt > 1.3) {
            light.amt = light.amt - 0.1;
        }

    } else if (line > 405) {

        if (light.amt < 3) {
            light.amt = light.amt + 0.1;
        }
        if (light.noise > 0) {
            light.noise = light.noise - 1;
        }

    }



    for (x = guy_gx - 25; x < guy_gx + 32; x++) {
        for (y = guy_gy - 25; y < guy_gy + 10; y++) {
            if (x > 2 && x < grid.length - 2 && y > 2 && y < grid.length - 2) {


if (light.noise > 0) { ln = (rand(0, light.noise) / 100) } else { ln = 0; }

                ga = light.amt - (lineDistance(x, y, guy.x / 10, guy.y / 10) / l) + grid[x][y].alphaoverride + ln ;   // rand


                if (ga < 0) {
                    ga = 0;
                }

                if (ga > 1) {
                    ga = 1;
                }

                ctx.globalAlpha = ga;

                if (grid[x][y].alphaoverride > 0) {
                    grid[x][y].alphaoverride = grid[x][y].alphaoverride - 0.1;
                }

                if (grid[x][y].alphaoverride < 0) {
                    grid[x][y].alphaoverride = 0
                }

                p_x = x - ((guy.x + 5) / 10) + 25;
                p_y = y - ((guy.y + 5) / 10) + 25;




                if (floorgrid[x + 1][y] && floorgrid[x - 1][y] && floorgrid[x][y + 1] && floorgrid[x][y - 1] && floorgrid[x][y].on == 1) {




                    if (floorgrid[x + 1][y].on == 1 && floorgrid[x][y + 1].on == 1 && floorgrid[x - 1][y - 1].on == 0 && floorgrid[x - 1][y].on == 0 && floorgrid[x][y - 1].on == 0) {

                        //ctx.putImageData(left_slope,p_x*10,p_y*10);

                        ctx.drawImage(floortiles, 10, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);


                    } else if (floorgrid[x - 1][y].on == 1 && floorgrid[x][y + 1].on == 1 && floorgrid[x + 1][y - 1].on == 0 && floorgrid[x + 1][y].on == 0 && floorgrid[x][y - 1].on == 0) {

                        //ctx.putImageData(right_slope,p_x*10,p_y*10);

                        ctx.drawImage(floortiles, 20, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);


                    } else if (floorgrid[x + 1][y].on == 1 && floorgrid[x][y - 1].on == 1 && floorgrid[x - 1][y + 1].on == 0 && floorgrid[x - 1][y].on == 0 && floorgrid[x][y + 1].on == 0) {

                        //ctx.putImageData(left_hang,p_x*10,p_y*10);

                        ctx.drawImage(floortiles, 40, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);


                    } else if (floorgrid[x - 1][y].on == 1 && floorgrid[x][y - 1].on == 1 && floorgrid[x + 1][y + 1].on == 0 && floorgrid[x + 1][y].on == 0 && floorgrid[x][y + 1].on == 0) {

                        //ctx.putImageData(right_hang,p_x*10,p_y*10);
                        ctx.drawImage(floortiles, 50, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);


                    } else if (floorgrid[x][y - 1].on == 0) {

                        //ctx.putImageData(right_hang,p_x*10,p_y*10);
                        ctx.drawImage(floortiles, 30, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);

                    } else if (floorgrid[x][y + 1].on == 0) {

                        //ctx.putImageData(right_hang,p_x*10,p_y*10);
                        ctx.drawImage(floortiles, 60, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);


                    } else {
                        if (floorgrid[x][y].color == 0) {
                            ctx.drawImage(floortiles, 0, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);

                        } else {
                            ctx.drawImage(floortiles, 70, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);


                        }

                    }


                } else {
                    ctx.drawImage(floortiles, 70, floorgrid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10, 10, 10);


                }




                //if(floorgrid[x][y].on == 1) {
                //ctx.drawImage(floor_g,0,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);
                //} else {
                //ctx.drawImage(floor_g,10,grid[x][y].tileset*10,10,10,p_x*10,p_y*10,10,10);
                //}




                if (grid[x + 1][y] && grid[x - 1][y] && grid[x][y + 1] && grid[x][y - 1] && grid[x][y].on == 1) {

			h = 0;
                   //  for (h = 0; h < grid[x][y].height; h = h + 2) {
                    floorgrid[x][y].on = 1;


                    if (grid[x + 1][y].on == 1 && grid[x][y + 1].on == 1 && grid[x - 1][y - 1].on == 0 && grid[x - 1][y].on == 0 && grid[x][y - 1].on == 0) {

                        //ctx.putImageData(left_slope,p_x*10,p_y*10);

                        ctx.drawImage(tiles, 10, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);


                    } else if (grid[x - 1][y].on == 1 && grid[x][y + 1].on == 1 && grid[x + 1][y - 1].on == 0 && grid[x + 1][y].on == 0 && grid[x][y - 1].on == 0) {

                        //ctx.putImageData(right_slope,p_x*10,p_y*10);

                        ctx.drawImage(tiles, 20, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);


                    } else if (grid[x + 1][y].on == 1 && grid[x][y - 1].on == 1 && grid[x - 1][y + 1].on == 0 && grid[x - 1][y].on == 0 && grid[x][y + 1].on == 0) {

                        //ctx.putImageData(left_hang,p_x*10,p_y*10);
                        ctx.drawImage(tiles, 40, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);


                            if (grid[x][y].cliff == 3) {   ctx.drawImage(cliffs_g, 0, 0, 10, 120, p_x * 10, (p_y-11) * 10, 10, 120);}


                    } else if (grid[x - 1][y].on == 1 && grid[x][y - 1].on == 1 && grid[x + 1][y + 1].on == 0 && grid[x + 1][y].on == 0 && grid[x][y + 1].on == 0) {

                        //ctx.putImageData(right_hang,p_x*10,p_y*10);
                        ctx.drawImage(tiles, 50, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);


                                  if (grid[x][y].cliff == 3) {   ctx.drawImage(cliffs_g, 10, 0, 10, 120, p_x * 10, (p_y-11) * 10, 10, 120);}


	         } else if( grid[x-1][y].on == 0 && grid[x+1][y].on == 0  && grid[x][y-1].on == 0 && grid[x][y+1].on == 1) { 

     			 ctx.drawImage(tiles, 70, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);


	         } else if( grid[x-1][y].on == 0 && grid[x+1][y].on == 0  && grid[x][y-1].on == 1 && grid[x][y+1].on == 0) { 

     			 ctx.drawImage(tiles, 80, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);

  if (grid[x][y].cliff == 3) {   ctx.drawImage(cliffs_g, 30, 0, 10, 120, p_x * 10, (p_y-11) * 10, 10, 120);}




       		  } else if( grid[x-1][y].on == 0 && grid[x+1][y].on == 1  && grid[x][y-1].on == 0 && grid[x][y+1].on == 0) {
 
     			 ctx.drawImage(tiles, 90, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);


    		 } else if( grid[x-1][y].on == 1 && grid[x+1][y].on == 0  && grid[x][y-1].on == 0 && grid[x][y+1].on == 0) { 

     			 ctx.drawImage(tiles, 100, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);

   		 } else if( grid[x-1][y].on == 0 && grid[x+1][y].on == 1) { 

     			 ctx.drawImage(tiles, 110, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);
	
 		} else if( grid[x-1][y].on == 1 && grid[x+1][y].on == 0) { 

     			 ctx.drawImage(tiles, 120, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);

 		} else if( grid[x-1][y].on == 0 && grid[x+1][y].on == 0  &&  grid[x][y-1].on == 1 &&  grid[x][y+1].on == 1  ) { 

     			 ctx.drawImage(tiles, 130, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);

 		} else if( grid[x-1][y].on == 1 && grid[x+1][y].on == 1  &&  grid[x][y-1].on == 0 &&  grid[x][y+1].on == 0  ) { 

     			 ctx.drawImage(tiles, 140, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);


 		} else if( grid[x-1][y].on == 0 && grid[x+1][y].on == 0  &&  grid[x][y-1].on == 0 &&  grid[x][y+1].on == 0  ) { 

     			 ctx.drawImage(tiles, 150, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);



                    } else if (grid[x][y - 1].on == 0) {

                        //ctx.putImageData(right_hang,p_x*10,p_y*10);
                        ctx.drawImage(tiles, 30, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);

                    } else if (grid[x][y + 1].on == 0) {

                    
                        ctx.drawImage(tiles, 60, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);

                           if (grid[x][y].cliff == 3) {  ctx.drawImage(cliffs_g, 20, 0, 10, 120, p_x * 10, (p_y-11) * 10, 10, 120); }




                    } else {
                        if (grid[x][y].color == 0) {
                            ctx.drawImage(tiles, 0, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);

                        } else {
                            ctx.drawImage(tiles, 70, grid[x][y].tileset * 10, 10, 10, p_x * 10, p_y * 10-h, 10, 10);


                        }
                   //   }

                    }


                    if (grid[x][y].image > 0) {
                        ts = 0;
                        if (grid[x][y].tileset > 3) {
                            ts = 50
                        }
                        if (grid[x][y].tileset > 6) {
                            ts = 100
                        }
                        if (grid[x][y].tileset > 8) {
                            ts = 150
                        }

                        ctx.drawImage(all_scenery, grid[x][y].imagex + ((grid[x][y].image - 1) * 50), grid[x][y].imagey + ts, 10, 10, p_x * 10, p_y * 10, 10, 10);


                    } else if (grid[x][y].image == -5) {

			 ctx.drawImage(plant_g, (rand(1,5) - 1)*10, 0, 10, 50, p_x * 10, (p_y * 10) - 40, 10, 50);


			}


                }

                if (grid[x][y].pickup > 0) {



                    ctx.drawImage(pickups_g, (grid[x][y].pickup - 1) * 10, 0, 10, 10, p_x * 10, p_y * 10, 10, 10);


                }



            }
        }
    }

    ctx.globalAlpha = 1;



    ctx.drawImage(crashed_ship_g, crashed_ship.x - guy.x + 250, crashed_ship.y - guy.y + 250);


    for (e = 0; e < explosions.length; e++) {
        if (explosions[e]) {

            explosions[e].frame++

                ctx.drawImage(explosions_g, explosions[e].frame * 20, explosions[e].type * 20, 20, 20, explosions[e].x - guy.x + 250 - (explosions[e].size / 2), explosions[e].y - guy.y + 250 - (explosions[e].size / 2), explosions[e].size, explosions[e].size);


            if (explosions[e].frame > 9) {
                explosions.splice(e, 1);
            }

        }
    }




    particle_gravity();
    for (pp = 0; pp < particles.length; pp++) {
        if (particles[pp].x > guy.x - 250 && particles[pp].x < guy.x + 320 && particles[pp].y > guy.y - 260 && particles[pp].y < guy.y + 100) {

            if (particles[pp]) {

                pp_x = particles[pp].x - (guy.x - 250);
                pp_y = particles[pp].y - (guy.y - 250);



                if (particles[pp].color == "green") {
                    ctx.drawImage(particle_g, pp_x, pp_y, 5 + particles[pp].size, 5 + particles[pp].size);
                }

                if (particles[pp].color == "red") {
                    ctx.drawImage(particle_r, pp_x, pp_y, 5 + particles[pp].size, 5 + particles[pp].size);
                }


            }
        } else {
            particles.splice(pp, 1)
        }

    }

    intown = 0

    for (ct = 0; ct < towns.length; ct++) {


        if (lineDistance(guy.x, guy.y, towns[ct].x * 10, towns[ct].y * 10) < towns[ct].radius * 10) {
            intown = 1;
        }


    }

    for (s = 0; s < creatures.length; s++) {

        if (creatures[s].x > 20 && creatures[s].x < (grid.length - 2) * 10 && creatures[s].y > 20 && creatures[s].y < (grid.length - 2) * 10) {


            for (b = 0; b < buddies.length; b++) {

                if (creatures[s].x > buddies[b].x - 4 && creatures[s].x < buddies[b].x + 4 && creatures[s].y < buddies[b].y + 4 && creatures[s].y > buddies[b].y - 4) {
                    new_particles(creatures[s].x, creatures[s].y, 100, 1, "red", 5)

                    buddies.splice(b, 1); //creatures[s].type/2;
                }

            }


            //alert(creatures[s].x + " "+  creatures[s].y);



            for (sc = 0; sc < creatures.length; sc++) {

                if (sc != s) {

                    if (creatures[s].x + 20 > creatures[sc].x && creatures[s].x < creatures[sc].x + 20 && creatures[s].y + 20 > creatures[sc].y && creatures[s].y < creatures[sc].y + 20) {

                        if (creatures[s].x < creatures[sc].x) {
                            creatures[sc].x = creatures[sc].x + rand(1, 3);
                        }
                        if (creatures[s].x > creatures[sc].x) {
                            creatures[sc].x = creatures[sc].x - rand(1, 3);
                        }
                        if (creatures[s].y < creatures[sc].y) {
                            creatures[sc].y = creatures[sc].y + rand(1, 3);
                        }
                        if (creatures[s].y > creatures[sc].y) {
                            creatures[sc].y = creatures[sc].y - rand(1, 3);
                        }


                    }
                }
            }



            if (creatures[s].speed < creatures[s].topspeed) {
                creatures[s].speed = creatures[s].speed + 0.1;
            }

            if (creatures[s].speed < 0 - creatures[s].topspeed) {
                creatures[s].speed = 0 - creatures[s].topspeed;
            }

            if (intown == 1) {
                creatures[s].speed = creatures[s].speed - 0.2;
            } else {
                if (creatures[s].speed < -10) {
                    creatures[s].speed = 10;
                }
            }

            creatures[s].rotation = Math.atan2(guy.y - creatures[s].y, guy.x - creatures[s].x);

            creatures[s].x += Math.cos(creatures[s].rotation) * creatures[s].speed;

            creatures[s].y += Math.sin(creatures[s].rotation) * creatures[s].speed;


            if (creatures[s].x > guy.x - 4 && creatures[s].x < guy.x + 4 && creatures[s].y < guy.y + 4 && creatures[s].y > guy.y - 4) {
                new_particles(creatures[s].x, creatures[s].y, 20, 1, "red", 5)

                guy.health = guy.health - 1; //creatures[s].type/2;
            }


            if (grid[Math.round((creatures[s].x + 5) / 10)][Math.round((creatures[s].y + 5) / 10)].on == 1) {

                creatures[s].speed = creatures[s].speed - 1.5;


                grid[Math.round((creatures[s].x + 5) / 10)][Math.round((creatures[s].y + 5) / 10)].on = 0;
                grid[Math.round((creatures[s].x + 5) / 10) - 1][Math.round((creatures[s].y + 5) / 10)].on = 0;
                grid[Math.round((creatures[s].x + 5) / 10) + 1][Math.round((creatures[s].y + 5) / 10)].on = 0;
                grid[Math.round((creatures[s].x + 5) / 10)][Math.round((creatures[s].y + 5) / 10) - 1].on = 0;
                grid[Math.round((creatures[s].x + 5) / 10)][Math.round((creatures[s].y + 5) / 10) + 1].on = 0;

                grid[Math.round((creatures[s].x + 5) / 10) - 1][Math.round((creatures[s].y + 5) / 10) - 1].on = 0;
                grid[Math.round((creatures[s].x + 5) / 10) + 1][Math.round((creatures[s].y + 5) / 10) + 1].on = 0;
                grid[Math.round((creatures[s].x + 5) / 10) + 1][Math.round((creatures[s].y + 5) / 10) - 1].on = 0;
                grid[Math.round((creatures[s].x + 5) / 10) - 1][Math.round((creatures[s].y + 5) / 10) + 1].on = 0;

                new_particles(creatures[s].x, creatures[s].y, 20, 1, "green", 5)
            }



            s_p_x = creatures[s].x - guy.x + 250;
            s_p_y = creatures[s].y - guy.y + 250;


            if (creatures[s].hit == 1) {
                ctx.drawImage(creature1_g, creatures[s].type * 50, 50, 50, 50, s_p_x, s_p_y, 50, 50);
                creatures[s].hit = 0;
            } else {
                ctx.drawImage(creature1_g, creatures[s].type * 50, 0, 50, 50, s_p_x, s_p_y, 50, 50);

            }

        } else {
            creatures.splice(s, 1);
        }


    }






    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "yellow";
    ctx2.fillText("score:" + score, 10, 20);
    ctx2.fillStyle = "red";
    ctx2.fillText("health:" + guy.health, 10, 32);
    ctx2.font = "10px Verdana";
    ctx2.fillStyle = "grey";
    ctx2.fillText("gun: damage" + guy.gun.damage + " speed: " + guy.gun.speed + " deviation: " + guy.gun.deviance, 10, 42);
    ctx2.fillText("buddies:" + buddies.length + " enemies: " + creatures.length + " bullets: " + bullets.length + " particles: " + particles.length + "escaped: " + winbuddies, 10, 52);




    ctx.drawImage(cursor_g, mouse.x - 10, mouse.y - 10, 21, 21);




    for (s = 0; s < bullets.length; s++) {

        //for (x = guy_gx - 30; x < guy_gx + 50; x++) {
        //for (y = guy_gy - 30; y < guy_gy + 20; y++) {

        if (bullets[s]) {
            if (bullets[s].x > guy.x - 250 && bullets[s].x < guy.x + 320 && bullets[s].y > guy.y - 260 && bullets[s].y < guy.y + 100) {

                remove = 0;
                bullets[s].age++
                    if (bullets[s].age > bullets[s].lifespan) {
                        remove = 1;
                    }



                bullets[s].x += Math.cos(bullets[s].rotation) * bullets[s].speed;

                bullets[s].y += Math.sin(bullets[s].rotation) * bullets[s].speed;

                if (gravity == 1) {
                    bullets[s].y = bullets[s].y + 3;
                }


var TO_RADIANS = Math.PI/180;

               // ctx.save();
                //ctx.translate(bullets[s].x - guy.x + 250 - ( bullets[s].size/2), bullets[s].y - guy.y + 250 - ( bullets[s].size/2))
               // ctx.rotate((bullets[s].rotation))

                ctx.drawImage(bullet_g, bullets[s].g * 10, 0, 10, 10, bullets[s].x - guy.x + 250 - (bullets[s].size / 2), bullets[s].y - guy.y + 250 - (bullets[s].size / 2), bullets[s].size, bullets[s].size);
               // ctx.restore();

                for (bs = 0; bs < creatures.length; bs++) {
                    if (creatures[bs]) {
                        if (bullets[s].x > creatures[bs].x && bullets[s].x < creatures[bs].x + 20 && bullets[s].y > creatures[bs].y && bullets[s].y < creatures[bs].y + 20) {


                            creatures[bs].health = creatures[bs].health - bullets[s].damage;
                            creatures[bs].hit = 1; // bullet damage
                            creatures[bs].speed = creatures[bs].speed - bullets[s].damage;
                            //new_particles(bullets[s].x, bullets[s].y, 3, 1, "red", 100)
                            //new_particles(bullets[s].x, bullets[s].y, 2, 1, "green", 50)
                            if (creatures[bs].health < 0) {
                                new_particles(bullets[s].x, bullets[s].y, 20, 1, "red", 5)
                                new_particles(bullets[s].x, bullets[s].y, 5, 1, "green", 50)
                                new_explosion(bullets[s].x, bullets[s].y, 1, creatures[bs].type + 2 * 20);
                                score = score + 1111;
bug_sound.play();
                                creatures.splice(bs, 1);
                            }
                            remove = 1; //bullets.splice(s, 1);
                        }


                    }
                }


                grid[Math.round((bullets[s].x + 5) / 10)][Math.round((bullets[s].y + 5) / 10)].alphaoverride = .5;
                grid[Math.round((bullets[s].x + 5) / 10) - 1][Math.round((bullets[s].y + 5) / 10)].alphaoverride = 0.2;
                grid[Math.round((bullets[s].x + 5) / 10) + 1][Math.round((bullets[s].y + 5) / 10)].alphaoverride = 0.2;
                grid[Math.round((bullets[s].x + 5) / 10)][Math.round((bullets[s].y + 5) / 10) - 1].alphaoverride = 0.2;
                grid[Math.round((bullets[s].x + 5) / 10)][Math.round((bullets[s].y + 5) / 10) + 1].alphaoverride = 0.2;



                if (grid[Math.round((bullets[s].x + 5) / 10)][Math.round((bullets[s].y + 5) / 10)].on == 1) {
//grid[Math.round((bullets[s].x + 5) / 10)][Math.round((bullets[s].y + 5) / 10)].image = -5;
                    new_explosion(bullets[s].x, bullets[s].y, 0, bullets[s].size * 3);

                    // new_automation(bullets[s].x, bullets[s].y, 1, "city_cave", 20, -1)
                    if (bullets[s].damage > 5) {
                        new_explosion(bullets[s].x, bullets[s].y, 2, 40);
                        grid[Math.round((bullets[s].x + 5) / 10)][Math.round((bullets[s].y + 5) / 10)].on = 0;
                        grid[Math.round((bullets[s].x + 5) / 10) - 1][Math.round((bullets[s].y + 5) / 10)].on = 0;
                        grid[Math.round((bullets[s].x + 5) / 10) + 1][Math.round((bullets[s].y + 5) / 10)].on = 0;
                        grid[Math.round((bullets[s].x + 5) / 10)][Math.round((bullets[s].y + 5) / 10) - 1].on = 0;
                        grid[Math.round((bullets[s].x + 5) / 10)][Math.round((bullets[s].y + 5) / 10) + 1].on = 0;
                        new_particles(bullets[s].x, bullets[s].y, 5, 1, "green", 5)
                        score = score + 5;
                    }


                    if (bullets[s].damage > 8) {
                        new_explosion(bullets[s].x + 3, bullets[s].y + 3, 60);
                        new_explosion(bullets[s].x - 3, bullets[s].y - 3, 60);
                        new_explosion(bullets[s].x - 3, bullets[s].y + 3, 80);
                        new_explosion(bullets[s].x + 3, bullets[s].y - 3, 80);

                        grid[Math.round((bullets[s].x + 5) / 10) - 1][Math.round((bullets[s].y + 5) / 10) - 1].on = 0;
                        grid[Math.round((bullets[s].x + 5) / 10) + 1][Math.round((bullets[s].y + 5) / 10) + 1].on = 0;
                        grid[Math.round((bullets[s].x + 5) / 10) + 1][Math.round((bullets[s].y + 5) / 10) - 1].on = 0;
                        grid[Math.round((bullets[s].x + 5) / 10) - 1][Math.round((bullets[s].y + 5) / 10) + 1].on = 0;
                        new_particles(bullets[s].x, bullets[s].y, 5, 1, "green", 5)
                        score = score + 5;
                    }

                    //new_particles(bullets[s].x, bullets[s].y, 1, 1, "green", 5)
                    remove = 1; //bullets.splice(s, 1);



                    //bullets[s].speed = bullets[s].speed / bullets[s].wallspeed;

                    //bullets[s].lifespan = bullets[s].lifespan - bullets[s].wallspan;

                    if (bullets[s].rotation > -1 && bullets[s].rotation < 0) {
                        bullets[s].rotation = (Math.random() * 3);
                    } // + min
                    if (bullets[s].rotation > 0 && bullets[s].rotation < 0) {
                        bullets[s].rotation = 0 - (Math.random() * 3);
                    } // + min
                    if (bullets[s].rotation > 1 && bullets[s].rotation < 4) {
                        bullets[s].rotation = 0 - Math.random();
                    } // + min
                    if (bullets[s].rotation > -4 && bullets[s].rotation < -1) {
                        bullets[s].rotation = Math.random();
                    }

                }

            } else {

                //.log(bullets[s].rotation);

                remove = 1;

            }

            if (remove == 1) {
                bullets.splice(s, 1);
            }

        }
    }



    for (b = 0; b < buddies.length; b++) {




        for (sb = 0; sb < buddies.length; sb++) {
            if (sb != b) {

                if (buddies[b].x + 20 > buddies[sb].x && buddies[b].x < buddies[sb].x + 20 && buddies[b].y + 20 > buddies[sb].y && buddies[b].y < buddies[sb].y + 20) {

                    if (buddies[b].x < buddies[sb].x) {
                        buddies[sb].x = buddies[sb].x + 1;
                    }
                    if (buddies[b].x > buddies[sb].x) {
                        buddies[sb].x = buddies[sb].x - 1;
                    }
                    if (buddies[b].y < buddies[sb].y) {
                        buddies[sb].y = buddies[sb].y + 1;
                    }
                    if (buddies[b].y > buddies[sb].y) {
                        buddies[sb].y = buddies[sb].y - 1;
                    }


                }
            }
        }




        if (buddies[b].y > 200) {
            //if (rand(1,100) < 60) {

            buddyquads = quad_pathfind(grid, buddies[b], 5);

            lowest = 0;
            lowestvar = 100;
            for (q = quads.length; q > 0; q--) {
                if (quads[q] < lowestvar) {
                    lowest = q;
                    lowestvar = quads[q];
                }
                if (quads[q] == lowestvar) {



                    if (buddies[b].fav == q) {
                        lowest = q;
                        lowestvar = quads[q];
                    }
                    //if (rand(1, 100) < 10) { 

                    bq = 0;

                    if (q == 0 || q == 1 || q == 4 || 4 == 5) {
                        bq = 1;
                    }

                    if (q == 2 || q == 3 || q == 6 || 4 == 7) {
                        bq = 2;
                    }

                    if (q == 8 || q == 9 || q == 12 || 4 == 13) {
                        bq = 3;
                    }

                    if (q == 10 || q == 11 || q == 14 || 4 == 15) {
                        bq = 4;
                    }


                    //if (buddies[b].y > guy.y && buddies[b].x > guy.x && bq==1) { lowest = q; lowestvar = quads[q];   }

                    //if (buddies[b].y > guy.y && buddies[b].x < guy.x && bq==2) { lowest = q; lowestvar = quads[q];   }

                    //if (buddies[b].y < guy.y && buddies[b].x > guy.x && bq==3) { lowest = q; lowestvar = quads[q];   }

                    //if (buddies[b].y < guy.y && buddies[b].x < guy.x && bq==3) { lowest = q; lowestvar = quads[q];   }


                    //} 
                    //if (rand(1, 100) < 16) { lowest = q; lowestvar = quads[q]; }
                    //if(buddies[b].goalx > 0) { } else if(buddies[b].goalx < 0) { } else { }
                    //if(buddies[b].goaly > 0) { } else if (buddies[b].goaly < 0){ } else { }


                }
            }


            //if (lowestvar > 0) {

            if (lowest == 0) {
                buddies[b].xvel = buddies[b].xvel - 2;
                buddies[b].yvel = buddies[b].yvel - 2;
            }
            if (lowest == 1) {
                buddies[b].xvel = buddies[b].xvel - 1;
                buddies[b].yvel = buddies[b].yvel - 2;
            }
            if (lowest == 2) {
                buddies[b].xvel = buddies[b].xvel + 1;
                buddies[b].yvel = buddies[b].yvel - 2;
            }
            if (lowest == 3) {
                buddies[b].xvel = buddies[b].xvel + 2;
                buddies[b].yvel = buddies[b].yvel - 2;
            }

            if (lowest == 4) {
                buddies[b].xvel = buddies[b].xvel - 2;
                buddies[b].yvel = buddies[b].yvel - 1;
            }
            if (lowest == 5) {
                buddies[b].xvel = buddies[b].xvel - 1;
                buddies[b].yvel = buddies[b].yvel - 1;
            }
            if (lowest == 6) {
                buddies[b].xvel = buddies[b].xvel + 1;
                buddies[b].yvel = buddies[b].yvel - 1;
            }
            if (lowest == 7) {
                buddies[b].xvel = buddies[b].xvel + 2;
                buddies[b].yvel = buddies[b].yvel - 1;
            }

            if (lowest == 8) {
                buddies[b].xvel = buddies[b].xvel - 2;
                buddies[b].yvel = buddies[b].yvel + 1;
            }
            if (lowest == 9) {
                buddies[b].xvel = buddies[b].xvel - 1;
                buddies[b].yvel = buddies[b].yvel + 1;
            }
            if (lowest == 10) {
                buddies[b].xvel = buddies[b].xvel + 1;
                buddies[b].yvel = buddies[b].yvel + 1;
            }
            if (lowest == 11) {
                buddies[b].xvel = buddies[b].xvel + 2;
                buddies[b].yvel = buddies[b].yvel + 1;
            }

            if (lowest == 12) {
                buddies[b].xvel = buddies[b].xvel - 2;
                buddies[b].yvel = buddies[b].yvel + 2;
            }
            if (lowest == 13) {
                buddies[b].xvel = buddies[b].xvel - 1;
                buddies[b].yvel = buddies[b].yvel + 2;
            }
            if (lowest == 14) {
                buddies[b].xvel = buddies[b].xvel + 1;
                buddies[b].yvel = buddies[b].yvel + 2;
            }
            if (lowest == 15) {
                buddies[b].xvel = buddies[b].xvel + 2;
                buddies[b].yvel = buddies[b].yvel + 2;
            }
            //}

            if (lowestvar !== 0) {
                buddies[b].xvel = buddies[b].xvel / 1.1;
                buddies[b].yvel = buddies[b].yvel / 1.1;

            }

            //buddies[b].xvel =buddies[b].xvel +rand(1,4)-2;  buddies[b].yvel = buddies[b].yvel+rand(1,4)-2; }
            //if (lowest == buddies[b].ph) {}
            //buddies[b].ph = lowest;
            //}

            buddies[b].x = buddies[b].x + buddies[b].xvel;
            buddies[b].y = buddies[b].y + buddies[b].yvel;


            if (buddies[b].xvel > 3) {
                buddies[b].xvel = 3;
            }

            if (buddies[b].xvel < -3) {
                buddies[b].xvel = -3;
            }

            if (buddies[b].yvel > 3) {
                buddies[b].yvel = 3;
            }


            if (buddies[b].yvel < -3) {
                buddies[b].yvel = -3;
            }



            buddies[b].px = buddies[b].x;
            buddies[b].py = buddies[b].y;

            xoffset = (guy.walkframe) * 10;
            yoffset = 0;




            if (grid[Math.round((buddies[b].x + 5) / 10)][Math.round((buddies[b].y + 5) / 10)].on == 1) {

                //creatures[s].speed = creatures[s].speed - 1.5;


                grid[Math.round((buddies[b].x + 5) / 10)][Math.round((buddies[b].y + 5) / 10)].on = 0;
                grid[Math.round((buddies[b].x + 5) / 10) - 1][Math.round((buddies[b].y + 5) / 10)].on = 0;
                grid[Math.round((buddies[b].x + 5) / 10) + 1][Math.round((buddies[b].y + 5) / 10)].on = 0;
                grid[Math.round((buddies[b].x + 5) / 10)][Math.round((buddies[b].y + 5) / 10) - 1].on = 0;
                grid[Math.round((buddies[b].x + 5) / 10)][Math.round((buddies[b].y + 5) / 10) + 1].on = 0;

                grid[Math.round((buddies[b].x + 5) / 10) - 1][Math.round((buddies[b].y + 5) / 10) - 1].on = 0;
                grid[Math.round((buddies[b].x + 5) / 10) + 1][Math.round((buddies[b].y + 5) / 10) + 1].on = 0;
                grid[Math.round((buddies[b].x + 5) / 10) + 1][Math.round((buddies[b].y + 5) / 10) - 1].on = 0;
                grid[Math.round((buddies[b].x + 5) / 10) - 1][Math.round((buddies[b].y + 5) / 10) + 1].on = 0;

                new_particles(buddies[b].x, buddies[b].y, 20, 1, "green", 5)

            }

            ctx.drawImage(buddy_g, xoffset, yoffset, 10, 12, buddies[b].x - guy.x + 250, buddies[b].y - guy.y + 250, 10, 12);



        } else {
            buddies.splice(b, 1);
            winbuddies++
        }
    }




    if (guy.health > 0) {


        if (mouse.x + (guy.x - 250) > guy.x) {
            guy.dir = "r"
        } else {
            guy.dir = "l";
        }

        if (guy.xvel < 0 || guy.xvel > 0 || guy.yvel < 0 || guy.yvel > 0) {
            guy.walking = 1;
            guy.walkframe++
                if (guy.walkframe > 5) {
                    guy.walkframe = 2;
                }

        } else {
            guy.walking = 0;
        }



        if (keys.w.on == 1) {
            guy.yvel -= guy.speed;
        }

        if (keys.a.on == 1) {
            guy.xvel -= guy.speed;
        }


        if (keys.s.on == 1) {
            guy.yvel += guy.speed;
        }

        if (keys.d.on == 1) {
            guy.xvel += guy.speed;
        }

        guy.x = guy.x + guy.xvel;
        guy.y = guy.y + guy.yvel;

        guy.xvel = Math.round(guy.xvel / 1.5);

        guy.yvel = Math.round(guy.yvel / 1.5);

        if (gravity == 1) {
            guy.yvel = guy.yvel + 3;
        }
        if (guy.xvel < 1.1 && guy.xvel > 0) {
            guy.xvel = 0;
        }

        if (guy.xvel > -1.1 && guy.xvel < 0) {
            guy.xvel = 0;
        }

        if (guy.yvel < 1.1 && guy.yvel > 0) {
            guy.yvel = 0;
        }

        if (guy.yvel > -1.1 && guy.yvel < 0) {
            guy.yvel = 0;
        }


        if (guy.x > 2 && guy.x < (grid.length * 10) - 2 && guy.y > 2 && guy.y < (grid.length * 10) - 2) {




            grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)].alphaoverride = .4;
            grid[Math.round((guy.x + 5) / 10) - 1][Math.round((guy.y + 5) / 10)].alphaoverride = 0.3;
            grid[Math.round((guy.x + 5) / 10) + 1][Math.round((guy.y + 5) / 10)].alphaoverride = 0.3;
            grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10) - 1].alphaoverride = 0.3;
            grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10) + 1].alphaoverride = 0.3;




            if (grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)].on == 1) {


                //alert(Math.round(guy.x/10) + " " + Math.round(guy.px/10) );
                //grid[Math.round((guy.x + 5)/10)][Math.round((guy.y + 5)/10)].color = 1;

                grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)].f++;
                new_explosion(guy.x, guy.y, 2, 40);
                //if (guy.xvel < -2 || guy.xvel > 2) {
                score = score + 100;
                grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)].on = 0;
                grid[Math.round((guy.x + 5) / 10) - 1][Math.round((guy.y + 5) / 10)].on = 0;
                grid[Math.round((guy.x + 5) / 10) + 1][Math.round((guy.y + 5) / 10)].on = 0;
                grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10) - 1].on = 0;
                grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10) + 1].on = 0;

                grid[Math.round((guy.x + 5) / 10) - 1][Math.round((guy.y + 5) / 10) - 1].on = 0;
                grid[Math.round((guy.x + 5) / 10) + 1][Math.round((guy.y + 5) / 10) + 1].on = 0;
                grid[Math.round((guy.x + 5) / 10) + 1][Math.round((guy.y + 5) / 10) - 1].on = 0;
                grid[Math.round((guy.x + 5) / 10) - 1][Math.round((guy.y + 5) / 10) + 1].on = 0;

                new_particles(guy.x, guy.y, 20, 1, "green", 5)
                    // }
                    //if (guy.xvel > 0) {guy.x = (Math.round(guy.x/10) - 1) * 10 }




                guy.x = guy.px;
                guy.y = guy.py;
                guy.xvel = 0;
                guy.yvel = 0;


            }
pkup = new Object();
pkup.on = 0

           if (grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)].pickup > 0) {
pkup.x = Math.round((guy.x + 5) / 10);
pkup.y = Math.round((guy.y + 5) / 10);
pkup.on = 1;
pkup.pkup = grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)].pickup;




            } else if( grid[Math.round((guy.x + 5) / 10)-1][Math.round((guy.y + 5) / 10)].pickup > 0 ) {
pkup.x = Math.round((guy.x + 5) / 10)-1;
pkup.y = Math.round((guy.y + 5) / 10);
pkup.on = 1;
pkup.pkup = grid[Math.round((guy.x + 5) / 10)-1][Math.round((guy.y + 5) / 10)].pickup;



            } else if( grid[Math.round((guy.x + 5) / 10)+1][Math.round((guy.y + 5) / 10)].pickup > 0 ) {
pkup.x = Math.round((guy.x + 5) / 10)+1;
pkup.y = Math.round((guy.y + 5) / 10);
pkup.on = 1;
pkup.pkup = grid[Math.round((guy.x + 5) / 10)+1][Math.round((guy.y + 5) / 10)].pickup;



            } else if( grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)-1].pickup > 0 ) {
pkup.x = Math.round((guy.x + 5) / 10);
pkup.y = Math.round((guy.y + 5) / 10)-1;
pkup.on = 1;
pkup.pkup = grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)-1].pickup;



            } else if( grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)+1].pickup > 0 ) {
pkup.x = Math.round((guy.x + 5) / 10);
pkup.y = Math.round((guy.y + 5) / 10)+1;
pkup.on = 1;
pkup.pkup = grid[Math.round((guy.x + 5) / 10)][Math.round((guy.y + 5) / 10)+1].pickup;

}




            if (pkup.on > 0) {
                new_particles(guy.x, guy.y, 100, 1, "green", 100)
                grid[pkup.x][pkup.y].pickup = 0;

                if (pkup.pkup == 1) {
                    score = score + 5000;
                }
                if (pkup.pkup == 2) {
                    guy.health = guy.health + 5;
                }

                if (pkup.pkup == 3) {
                    score = score + 5000;
                }
                if (pkup.pkup == 4) {
                    score = score + 10000;
                }


                if (pkup.pkup == 5) {
                    guy.gun.size = rand(1, 15);
                    guy.gun.speed = rand(1, 15);
                    guy.gun.multi = 1;
                    guy.gun.damage = rand(1, 10) + 1;
                    guy.gun.graphic = rand(0, 9);
                    guy.gun.deviance = rand(1, 23);
                    guy.gun.multi = rand(1, 5);
                    guy.gun.lifespan = rand(15, 1500);
                }


            }




        }

        guy.py = guy.y;
        guy.px = guy.x;



        if (guy.dir == "r") {
            yoffset = 13;
            swordoffset = 16;
        } else {
            yoffset = 0;
             swordoffset = 0;
        }

        if (guy.xvel == 0 && guy.yvel == 0) {
            guy.walkframe = 0;
        }

        xoffset = (guy.walkframe) * 10;



        ctx.drawImage(guy.g, xoffset, yoffset, 10, 12, 250, 250, 10, 12);

     ctx.drawImage(sword_g, swordoffset, guy.sword * 20, 16, 20, 250-16, 250-2, 16, 20);


        if (guy.lit == 1) {
            ctx.drawImage(guy.gl, xoffset, yoffset, 10, 12, 250, 250, 10, 12);
            guy.lit = 0;
        }


    } else {
        new_particles(guy.x, guy.y, 20, 10, "red", 50)

        if (light.noise < 50) {
            light.noise = light.noise + 5;
        }
        if (light.amt > 0) {
            light.amt = light.amt - 0.2;
        }

        respawncounter--;
        if (respawncounter < 0) {

            guy.x = 5000;
            guy.y = 5000;
            guy.px = 5000;
            guy.py = 5000;

            guy.health = 23;
            score = 0;
            creatures = [];
            bullets = [];
            particles = [];

            grid = noise_grid(grid, towns);
            respawncounter = 44;
        }
    }




}




//onTimerTick();

setInterval(onTimerTick, 99); 

