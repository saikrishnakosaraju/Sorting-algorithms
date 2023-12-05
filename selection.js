const button2 = document.getElementById("btn3");           /////This is for selection sort
const p2 = document.getElementById("result3");

const selection=(arr,low,high)=>
        {
             for(let i=low;i<=high;i++){
                 for(let j=i;j<=high;j++){
                     if(arr[i]>arr[j]){
                         [arr[i],arr[j]]=[arr[j],arr[i]];  //swap----
                     }

                   }
            }return arr

        }
button2.addEventListener("click",()=>{
    let q = parseInt(prompt("Enter the size of array to sort : "));
    let arr = [];
    for (let i = 0; i < q; i++) {
        let b = parseInt(prompt("Enter values to store in array :"));
        arr.push(b);
    }

    p2.innerText = "Original Array: " + arr.join(", ");
    selection(arr, 0, arr.length - 1);
    p2.innerText += "\nSorted Array: " + arr.join(", ");
})
function goback(){
    window.location.href='main.html'
}