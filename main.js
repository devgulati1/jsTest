let input=document.querySelector("input");
let enter=document.querySelector("button");


const call=()=>{
let tableShow=document.querySelector("table");
console.log(tableShow);
for(let i=1;i<=input.value;i++){
    
    

var row=tableShow.insertRow(i);

var  sno=row.insertCell(0);

var  fibonaciiNo=row.insertCell(1);
var  fibSeries=row.insertCell(2);
var  primeNo=row.insertCell(3);
sno.innerHTML=i;
let arrStore=fib(i+1);
fibSeries.innerHTML=arrStore
let lastArrNo=arrStore[arrStore.length-1];
fibonaciiNo.innerHTML=lastArrNo;

 let primenoArr=primeCheck(lastArrNo);
console.log(primenoArr)

primeNo.innerHTML=primenoArr



}
}


const fib=(n)=>{
    const fibArr=[1,1];
    for(let i=2;i<n;i++){
        fibArr.push(fibArr[i-2]+fibArr[i-1]);
    }
   
    return fibArr;
}

const primeCheck=(n)=>{
    
    
    let arrOfPrimeNo=[];
    for(let i=2;i<=n;i++){
        let status="true";
        for(let j=2;j<i-1;j++){
            if(i%j===0){
                status="false";
                break;
            }
        }
        if(status==="true"){
            arrOfPrimeNo.push(i);
console.log(i);
        }
       
          

    }
    return arrOfPrimeNo
    console.log(arrOfPrimeNo)
   
    
}

enter.addEventListener("click",call)


