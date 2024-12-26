function fetchNextElement(array)
{
    let index =0;
    function next()
    {
        if(index == array.length)
            return undefined;
        const nextElement = array[index];
        index++;
        return nextElement;
       
    }
    return next;
    //generally iterators are objects so 
    //return {next} is good
}

let automaticFetcher = fetchNextElement([10,20,30,45,15,25,0,222]);
console.log(automaticFetcher());
console.log(automaticFetcher());
console.log(automaticFetcher());
console.log(automaticFetcher());