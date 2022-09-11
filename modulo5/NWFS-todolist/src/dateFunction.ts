export function dateFormatMySql(data: string) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  }

  export function dateFormatUser(data:string){
    var ano  = data.toString().split("-")[0];
    var mes  = data.toString().split("-")[1];
    var dia  = data.toString().split("-")[2];
  
    return ("0"+dia).slice(-2) + '/' + ("0"+mes).slice(-2) + '/' + ano;
  }