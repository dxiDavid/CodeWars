

const count = (string) => {
    if (string.length === 0){
        return {}
    }
    else{
        let newString = string.split(" ").join("")
        const output = [...newString].reduce(
            (acc, cur) => {
                acc[cur] = (acc[cur] || 0) +1 // checks to see if the key exists and increments the value if it does
                return acc
            }, {});
        return output
    }
    
}
