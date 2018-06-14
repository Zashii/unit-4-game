$(document).ready(function(){

            var player = "";

            // Characters
            var luke = {
                name: "Luke",
                HP: "150",
                status: "standby",
                attack: 5,
                counterAttack: 5
            }

            var obiwan = {
                name: "Obiwan",
                HP: "160",
                status: "standby",
                attack: 10,
                counterAttack: 10
            }

            var vader = {
                name: "Darth Vader",
                HP: "170",
                status: "standby",
                attack: 15,
                counterAttack: 15
            }

            var palpatine = {
                name: "Palpatine",
                HP: "190",
                status: "standby",
                attack: 20,
                counterAttack: 20
            }

            var player;
            var enemy;
            var enemiesDefeated = 0;
            
            var lukeV = $("#luke");
            var lukeI = $("#lukeI");

            var obiwanV = $("#obiwan");
            var obiwanI = $("#obiwanI");

            var vaderV = $("#vader");
            var vaderI = $("#vaderI");


            var palpatineV = $("#palpatine");
            var palpatineI = $("#palpatineI");

            $("#lukeHP").append(luke.HP);
            $("#obiwanHP").append(obiwan.HP);
            $("#vaderHP").append(vader.HP);
            $("#palpatineHP").append(palpatine.HP);


            //If you click on Luke
            $("#luke").on("click", function(){

                //Luke becomes the player character
                if (luke.status == "standby"){
                    $(lukeI).attr("style", "width:100%; float:none; margin-left:0%");
                    $(lukeV).addClass("col-md-4 col-sm-4 col-xs-4");
                    $("#lukeHP").addClass("player");
                    luke.status = "player";
                    player = luke;
                    $(".yourCharacter").append(lukeV);
                
                    $(obiwanI).attr("style", "width:100%; margin-left:0%; display: inline");
                    $(obiwanV).addClass("col-md-4 col-sm-4 col-xs-4");
                    obiwan.status = "enemy";
                    $(".enemies").append(obiwanV);


                    $(vaderI).attr("style", "width:100%; margin-left:0%; display: inline;");
                    $(vaderV).addClass("col-md-4 col-sm-4 col-xs-4");
                    vader.status = "enemy";
                    $(".enemies").append(vaderV);


                    $(palpatineI).attr("style", "width:100%; margin-left:0%; display: inline");
                    $(palpatineV).addClass("col-md-4 col-sm-4 col-xs-4");
                    palpatine.status = "enemy";
                    $(".enemies").append(palpatineV);
                    
                    $(".enemies").attr("style", "clear:both")
                    $(".instructions").html("Pick your enemy");

            
                } else if (luke.status == "enemy"){

                  //Luke becomes the targeted enemy  
                    $(".instructions").html("Defeat Luke Skywalker");
                    $(".yourCharacter").append($("#attack"));
                    $(".yourCharacter").append(lukeV);
                    $(lukeV).addClass("target offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").addClass("col-md-2; col-sm-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").attr("style","padding-left:4%; padding-top:8%");
                    luke.status = "defender";
                    enemy = luke;
                    $("#lukeHP").addClass("enemy");
               
                    if (obiwan.status == "enemy"){
                        obiwan.status = "standbyEnemy";
                    }
                    if (vader.status == "enemy"){
                        vader.status = "standbyEnemy";
                    }
                    if (palpatine.status == "enemy"){
                        palpatine.status = "standbyEnemy";
                    }
                }
            });

            //If you click on Obiwan
            $("#obiwan").on("click", function(){

                 //Obiwan becomes the player character
                 if (obiwan.status == "standby"){
                    $(obiwanI).attr("style", "width:100%; float:none; margin-left:0%");
                    $(obiwanV).addClass("col-md-4 col-sm-4 col-xs-4");
                    $("#obiwanHP").addClass("player");
                    obiwan.status = "player";
                    player = obiwan;
                    $(".yourCharacter").append(obiwanV);

                    $(lukeI).attr("style", "width:100%; margin-left:0%; display: inline");
                    $(lukeV).addClass("col-md-4 col-sm-4 col-xs-4");
                    luke.status = "enemy";
                    $(".enemies").append(lukeV);


                    $(vaderI).attr("style", "width:100%; margin-left:0%; display: inline;");
                    $(vaderV).addClass("col-md-4 col-sm-4 col-xs-4");
                    vader.status = "enemy";
                    $(".enemies").append(vaderV);


                    $(palpatineI).attr("style", "width:100%; margin-left:0%; display: inline");
                    $(palpatineV).addClass("col-md-4 col-sm-4 col-xs-4");
                    palpatine.status = "enemy";
                    $(".enemies").append(palpatineV);
                    
                    $(".enemies").attr("style", "clear:both")
                    $(".instructions").html("Pick your enemy");

                //Obiwan becomes the targeted enemy
                } else if (obiwan.status == "enemy"){
                    $(".instructions").html("Defeat Obi Wan Kenobi");
                    $(".yourCharacter").append($("#attack"));
                    $(".yourCharacter").append(obiwanV);
                    $(obiwanV).addClass("target offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").addClass("col-md-2; col-sm-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").attr("style","padding-left:4%; padding-top:8%");
                    $("#obiwanHP").addClass("enemy");
                    enemy = obiwan;
                    obiwan.status = "defender";
                    if (luke.status == "enemy"){
                        luke.status = "standbyEnemy";
                    }
                    if (vader.status == "enemy"){
                        vader.status = "standbyEnemy";
                    }
                    if (palpatine.status == "enemy"){
                        palpatine.status = "standbyEnemy";
                    }
                }


            });

            //If you click on Darth Vader
            $("#vader").on("click", function(){

                 //Darth Vader becomes the player character
                 if (vader.status == "standby"){
                    $(vaderI).attr("style", "width:100%; float:none; margin-left:0%");
                    $(vaderV).addClass("col-md-4 col-sm-4 col-xs-4");
                    $("#vaderHP").addClass("player");
                    vader.status = "player";
                    player = vader;
                    $(".yourCharacter").append(vaderV);
                
                    $(lukeI).attr("style", "width:100%; margin-left:0%; display: inline");
                    $(lukeV).addClass("col-md-4 col-sm-4 col-xs-4");
                    luke.status = "enemy";
                    $(".enemies").append(lukeV);


                    $(obiwanI).attr("style", "width:100%; margin-left:0%; display: inline;");
                    $(obiwanV).addClass("col-md-4 col-sm-4 col-xs-4");
                    obiwan.status = "enemy";
                    $(".enemies").append(obiwanV);


                    $(palpatineI).attr("style", "width:100%; margin-left:0%; display: inline");
                    $(palpatineV).addClass("col-md-4 col-sm-4 col-xs-4");
                    palpatine.status = "enemy";
                    $(".enemies").append(palpatineV);
                    
                    $(".enemies").attr("style", "clear:both")
                    $(".instructions").html("Pick your enemy");

                //Vader becomes the targeted enemy
                } else if (vader.status == "enemy"){
                    $(".instructions").html("Defeat Darth Vader");
                    $(".yourCharacter").append($("#attack"));
                    $(".yourCharacter").append(vaderV);

                    $(vaderV).addClass("target offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").addClass("col-md-2; col-sm-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").attr("style","padding-left:4%; padding-top:8%");
                    $("#vaderHP").addClass("enemy");
                    vader.status = "defender";
                    enemy = vader;
                    if (obiwan.status == "enemy"){
                        obiwan.status = "standbyEnemy";
                    }
                    if (palpatine.status == "enemy"){
                        palpatine.status = "standbyEnemy";
                    }
                    if (luke.status == "enemy"){
                        luke.status = "standbyEnemy";
                    }
                }


            });

            //If you click on Palpatine
            $("#palpatine").on("click", function(){

                 //Darth Vader becomes the player character
                 if (palpatine.status == "standby"){
                    $(palpatineI).attr("style", "width:100%; float:none; margin-left:0%");
                    $(palpatineV).addClass("col-md-4 col-sm-4 col-xs-4");
                    $("#palpatineHP").addClass("player");
                    palpatine.status = "player";
                    player = palpatine;
                    $(".yourCharacter").append(palpatineV);

                    $(lukeI).attr("style", "width:100%; margin-left:0%; display: inline");
                    $(lukeV).addClass("col-md-4 col-sm-4 col-xs-4");
                    luke.status = "enemy";
                    $(".enemies").append(lukeV);


                    $(obiwanI).attr("style", "width:100%; margin-left:0%; display: inline;");
                    $(obiwanV).addClass("col-md-4 col-sm-4 col-xs-4");
                    obiwan.status = "enemy";
                    $(".enemies").append(obiwanV);


                    $(vaderI).attr("style", "width:100%; margin-left:0%; display: inline");
                    $(vaderV).addClass("col-md-4 col-sm-4 col-xs-4");
                    vader.status = "enemy";
                    $(".enemies").append(vaderV);
                    
                    $(".enemies").attr("style", "clear:both");
                    $(".instructions").html("Pick your enemy");

                // Palpatine becomes the targeted enemy
                } else if (palpatine.status == "enemy"){

                    $(".instructions").html("Defeat Emperor Palpatine");
                    $(".yourCharacter").append($("#attack"));
                    $(".yourCharacter").append(palpatineV);
                    $(palpatineV).addClass("target offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").addClass("col-md-2; col-sm-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").attr("style","padding-left:4%; padding-top:8%");
                    $("#palpatineHP").addClass("enemy");
                    palpatine.status = "defender";
                    enemy = palpatine;
                    if (obiwan.status == "enemy"){
                        obiwan.status = "standbyEnemy";
                    }
                    if (vader.status == "enemy"){
                        vader.status = "standbyEnemy";
                    }
                    if (luke.status == "enemy"){
                        luke.status = "standbyEnemy";
                    }
                }


            });

            //Clicking the attack button
            $("#attack").on("click", function(){
            
               //If there is an active enemy, process combat
               if (enemy!=""){
                    $(".combatLog").attr("style", "color:white; padding-left: 0%; width: 100%; text-align: center");
                    player.HP -= enemy.counterAttack;
                    $(".player").text(player.HP);
                    enemy.HP -= player.attack;
                    player.attack += 10;
                    $(".enemy").text(enemy.HP);
                    $(".combatLog").text(player.name + " has attacked " + enemy.name + " for " + player.attack + " damage! "  + enemy.name + " has attacked " + player.name + " for " + enemy.attack + " damage.")

                    //If the enemy has no more HP left, you win
                    if (enemy.HP <= 0){
                        $(".target").remove();
                        $(".instructions").html("Victory! Pick your next enemy");
                        
                        luke.status = "enemy";
                        obiwan.status = "enemy";
                        vader.status = "enemy";
                        palpatine.status = "enemy";

                        player.status = "player";
                        enemy.status = "dead";

                        $(".combatLog").attr("style", "color:gold; width: 100%; text-align: center; margin-right: 40px");
                        $(".combatLog").append("<br>");
                        $(".combatLog").append(enemy.name + " has been slain! You won! ");
                    
                        enemy = "";
                        enemiesDefeated ++;
                    
                        //If there are still enemies remaining, continue the game
                        if (enemiesDefeated < 3){
                            $(".combatLog").append("Choose your next opponent and proceed.");
                        //Otherwise, the game is won!
                        } else {
                            $(".instructions").html("You win!");
                            $(".combatLog").append("You are the strongest warrior of the galaxy!");
                            $(".yourCharacter").append("<img style='width: 400px; padding-left: 0%' src='assets/images/win.png'/>");
                            $(".theButton").attr("style", "display:none");
                        }

                    //If the player runs out of hp, game over
                    } else if (player.HP <= 0){
                        $(".instructions").html("Game over!");
                        $(".enemies").remove();
                        $(".enemiesHeader").remove();
                        $(".yourCharacter").html("<img src='assets/images/lose.jpg'/>");
                        $(".combatLog").attr("style", "color:red; width: 100%; text-align: center; margin-right: 40px");
                        $(".combatLog").append("<br>");
                        $(".combatLog").append(player.name + " has been defeated. Game over.");
                    }
              }
            });


      });