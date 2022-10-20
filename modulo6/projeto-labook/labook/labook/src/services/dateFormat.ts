export function dateFormatMySql(data: Date) {
    var dia  = data.toString().split("/")[0];
    var mes  = data.toString().split("/")[1];
    var ano  = data.toString().split("/")[2];

    return (ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2));
  }