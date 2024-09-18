const arr = [true, false, false, true, false, true, true, true, false, false];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === true){
        arr[i] = 1;
    }
}