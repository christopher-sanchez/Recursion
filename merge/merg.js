function merge(array, left, middle,right){
    let length1 = middle - left +1;
    let length2 = right - middle;
    let array1 = new Array(length1);
    let array2 = new Array(length2);

    for (let i =0; i < length1; ++i){
        array1[i] = array[left + i];
    }
    for(let i = 0; i<length2; ++i){
        array2[i] = array[middle + 1 + i];
    }

    let a =0;
    let  b = 0;
    let  c = left;

    while(a<length1 &&  b < length2){
        if(array1[a] < array2[b]){
            array[c] = array1[a];
            ++a;
        } else{
            array [c] = array2[b];
            b++;
        }
        c++;
    }
    while (a< length1){
        array[c] = array1[a];
        a++;
        c++;
    }
    while(b< length2){
        array[c] = array2[b];
        b++;
        c++;
    }
}


function mergeSort(array,left,right){
    if(left>= right){
        return;
    }

    let middle = left + parseInt((right - left)/2);

    mergeSort(array,left,middle);
    mergeSort(array,middle+1,right);
    merge(array,left,middle,right);
}

const array = [3, 2, 1, 13, 8, 5, 0, 1]

console.log(array)
mergeSort(array,0, array.length -1);
console.log(array)
