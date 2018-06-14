$(document).ready(function(){

            var player = "";

            var luke = {
                name: "Luke",
                HP: "150",
                status: "standby",
                attack: 5
            }

            var obiwan = {
                name: "Obiwan",
                HP: "150",
                status: "standby",
                attack: 5
            }

            var vader = {
                name: "Darth Vader",
                HP: "160",
                status: "standby",
                attack: 15
            }

            var palpatine = {
                name: "Palpatine",
                HP: "190",
                status: "standby",
                attack: 35
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


            $("#luke").on("click", function(){

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
            
                } else if (luke.status == "enemy"){

                    $(".yourCharacter").append($("#attack"));
                    $(".yourCharacter").append(lukeV);
                    $(lukeV).addClass("target offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").addClass("col-md-2; col-sm-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").attr("style","padding-left:5%; padding-top:8%");
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
            $("#obiwan").on("click", function(){
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


                    $(palpatineI).attr("style", "width:138%; margin-left:0%; display: inline");
                    $(palpatineV).attr("col-md-4 col-sm-4 col-xs-4");
                    palpatine.status = "enemy";
                    $(".enemies").append(palpatineV);
                    
                    $(".enemies").attr("style", "clear:both")
                    obiwan.status = "player";
                } else if (obiwan.status == "enemy"){

                    $(".yourCharacter").append($("#attack"));
                    $(".yourCharacter").append(obiwanV);
                    $(obiwanV).addClass("target offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").addClass("col-md-2; col-sm-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").attr("style","padding-left:5%; padding-top:8%");
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

            $("#vader").on("click", function(){
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


                    $(palpatineI).attr("style", "width:138%; margin-left:0%; display: inline");
                    $(palpatineV).attr("col-md-4 col-sm-4 col-xs-4");
                    palpatine.status = "enemy";
                    $(".enemies").append(palpatineV);
                    
                    $(".enemies").attr("style", "clear:both")
                    vader.status = "player";
                } else if (vader.status == "enemy"){
               
                    $(".yourCharacter").append($("#attack"));
                    $(".yourCharacter").append(vaderV);

                    $(vaderV).addClass("target offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").addClass("col-md-2; col-sm-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").attr("style","padding-left:5%; padding-top:8%");
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

            $("#palpatine").on("click", function(){
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


                    $(vaderI).attr("style", "width:138%; margin-left:0%; display: inline");
                    $(vaderV).attr("col-md-4 col-sm-4 col-xs-4");
                    vader.status = "enemy";
                    $(".enemies").append(vaderV);
                    
                    $(".enemies").attr("style", "clear:both")
                    palpatine.status = "player";
                } else if (palpatine.status == "enemy"){
                    
                    $(".yourCharacter").append($("#attack"));
                    $(".yourCharacter").append(palpatineV);
                    $(palpatineV).addClass("target offset-md-1 offset-sm-1 offset-lg-1 ");
                    $("#attack").addClass("col-md-2; col-sm-2 col-lg-2");
                    $("#attack").attr("style","padding-left:5%; padding-top:8%");
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


            $("#obiwan").on("click", function(){
          
            });

            $("#vader").on("click", function(){
          
            });
            
            $("#palpatine").on("click", function(){
            
            });

            $("#attack").on("click", function(){
            
               if (enemy!=""){
                    $(".combatLog").attr("style", "color:white; padding-left: 0%; width: 100%; text-align: center");
                    player.HP -= enemy.attack;
                    $(".player").text(player.HP);
                    enemy.HP -= player.attack;
                    player.attack += 10;
                    $(".enemy").text(enemy.HP);
                    $(".combatLog").text(player.name + " has attacked " + enemy.name + " for " + player.attack + " damage! "  + enemy.name + " has attacked " + player.name + " for " + enemy.attack + " damage.")

                    if (enemy.HP <= 0){
                        $(".target").remove();
                        luke.status = "enemy";
                        obiwan.status = "enemy";
                        vader.status = "enemy";
                        palpatine.status = "enemy";

                        player.status = "player";
                        enemy.status = "dead";

                        $(".combatLog").attr("style", "color:red; width: 100%; text-align: center");
                        $(".combatLog").append("<br>");
                        $(".combatLog").append(enemy.name + " has been slain! You won! ");
                    

                        enemy = "";
                        enemiesDefeated ++;
                        

                        if (enemiesDefeated < 3){
                            $(".combatLog").append("Choose your next opponent and proceed.");
                        } else {
                            alert (player.name + " is the winner!");
                            $(".combatLog").append("You are the strongest warrior of the galaxy!");
                            $(".yourCharacter").append("<img style='width: 400px; padding-left: 0%' src='assets/images/win.png'/>");
                            $(".theButton").attr("style", "display:none");
                        }

                    } else if (player.HP <= 0){
                        alert ("you lose!");
                    }
              }
            });


      });