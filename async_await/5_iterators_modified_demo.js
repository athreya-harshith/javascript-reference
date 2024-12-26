function fetchNextElement(array)
{
    let index =0;
    function next()
    {
        if(index == array.length)
            return {value:undefined,done:true};
        const nextElement = array[index];
        index++;
        return {value:nextElement,done:false};
       
    }
    return next;
    //generally iterators are objects so 
    //return {next} is good
}

let automaticFetcher = fetchNextElement([10,20,30,222]);
console.log(automaticFetcher());
console.log(automaticFetcher());
console.log(automaticFetcher());
console.log(automaticFetcher()); 
console.log(automaticFetcher());