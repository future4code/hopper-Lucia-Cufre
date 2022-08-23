enum Epoca {
  PREHISOTRIA = "Pré-historia",
  ANTIGA = "Idade Antiga",
  MEDIA = "Idade Media",
  MODERNA = "Idade Moderna",
  CONTEMPO = "Idade Contemporanea",
}

function idadeHitorica(ano: number, sigla: string) {
  if (ano > 4000 && sigla === "AC") {
    return Epoca.PREHISOTRIA;
  } else if ((ano <= 475 && sigla === "DC") || sigla === "") {
    return Epoca.ANTIGA;
  } else if ((ano >= 476 && ano < 1453 && sigla === "DC") || sigla === "") {
    return Epoca.MEDIA;
  } else if ((ano >= 1453 && ano < 1789 && sigla === "DC") || sigla === "") {
    return Epoca.MODERNA;
  } else if ((ano >= 1789 && sigla === "DC") || sigla === "") {
    return Epoca.CONTEMPO;
  } else {
    return "ERROR";
  }
}

console.log(idadeHitorica(1995, "DC"));
