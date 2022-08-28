const selectSort = (arr) => {
    if(arr.length <= 1) { return arr }
    for(let i=0; i<arr.length - 1; i++) {
        let minIndex = i
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[i]) {
                minIndex = j
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr
}