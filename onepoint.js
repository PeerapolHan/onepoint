function fx(x){
    return x**2+0.25; 
}
let i = 0;
let error = 1;
let x0 =0;
let xo = fx(x0);

while(error>=0.000001){
    var x = fx(xo);
    error = Math.abs((x-xo)/x)
    console.log('Iteration:',i++);
    console.log('x',i,'(old)=',xo.toFixed(6));
    console.log('x',i+1,'(new)=',x.toFixed(6));
    console.log('error=',error.toFixed(6));
    console.log('=================');
    xo = x;
    
}
console.log('root=',xo.toFixed(6));

