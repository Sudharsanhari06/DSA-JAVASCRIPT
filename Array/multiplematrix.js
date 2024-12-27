let a=[[1,2,3]
     ,[3,4,2]
     ,[5,6,1]];
let b=[[1,2,3,4]
      ,[3,4,5,4],
       [5,6,5,4],];
    let rowA=a.length;//3
    let colA=a[0].length;// 
    let rowB=b.length;
    let colB=b[0].length;
    if(colA==rowB){
        var result=Array.from({length:rowA},()=> Array(colB).fill(0));
        // console.log(result);
        var result=[]
        for(var s=0;s<rowA;s++){
            let d=[]
            for(var z=0;z<colB;z++){
                d.push(0)
            }
            result.push(d)
        }

        for(let i=0;i<rowA;i++){
           for(let j=0;j<colB;j++){
            for(let k=0;k<colA;k++){
                result[i][j]+=a[i][k]*b[k][j];
            }
           } 

        }
        console.log(result);
    }
   else{
    console.log("not");
    
   }

