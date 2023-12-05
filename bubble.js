const button2 = document.getElementById("btn2");           /////This is for bubble sort
const p2 = document.getElementById("result2");

const bubble=(arr,low,high)=>{
    for(let i=low;i<=high;i++)
    {
        for(let j=low;j<=high-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }return arr;

}
button2.addEventListener("click",()=>{
    let q = parseInt(prompt("Enter the size of array to sort : "));
    let arr = [];
    for (let i = 0; i < q; i++) {
        let b = parseInt(prompt("Enter values to store in array :"));
        arr.push(b);
    }

    p2.innerText = "Original Array: " + arr.join(", ");
    bubble(arr, 0, arr.length - 1);
    p2.innerText += "\nSorted Array: " + arr.join(", ");
})
function goback(){
    window.location.href='main.html'
}