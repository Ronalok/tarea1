function cinco(p,n){
    n+=1;
    var sum=p;
    while(n--!=0){
        sum*=10;
    }
    sum+=p;
    sum=Math.pow(sum,2);
    p=0;
    while(sum>0){
        p+=sum%10;
        sum=parseInt(sum/=10);
    }
    return p;
}
console.log("ejercicio 5 p:5 and n:1 = " +cinco(5,1));