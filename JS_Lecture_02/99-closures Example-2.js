function hello(x){
    const a = "VarA";
    const b = "VarB";
    return function(){
        console.log(a,b,x);
    }
}
const ans = hello("arg");
ans();