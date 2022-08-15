function uniq(arr) {
    const result = []
    for(let i=0; i<arr.length; i++) {
        if(result.indexOf(arr[i]) < 0) {
            result.push(arr[i])
        }
    }
    return result
}

function uniq2(arr) {
    const obj = {}
    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]]) {
            continue
        }else{
            obj[arr[i]] = true
        }
    }
    return Object.keys(obj)
}

function uniq3(arr) {
    return [...new Set(arr)]
}

function uniq(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; i<arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1)
            }
        }
    }
}