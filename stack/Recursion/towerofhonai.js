function towerofhonai(n,s,t,d){
    if(n==1){
        console.log("move from :"+s+"to"+d);
    }
    
    else{
        towerofhonai(n-1,s,d,t); //1
        console.log("move from "+s+"to"+d);
        towerofhonai(n-1,t,s,d);
   
    }
}
towerofhonai(2,1,2,3)




