var user = prompt("You enter a dungeon and come to a fork in the pathway. Do you go LEFT, RIGHT, or STRAIGHT?").toLowerCase();
var i = true;

while(i){
    switch(user){
        case "left":
            console.log("You chose left");
            var wakeUpGnome = prompt("As you walk down the dungeon hallway, you come across what looks like a sleeping gnome. Do you wake it? YES or NO?").toLowerCase();
            var killGnome = prompt("Do you want to try and kill the gnome? YES or NO?").toLowerCase();
            if(wakeUpGnome === "yes" && killGnome === "no"){
                console.log("Why would you wake up a sleeping gnome in a dungeon without a plan? Did you think you two were going to be friends? He is very irritated with you and takes all your possessions at knife-point. After taking all your money, food, clothes, etc. he ties you up and leaves you for dead. This was a bad choice.");
            } else if (wakeUpGnome === "no" && killGnome === "yes"){
                console.log("Wow, that's a little cold, but probably not the worst idea you could have. You were able to kill the gnome in its sleep (the poor guy didn't stand a chance) and discovered that he was sleeping on a trapdoor that leads to a room full of treasure. It's a good day for you!");
            } else if (wakeUpGnome === "yes" && killGnome === "yes"){
                var userWeapon = prompt("Whoa, you're a brave one! The gnome is armed with a knife. What weapon do you have? SWORD or KNIFE or DAGGER or AXE or NOTHING").toLowerCase();
                if(userWeapon === "sword" || "knife" || "dagger" || "axe"){
                    console.log("It's a good thing you're armed! You make quick work of the gnome. It's lucky that gnomes are small and fairly poor fighters. You notice that this gnome was actually sleeping on a trapdoor that leads to a room full of treasure. It's a good day for you!");
                } else {
                    console.log("Well, it doesn't seem like you will stand much of a chance. The gnome takes all your possessions at knife-point. After taking all your money, food, clothes, etc. he ties you up and leaves you for dead. You probably should have come into the dungeon with at least some kind of a useful weapon.");
                }
            } else if(wakeUpGnome === "no" && killGnome === "no") {
                console.log("Not a bad plan at all. It's probably a good idea to leave well enough alone in a dungeon hallway. You walk quietly past the gnome and continue down the hallway. Turns out, its a dead end. As you turn around to make your way back, you realize that the gnome has followed you and he quickly stabs you in the gut. It looks like this is the end of your adventure.");
            } else {
                console.log("Your answers are not one of the options and while we have been arguing about it, the gnome wakes up and slits our throats for disturbing his sleep. Just answer the questions next time.");
            }
            i = false;
            break;
        case "right":
            console.log("You chose right");
            console.log("You spend about an hour wandering down this hallway only to find that it dead ends into a large room. In the center of the room is a small wadded up piece of paper. On the paper is a note: 'This way is a dead end. Go back to the fork and pick a different path.'");
            var goBack = prompt("Do you follow the note and go back? YES or NO?").toLowerCase();
            if(goBack === "yes"){
                console.log("You finally make it back to the fork in the pathway. It's lucky that you didn't get lost or die...");
                user = prompt("Which way will you go? LEFT or STRAIGHT?").toLowerCase();
                i = true;
            } else if (goBack === "no"){
                console.log("Well, if you plan to just sit here then I guess this is where your story ends. You die of dehydration.");
                i = false;
            } else {
                console.log("That response doesn't make sense. Your tongue is obviously swelling and you're as good as dead. Goodbye.");
            }
            break;
        case "straight":
            console.log("You chose straight");
            console.log("As you proceed straight ahead, you start to hear some faint noises. You notice a room ahead with quite a bit of noise coming from it. Suddenly, you feel someone grab you from behind and carry you into the room. Looks like there is a goblin feast underway and they have decided to add you to the menu. So long friend, you are dead.");
            i = false;
            break;
        case "back" || "go back" || "backward":
            console.log("You chose to go back. You are a coward. Your story is lame and this is the end.");
            i = false;
            break;
        default:
            console.log("I don't understand your response. We can sit here and argue about it, but you're likely to be eaten by something because this is a dungeon. You should try to make a decision."); 
            user = prompt("Do we go LEFT, RIGHT, or STRAIGHT?").toLowerCase();
            break;
    }
}
