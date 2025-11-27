let createRangeArray = (start, end,componentTypeLength, step = 1) => {
    let initialPower=0;
    if(start<0) initialPower=Math.abs(Math.floor(start/componentTypeLength));
        console.log(initialPower)

    const length = Math.floor((end - start) / step) + 1;
    if(start<0) initialPower=Math.abs(Math.floor(start/componentTypeLength));
    return Array.from({ length: length }, (_, index) => componentTypeLength*initialPower+start + index * step);
};
export default createRangeArray