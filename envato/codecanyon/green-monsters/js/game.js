/* ==============================================================

   Author: UDX
   Author URL: http://codecanyon.net/user/UDX
   Game: Green Monsters - Fighting Game
   Game URL: #
   Version: 1.0

   ============================================================== */
$(document).ready(function() {
    window.onload = function() {
        $('#gamearea').jrumble({
            rumbleEvent: 'constant',
            rumbleSpeed: 60
        });
        //start crafty
        Crafty.init(50, 916, 424);
        Crafty.canvas();
        var scoreX = 0;
        var setbuttonsOnce1 = false;
        var setbuttonsOnce2 = false;
        var setbuttonsOnce3 = false;

        function rumbleScreen(actionX) {
            if (actionX == "start") {
                rumbleon = true;
            } else {
                rumbleon = false;
            }
        }
        Crafty.audio.add("swing1", ["audio/swing1.mp3", "audio/swing1.ogg"]);
        Crafty.audio.add("swing2", ["audio/swing2.mp3", "audio/swing2.ogg"]);
        Crafty.audio.add("hit1", ["audio/hit1.mp3", "audio/hit1.ogg"]);
        Crafty.audio.add("hit2", ["audio/hit2.mp3", "audio/hit2.ogg"]);
        Crafty.audio.add("beep", ["audio/skull1.mp3", "audio/skull1.ogg"]);
        Crafty.audio.add("monster", ["audio/monster.mp3", "audio/monster.ogg"]);


        ////////////-----------------------------------------------MAIN SCENE
        Crafty.scene("main", function() {
            Crafty.keydown[37] = false;
            Crafty.keydown[38] = false;
            Crafty.keydown[39] = false;
            Crafty.keydown[40] = false;
            Crafty.keydown[88] = false;
            Crafty.keydown[90] = false;




            stop_music("audio_1");
            play_music("audio_2");
            stop_music("audio_3");

            var gameback1 = Crafty.e("2D, DOM, image").attr({
                y: 0,
                x: 0,
                z: 0
            }).image("images/backgroundruins.jpg");
            var gameback2 = Crafty.e("2D, DOM, image").attr({
                y: 0,
                x: 0,
                z: 0
            }).image("images/backgroundruins.png");
            gameback1.y = -8;
            gameback2.y = -8;


            Crafty.sprite(54, "images/scull.png", {
                scull: [0, 0, 0, 0]
            });
            Crafty.sprite(318, "images/character.png", {
                player: [0, 0, 1, 0]
            });
            Crafty.sprite(406, "images/frog.png", {
                badguy: [0, 0, 0, 0]
            });
            var actionStatus = "";
            ////////////--------------------------
            var health1 = 100;
            var player1health = Crafty.e("2D, DOM, text").attr({
                w: 200,
                h: 20,
                x: 340,
                y: 10,
                z: 20
            }).text("HELLBOY LIFE: " + health1).css({
                "text-align": "left"
            });

            var starthealth2 = 100;
            var health2 = starthealth2;
            var player2health = Crafty.e("2D, DOM, text").attr({
                w: 200,
                h: 20,
                x: 640,
                y: 10,
                z: 20
            }).text("MONSTER LIFE: " + health2).css({
                "text-align": "left"
            });

            scoreX = 0;
            var scoreDisplay = Crafty.e("2D, DOM, text").attr({
                w: 100,
                h: 20,
                x: 6,
                y: 400,
                z: 400
            }).text("SKULLS: " + "0").css({
                "text-align": "left"
            });


            var secs = 100;
            var timeDisplay = Crafty.e("2D, DOM, text").attr({
                w: 100,
                h: 20,
                x: 530,
                y: 10,
                z: 20
            }).text("TIME: " + secs).css({
                "text-align": "left"
            });
            //var timeDisplay = Crafty.e("2D, DOM, text").attr({w: 100, h: 20, x: 530, y: 10, z: 20}).text("TIME: "+secs).css({"text-align": "left"}).delay(updateTime,1000);
            //var readout = " ";
            //var keyReadout = Crafty.e("2D, DOM, text").attr({w: 200, h:200, x: 530, y: 30, z: 20}).text("READOUT: ").css({"text-align": "left"});

            function updateTime() {
                if (secs == 0) {
                    $("#pausebutton").hide();
                    $("#quitbutton").hide();
                    Crafty.scene("gameoverscreen");
                } else {
                    secs = secs - 1;
                    timeDisplay.text("TIME: " + secs);
                    timeDisplay.delay(updateTime, 1000);
                }
            }




            var alertmessage = Crafty.e("2D, DOM, image").attr({
                w: 920,
                h: 486,
                y: 0,
                x: 0,
                z: 400
            }).image("images/alertmessage2.png");

            var playershadow = Crafty.e("2D, DOM, image").attr({
                y: 360,
                x: -40,
                z: 50
            }).image("images/shadow.png");

            var badguyshadow = Crafty.e("2D, DOM, image").attr({
                y: 360,
                x: -40,
                z: 50
            }).image("images/shadow.png");

            ////////////---------------------------SCULL
            var scullshadow;
            var scull;
            var sculldrop = 0;
            var scullfall = 0;

            function dropScull() {
                if (scullfall == 0) {
                    scullfall = 1;
                    var newX = Crafty.randRange(80, 400);
                    scullshadow = Crafty.e("2D, DOM, image").attr({
                        y: 370,
                        x: newX,
                        _z: 328
                    }).image("images/scullshadow.png");
                    gameback2.attach(scullshadow);
                    scull = Crafty.e("2D, DOM, image, Gravity").gravity("floor", 0.6).attr({
                        x: newX,
                        y: -60,
                        _z: 330,
                        _gravity: 1
                    }).image("images/scull.png");
                    gameback2.attach(scull);
                    scullshadow.x = (scull.x - 2);
                    sculldrop = 0;
                }
            }
            dropScull();

            function scullPickup(posX, posY) {
                    function resetScull() {
                        if (scullanimation) {
                            scullfall = 0;
                            spawnBadGuy();
                            scullanimation.destroy();
                        }

                    }
                    scoreX = scoreX + 1;
                    scoreDisplay.text("SKULLS: " + scoreX);
                    scullshadow.destroy();
                    scull.destroy();
                    var scullanimation = Crafty.e("2D, DOM, image, Tween").attr({
                        alpha: 1.0,
                        x: posX,
                        y: posY,
                        _z: 330
                    }).image("images/scull.png").delay(resetScull, 800);
                    scullanimation.tween({
                        alpha: 0.0,
                        y: -50
                    }, 40);

                }
                ////////////---------------------------PLAYER *****************
                ////////////---------------------------PLAYER *****************
                ////////////---------------------------PLAYER *****************
                ////////////---------------------------PLAYER *****************

            player = Crafty.e("2D, Canvas, player, Animate, Twoway, Gravity, Collision")
                .animate("stand", 0, 0, 2)
                .animate("duck", 0, 4, 0)
                .animate("walk_right", 0, 1, 4)
                .animate("walk_stepr", 2, 1, 4)
                .animate("walk_left", 0, 1, 4)
                .animate("walk_stepl", 2, 1, 4)
                .animate("jump", 3, 0, 3)
                .animate("highpunch", 1, 3, 3)
                .animate("punch", 2, 2, 4)
                .animate("lowpunch", 1, 4, 3)
                .animate("blockx", 4, 0, 4)
                .gravity("floor", 0.6)
                .animate("hit", 0, 5, 2)
                .animate("die", 3, 0, 3)
                .attr({
                    x: 0,
                    y: -300,
                    z: 320,
                    _gravity: 0.6
                }).collision()
                .onHit("wall_left", function() {
                    //wall left
                    this.shift(8, 0, 0, 0);
                }).onHit("floordect", function() {


                    //Hit floor
                    if (actionStatus == "jump" && !this.isPlaying("duck")) {
                        if (this.isDown("RIGHT_ARROW") && !this.isDown("LEFT_ARROW")) {
                            actionStatus = "walkright";
                        } else if (this.isDown("LEFT_ARROW") && !this.isDown("RIGHT_ARROW")) {
                            actionStatus = "walkleft";
                        } else if (this.isDown("Z")) {
                            actionStatus = "blockx";
                        } else if (this.isDown("DOWN_ARROW")) {
                            actionStatus = "duck";
                        } else {
                            actionStatus = "";
                        }
                        this.animate("stand", 20);
                    }
                }).onHit("wall_right", function() {
                    //wall right
                    this.shift(-8, 0, 0, 0);
                }).bind("keydown", function(e) {
                    //Key Down
                    updateKeyDisplay(this);
                }).bind("keyup", function(e) {
                    //Key Released
                    updateKeyDisplay(this);
                }).bind('enterframe', function() {
                    ////////////---------------------------LOOP
                    // set background
                    if (actionStatus == "hit" && !player.isPlaying("die") && !player.isPlaying("hit")) {
                        rumbleScreen("start");
                        player.animate("hit", 12);
                        player.delay(function() {
                            //player.animate("stand", 2);
                            rumbleScreen("stop");
                            actionStatus = "";
                        }, 300);
                    } else if (actionStatus == "walkright" && !player.isDown("UP_ARROW") && actionStatus != "jump" && !player.isPlaying("walk_right") && !player.isPlaying("walk_stepr")) {
                        // Animate walk
                        player.animate("walk_right", 28);
                    } else if (actionStatus == "walkleft" && !player.isDown("UP_ARROW") && actionStatus != "jump" && !player.isPlaying("walk_left") && !player.isPlaying("walk_stepl")) {
                        // Animate walk
                        player.animate("walk_left", 28);
                    } else if (!player.isDown("X") && actionStatus == "duck" && !player.isPlaying("lowpunch") && !player.isPlaying("walk_stepl") && !player.isPlaying("walk_stepr")) {
                        player.animate("duck", 1);
                        //scull
                        if (scull.y > 340 && (scull.x) > (player.x) && (scull.x) < (player.x + 170) && sculldrop == 0) {
                            sculldrop = 1;
                            Crafty.audio.play("beep");
                            //play_sound("beep");
                            scullPickup(scull.x, scull.y);
                        }
                    } else if (actionStatus == "blockx" && !player.isPlaying("walk_stepl") && !player.isPlaying("walk_stepr")) {
                        player.animate("blockx", 1);
                    } else if (actionStatus == "" && !player.isPlaying("stand") && !player.isPlaying("punch") && !player.isPlaying("lowpunch") && !badguy.isPlaying("hit")) {
                        player.animate("stand", 20);
                    }




                    gameback2.x = (-20 - (this.x / 4));
                    gameback1.x = (-20 - (this.x / 8));
                    if (actionStatus == "jump") {
                        gameback1.y = ((this.y + 34) / 16) - 20;
                        gameback2.y = ((this.y + 30) / 10) - 20;
                    }
                    playershadow.x = (this.x - 30);
                    playershadow.y = (gameback2.y + 368);

                    //FIX STAND
                    if (!player.isDown("RIGHT_ARROW") && !player.isDown("Z") && !player.isDown("LEFT_ARROW") && !player.isDown("DOWN_ARROW") && actionStatus != "hit" && actionStatus != "jump" && !player.isPlaying("punch") && !player.isPlaying("lowpunch") && !player.isPlaying("walk_stepr") && !player.isPlaying("walk_stepl")) {
                        actionStatus = "";
                        if (!player.isDown("X")) {
                            xDown = 0;
                        }
                    }

                    if (actionStatus != "") {
                        if (this.isDown("RIGHT_ARROW") && actionStatus != "hit" && !player.isPlaying("hit") && actionStatus != "blockx" && !player.isPlaying("punch") && !this.isDown("X") || this.isDown("RIGHT_ARROW") && actionStatus == "jump" && this.isDown("X")) {
                            this.x += 8;
                        }
                        if (this.isDown("LEFT_ARROW") && actionStatus != "hit" && !player.isPlaying("hit") && actionStatus != "blockx" && !player.isPlaying("punch") && !this.isDown("X") || this.isDown("LEFT_ARROW") && actionStatus == "jump" && this.isDown("X")) {
                            this.x -= 8;
                        }
                        if (actionStatus == "jump") {
                            this.y -= 14;
                            this._falling = true;
                        }
                    }

                    ////////////---------------------------
                });


            var xDown = 0;
            ////////////---------------------------KEY ACTION
            function updateKeyDisplay(t) {
                    if (alertmessage.alpha > 0) {
                        updateTime();
                        alertmessage.alpha = 0;
                    }

                    //READ OUT
                    /*
				keyReadout.text("&uarr;"+t.isDown("UP_ARROW")
				+"<br />&larr; "+t.isDown("LEFT_ARROW")
				+"<br />&rarr; "+t.isDown("RIGHT_ARROW")
				+"<br />&darr; "+t.isDown("DOWN_ARROW")
				+"<br />Z "+t.isDown("Z")
				+"<br />X "+t.isDown("X")
				+"<br />SPEED "+t._speed
				);
				*/

                    ////////////---------------------------MOVE ANIMATION
                    //Duck
                    if (actionStatus == "hit") {

                    } else if (t.isDown("DOWN_ARROW") && !player.isDown("X") && !player.isPlaying("lowpunch") && actionStatus != "jump" && !t.isDown("UP_ARROW") && !t.isDown("LEFT_ARROW") && !t.isDown("RIGHT_ARROW")) {
                        actionStatus = "duck";
                    } else if (t.isDown("UP_ARROW") && actionStatus != "jump" && actionStatus != "highpunch" && !player.isPlaying("punch") && !player.isPlaying("lowpunch")) {
                        //Jump
                        actionStatus = "jump";
                        player._up = true;
                        player.animate("jump", 1);
                        player.y = player.y - 10;
                    } else if (t.isDown("LEFT_ARROW") && t.isDown("RIGHT_ARROW")) {
                        //Right and Left
                        if (actionStatus != "jump") {
                            actionStatus = "";
                        }
                    } else if (t.isDown("RIGHT_ARROW") && !t.isDown("X") && !player.isPlaying("walk_stepr") && actionStatus != "jump" && !player.isPlaying("punch")) {
                        //Right
                        if (actionStatus == "" || actionStatus == "duck")
                            player.animate("walk_stepr", 12);
                        actionStatus = "walkright";

                    } else if (t.isDown("LEFT_ARROW") && !t.isDown("X") && !player.isPlaying("walk_stepl") && actionStatus != "jump" && !player.isPlaying("punch")) {
                        //Left
                        if (actionStatus == "" || actionStatus == "duck")
                            player.animate("walk_stepl", 1);
                        actionStatus = "walkleft";
                    } else if (actionStatus == "walkright" && t.isDown("X")) {
                        actionStatus = "";
                    } else if (actionStatus == "walkleft" && t.isDown("X")) {
                        actionStatus = "";
                    }

                    if (!player.isDown("X") && actionStatus != "jump" && !player.isPlaying("punch") && !player.isPlaying("lowpunch")) {
                        xDown = 0;
                    }

                    ////////////---------------------------ATTACK
                    if (actionStatus != "hit") {
                        var punchrange = 140;
                        if (xDown != 1 && t.isDown("X") && actionStatus == "jump") {
                            //jump punch
                            xDown = 1;
                            t.z = 200;
                            badguy.z = 100;
                            //actionStatus = "highpunch";
                            player.animate("highpunch", 9);
                            if ((badguy.x - t.x) < punchrange && !badguy.isPlaying("die") && !badguy.isPlaying("hit") && badguy.y < 5000 && badstatus != "die") {
                                player2hit("high");
                            }
                            Crafty.audio.play("swing1");
                            //play_sound("swing1");
                        }
                        if (xDown != 1 && !t.isDown("Z") && t.isDown("X") && actionStatus != "jump" && !t.isDown("DOWN_ARROW") && !t.isDown("UP_ARROW") && !player.isPlaying("punch")) {
                            //normal punch
                            xDown = 1;
                            t.z = 200;
                            badguy.z = 100;
                            //actionStatus = "punch";
                            Crafty.audio.play("swing2");
                            //play_sound("swing2");
                            player.animate("punch", 9);
                            if ((badguy.x - t.x) < punchrange && !badguy.isPlaying("die") && !badguy.isPlaying("hit") && badguy.y < 5000 && badstatus != "die") {
                                player2hit("middle");
                            }

                        }
                        if (xDown != 1 && !t.isDown("Z") && t.isDown("X") && actionStatus != "jump" && t.isDown("DOWN_ARROW") && !t.isDown("UP_ARROW") && !player.isPlaying("lowpunch")) {
                            //low punch
                            xDown = 1;
                            t.z = 200;
                            badguy.z = 100;
                            //actionStatus = "lowpunch";
                            player.animate("lowpunch", 10);
                            if ((badguy.x - t.x) < punchrange && !badguy.isPlaying("die") && !badguy.isPlaying("hit") && badguy.y < 5000 && badstatus != "die") {
                                player2hit("low");
                            }
                            Crafty.audio.play("swing1");
                            //play_sound("swing1");
                        } else if (t.isDown("Z") && actionStatus != "jump" && !player.isPlaying("punch") && !player.isPlaying("lowpunch")) {
                            //normal block
                            actionStatus = "blockx";
                            player.animate("blockx", 1);
                        }
                    }



                }
                ////////////---------------------------BAD GUY *****************
            var badstatus = "";
            var badactive = false;
            var badguy;
            var weakspot;
            //var badguyChoices=new Array("moveAt","moveAway","attack","block");
            var currentChoice;
            var playerDist;
            badguy = Crafty.e("2D, Canvas, badguy, Animate").attr({
                    x: 600,
                    y: 8000,
                    z: 300
                })
                .animate("stand", 0, 0, 2)
                .animate("hit", 0, 1, 2)
                .animate("appear", 0, 2, 2)
                .animate("die", 0, 3, 3)
                .animate("walk", 0, 5, 3)
                .animate("punch", 0, 4, 2)
                .bind('enterframe', function() {
                    //Badguy A.I.
                    //currentChoice = Crafty.randRange(0,3);
                    playerDist = badguy.x - player.x;


                    if (badactive == false) {
                        if (!badguy.isPlaying("die")) {
                            dropScull();
                            badguy.y = 8000;
                        }
                    }

                    badguyshadow.x = (badguy.x + 144);
                    badguyshadow.y = (badguy.y + 334);

                    if (badactive == true && badguy.y < 5000 && !badguy.isPlaying("die")) {
                        var minDist = 140;

                        if (playerDist > minDist && badstatus == "" && badstatus != "die" || playerDist > minDist && badstatus == "walkl" && badstatus != "die") {
                            badstatus = "walkl";
                        } else if (playerDist < 100 && badstatus == "" || playerDist < 100 && badstatus == "walkr") {
                            badstatus = "walkr";
                        } else if (badstatus == "walkr" || badstatus == "walkl") {
                            badstatus = "";
                        }
                        if (badstatus == "punch" && !badguy.isPlaying("punch") && badstatus != "die") {
                            badstatus = "";
                        }

                        if (badstatus == "hit" && !badguy.isPlaying("die") && !badguy.isPlaying("hit" && badstatus != "die")) {
                            rumbleScreen("start");
                            badguy.animate("hit", 8);
                            badguy.delay(function() {
                                rumbleScreen("stop");
                                if (badstatus != "die") {
                                    badguy.animate("stand", 2);
                                    badstatus = "";
                                }
                            }, 400);

                        } else if (badstatus == "appear" && !badguy.isPlaying("appear") && badstatus != "die") {
                            badstatus = "";
                        } else if (badstatus == "walkl" && !badguy.isPlaying("stand") && !badguy.isPlaying("hit") && !badguy.isPlaying("appear") && badstatus != "die") {
                            badguy.animate("walk", 12);
                            badguy.x = badguy.x - 6;
                        } else if (badstatus == "walkr" && !badguy.isPlaying("stand") && !badguy.isPlaying("hit") && !badguy.isPlaying("appear") && badstatus != "die") {
                            badguy.animate("walk", 12);
                            badguy.x = badguy.x + 6;
                        } else if (badstatus == "" && !badguy.isPlaying("stand") && !badguy.isPlaying("hit") && !badguy.isPlaying("appear") && badstatus != "die") {
                            //within distance choices, stand or fight
                            currentChoice = Crafty.randRange(0, 1);
                            if (currentChoice == 1 && !player.isPlaying("hit") && badstatus != "die") {
                                badstatus = "punch";
                                badguy.animate("punch", 8);
                                Crafty.audio.play("swing2");
                                //play_sound("swing2");
                                player.z = 100;
                                badguy.z = 200;
                                //Check if hit
                                if (playerDist < 160 && actionStatus != "blockx") {
                                    player1hit();
                                }
                            } else {
                                player.z = 200;
                                badguy.z = 100;
                                badguy.animate("stand", 20);
                            }

                        }

                    }
                    //readoutDisplay.text("READOUT: "+badactive+"/"+badstatus);

                });

            gameback2.attach(badguy);


            /////SPAWN BADGUY
            function spawnBadGuy() {
                badactive = true;
                health2 = starthealth2;
                player2health.text("MONSTER LIFE: " + health2);
                badstatus = "appear";
                badguy.animate("appear", 6);
                badguy.x = Crafty.randRange(480, 600);
                badguy.y = 20;

                weakspot = Crafty.randRange(0, 2);

            }

            function player2hit(typeX) {

                Crafty.audio.play("hit1");
                //play_sound("hit1");
                if (typeX == "high") {
                    health2 = health2 - Crafty.randRange(10, 30);
                } else if (typeX == "middle") {
                    health2 = health2 - Crafty.randRange(2, 10);
                } else if (typeX == "low") {
                    health2 = health2 - Crafty.randRange(8, 20);
                }
                if (health2 < 1) {
                    Crafty.audio.play("monster");
                    //play_sound("monster");
                    health2 = 0;
                    badguy.animate("die", 70);
                    badactive = false;
                    badstatus = "die";
                    //rumbleScreen("start");
                    //badguy.delay(function() {
                    //rumbleScreen("stop");
                    badactive = false;
                    //}, 1000);

                } else {
                    badstatus = "hit";
                }
                player2health.text("MONSTER LIFE: " + health2);
            }

            function player1hit() {
                    Crafty.audio.play("hit2");
                    //play_sound("hit2");
                    health1 = health1 - Crafty.randRange(2, 10);
                    if (health1 < 1) {
                        health1 = 0;
                    }
                    player1health.text("HELLBOY LIFE: " + health1);
                    if (health1 < 1 && !player.isPlaying("die")) {
                        player.animate("die", 36);
                        actionStatus = "die";
                        Crafty.scene("gameoverscreen");

                    } else {
                        actionStatus = "hit";
                    }
                }
                ////////////---------------------------BAD GUY END *****************
                ////////////---------------------------BAD GUY END *****************
                ////////////---------------------------BAD GUY END *****************

            var floor = Crafty.e("2D, Canvas, floor").attr({
                y: 420,
                w: 1200,
                h: 50
            });
            var floordect = Crafty.e("2D, Canvas, floordect").attr({
                y: 418,
                w: 936,
                h: 50
            });
            var wall_right = Crafty.e("2D, Canvas, wall_right").attr({
                x: 1010,
                w: 10,
                h: 433
            });
            var wall_left = Crafty.e("2D, Canvas, wall_left").attr({
                x: -50,
                w: 10,
                h: 433
            });

            gameback2.attach(floor);

            // Game Buttons
            $("#pausebutton").fadeIn("fast");
            $("#quitbutton").fadeIn("fast");
            if (setbuttonsOnce3 == false) {
                setbuttonsOnce3 = true;
                $('#pausebutton').click(function() {

                });

                $('#quitbutton').click(function() {
                    rumbleScreen("stop");
                    $("#pausebutton").hide();
                    $("#quitbutton").hide();
                    $("#playagainbutton").hide();
                    //player.destroy();
                    Crafty.scene("startscreen");
                });
            }

        });

        ////////////-----------------------------------------------START SCENE
        Crafty.scene("startscreen", function() {

            play_music("audio_1");
            stop_music("audio_2");
            stop_music("audio_3");

            var startback = Crafty.e("2D, DOM, Image").image("images/homescreen.jpg");
            var gamelogo = Crafty.e("2D, DOM, Image").image("images/gm.png").attr({
                y: 130,
                x: 150
            });
            $("#startbutton").fadeIn("slow");

            if (setbuttonsOnce1 == false) {
                setbuttonOnce1 = true;
                $('#startbutton').click(function() {
                    $('#startbutton').hide();
                    Crafty.scene("main");
                });
            }

        });

        ////////////-----------------------------------------------GAME OVER SCENE
        Crafty.scene("gameoverscreen", function() {
            stop_music("audio_1");
            stop_music("audio_2");
            play_music("audio_3");
            var overtback = Crafty.e("2D, DOM, Image").image("images/gameover.jpg");

            var scoreDisplay = Crafty.e("2D, DOM, text").attr({
                w: 100,
                h: 20,
                x: 660,
                y: 258,
                z: 400
            }).text("" + scoreX).css({
                "text-align": "left",
                "font-size": "26px"
            });
            //var startback= Crafty.e("2D, DOM, Image").image("images/homescreen.jpg");
            //var gamelogo= Crafty.e("2D, DOM, Image").image("images/fistofdoom.png").attr({y:130, x:150});
            //$("#startbutton").fadeIn("slow");
            //$('#gamearea').jrumble({
            //	rumbleEvent: 'constant',
            //	rumbleSpeed: 30
            //});
            //$('#startbutton').click(function() {
            //Crafty.scene("main");
            //$('#startbutton').hide();
            //$("#pausebutton").fadeIn("fast");
            //$("#quitbutton").fadeIn("fast");
            //});
            $("#playagainbutton").show();
            $("#quitbutton").show();
            if (setbuttonsOnce2 == false) {
                setbuttonsOnce2 = true;
                $('#playagainbutton').click(function() {
                    $("#playagainbutton").hide();
                    $("#quitbutton").hide();
                    //player.destroy();
                    Crafty.scene("main");
                });


            }

        });

        ////////////-----------------------------------------------LOADING SCENE
        Crafty.scene("loading", function() {
            // Load takes an array of assets and a callback when complete
            Crafty.load(["images/gameover.jpg", "images/scull.png", "images/scullshadow.png", "images/shadow.png", "images/frog.png", "images/character.png", "images/backgroundruins.jpg", "images/backgroundruins.png", "images/loading.png", "images/alertmessage2.png", "images/homescreen.jpg"],
                function() {
                    musicactive = 0;
                    //alert("loaded="+countx);
                    scalearea();
                    setTimeout(function() {
                        anilogo();
                    }, 100);
                    setTimeout(function() {
                        aniHTML5tag();
                    }, 700);
                    setTimeout(function() {
                        anicontrols();
                    }, 1800);
                    $("hr").fadeIn(600);
                    $("#leftcredits").delay(100).fadeIn(1000);
                    $("#rightcredits").delay(600).fadeIn(1000);
                    $("footer").delay(800).fadeIn(1200);
                    //Crafty.scene("startscreen"); //when everything is loaded, run the main scene
                },

                function(e) {
                    //progress
                    //document.getElementById('ent2').innerHTML = e.percent;
                },

                function(e) {
                    //uh oh, error loading
                }

            );

            // Loading
            Crafty.background("#000000");
            var loader = Crafty.e("2D, DOM, Image").image("images/loadingloop.gif").attr({
                w: 24,
                h: 24,
                x: 446,
                y: 200
            }).css({
                "text-align": "center"
            });
            //Crafty.e("2D, DOM, text").attr({w: 100, h: 20, x: 150, y: 120}).text("0").css({"text-align": "center"});

        });



        //Animations
        function scalearea() {
            $('#gamearea').show('scale', {
                percent: 100
            }, 500);
        }

        function anilogo() {
            $("#headercontent h1").animate({
                height: "117px",
                top: "10px",
                opacity: 1
            }, 400);
        }

        function anicontrols() {
            $("#controlarea").css("display", "block");
            $("#controlarea").animate({
                top: "447px"
            }, {
                duration: 1100,
                specialEasing: {
                    top: 'easeOutQuint'
                },
                complete: function() {

                }
            });
        }

        function aniHTML5tag() {
            $("#headercontent h3").animate({
                height: "25px",
                top: "0px"
            }, {
                duration: 600,
                specialEasing: {
                    height: 'easeOutQuint',
                    top: 'easeOutQuint'
                },
                complete: function() {
                    Crafty.scene("startscreen");
                }
            });
        }

        function aniCover() {
            $('#cover').fadeOut(1200, function() {

                $("article").css("display", "block");
                $("article").animate({
                    width: "960px",
                }, {
                    duration: 600,
                    specialEasing: {
                        height: 'easeOutQuint'
                    },
                    complete: function() {
                        $('#gameborder').fadeIn(500, function() {
                            Crafty.scene("loading");
                        });

                    }
                });
            });
        }
        setTimeout(function() {
            aniCover();
        }, 800);
    };

});