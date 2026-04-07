

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

function recurfibs(Num_of_fibs){
    console.log("This was printed recursively");
    if (Num_of_fibs == 1)
        return 0;
    if(Num_of_fibs == 2)
        return 1;
    return recurfibs(Num_of_fibs- 1) +  recurfibs(Num_of_fibs -2);
}
 console.log(recurfibs(8));
