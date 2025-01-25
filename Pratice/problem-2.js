let teamscore=150;
let targetscore=145;
let oversleft=0;

if(teamscore>=targetscore){
    console.log( "Team wins by DL method" );
}
else if(teamscore<targetscore && oversleft>0){
    console.log("Match to be continued" );
}
else if(teamscore<targetscore && oversleft==0){
    console.log("Team loses by DL method");
}



