const button1 = document.getElementById("btn1");
const p1 = document.getElementById("result");

const quicksort = (arr, low, high) => {
    if (low < high) {
        let pi = partition(arr, low, high);
        quicksort(arr, low, pi - 1);
        quicksort(arr, pi + 1, high);
    }
};

const partition = (arr, low, high) => {
    let pivotelement = arr[high];
    let pivotpoit = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] < pivotelement) {
            let temp = arr[pivotpoit + 1];
            arr[pivotpoit + 1] = arr[i];
            arr[i] = temp;
            pivotpoit++;
        }
    }

    let temp2 = arr[high];
    arr[high] = arr[pivotpoit + 1];
    arr[pivotpoit + 1] = temp2;

    return pivotpoit + 1;
};

button1.addEventListener("click", () => {
    let s = parseInt(prompt("Enter the size of array to sort : "));
    let arr = [];
    for (let i = 0; i < s; i++) {
        let b = parseInt(prompt("Enter values to store in array :"));
        arr.push(b);
    }

    p1.innerText = "Original Array: " + arr.join(", ");
    quicksort(arr, 0, arr.length - 1);
    p1.innerText += "\nSorted Array: " + arr.join(", ");
});


function goback(){
    window.location.href='main.html'
}

