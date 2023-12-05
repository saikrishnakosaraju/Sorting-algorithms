const button1 = document.getElementById("btn4");
const p1 = document.getElementById("result4");

const mergesort=(arr,low,high)=>
{   
    if(low<high)
    {
        let mid=Math.floor((low+high)/2)
        mergesort(arr,low,mid);
        mergesort(arr,mid+1,high);
        merge(arr,low,mid,high);
    
    }
    else return arr;
}
const merge=(arr,low,mid,high)=>
{
    let temp=[]; 
    let left=low;
    let right=mid+1;
    while(left<=mid && right<=high)
    {
        if(arr[left]<arr[right])
        {
            temp.push(arr[left]);
            left++
        }
        else
        {  temp.push(arr[right]);
            right++
        }
    }
    while(left<=mid){
        temp.push(arr[left])
        left++;
    }
    while(right<=high){
        temp.push(arr[right])
        right++;
    }
    for(let i=low;i<=high;i++){
        arr[i]=temp[i-low]
    }
}
button1.addEventListener("click", () => {
    let s = parseInt(prompt("Enter the size of array to sort : "));
    let arr = [];
    for (let i = 0; i < s; i++) {
        let b = parseInt(prompt("Enter values to store in array :"));
        arr.push(b);
    }

    p1.innerText = "Original Array: " + arr.join(", ");
    mergesort(arr, 0, arr.length - 1);
    p1.innerText += "\nSorted Array: " + arr.join(", ");
});


function goback(){
    window.location.href='main.html'
}

