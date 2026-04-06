
function fibs(Num_of_fibs){
    Num_of_fibs = 8;
    n1 = 0;
    n2 = 1;
    for(let i=0; Num_of_fibs>i; i++){
        
        print(n1 + " ");
        
         n3 = n1+n2;
         n1 = n2;
         n2 = n3;
    }

}