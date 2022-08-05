const param = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);


if (param, num1, num2){
    switch(param){
        case "add":
            console.log (num1 + num2)
        break;
        case "sub":
            console.log (num1 - num2)
        break;
        case "mult":
            console.log (num1 * num2)
        break;
        default:
            console.log (num1 / num2)
        break;}
}else{
    console.log("\u001b[31m Esperava 3 parâmetros. Tente novamente")
}