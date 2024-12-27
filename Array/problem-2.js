function uniq(a){
    let b=[];
    for(i=0;i<a.length;i++){
        let count=0;
        for(j=0;j<b.length;j++){
            if(a[i]==b[j]){
                count++;
            }
        }
        if(count==0){
            b.push(a[i])
        }
    }
    console.log(b);
}
uniq([5, 10, 3, 11, 18,16,18,5,10,11])







