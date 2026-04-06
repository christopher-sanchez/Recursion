
function fibs(Num_of_fibs){
     let n1 = 0;
     let n2 = 1;
     let n3 = 0;
    for(let i=1; Num_of_fibs>i; i++){
        console.log(n1 + " ");
         n3 = n1+n2;
          n1 = n2;
         n2 = n3;
    }
    return n1;

    
}
 console.log(fibs(8));
