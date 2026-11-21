var LargestNumber=(arr)=>{ 
    let largest=0;
    for(i=0;i<arr.length;i++)
    if(arr[i]>largest){
        largest=arr[i];
    }
    console.log("largest " + largest)
}
LargestNumber([20,30,30,40,50]);
