let timeDeff = (x)=> x; 
function main(x, rangeOfX = 1, rangeOfY = 1, fun = timeDeff){
    if(x>=0){
        let y = fun(x / rangeOfX) * rangeOfY;
        return y;
    } else {
        let y = fun(-x / rangeOfX) * rangeOfY;
        return -y;
    }
}

function timeFunc(x){
    if(x<=1 && x>=0){
        let y;
        y = x**0.50;
        return y;
    }
    if(x<0) return 0;
    if(x>1) return 1;
}

let cubeFunc = (x, xRange, yRange)=>{
    return main(x,xRange,yRange, timeFunc);
};

// console.log(cubeFunc(20,400,500));
export {cubeFunc}
export default main;