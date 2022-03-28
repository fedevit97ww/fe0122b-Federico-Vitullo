let tk = localStorage.getItem("token");

if (tk == "ok") {
  function creaTabella() {
    var select = document.querySelector("#tab");

    let listaUtenti = localStorage.getItem("utenti");
    let db = listaUtenti == null ? [] : JSON.parse(listaUtenti);

    db.forEach(function (element) {
      var riga = document.createElement("tr");
      riga.setAttribute("id", "riga");
      var cancella = document.createElement("button");
      var modifica = document.createElement("a");
      modifica.innerText = "Modifica";
      modifica.href = "../edit.html?id=" + element.id;
      cancella.classList.add("delete");
      modifica.classList.add("modifica");
      cancella.innerText = "Cancella";
      select.append(riga);
      //console.log(elemento)
      for (let prop in element) {
        if (prop != "id" && prop != "password") {
          var cella = document.createElement("td");
          cella.innerText = element[prop];
          riga.append(cella);
          riga.append(cancella);
          riga.append(modifica);
        }
      }
      cancella.setAttribute("id", element.id);
      let deleta = riga.querySelector(".delete");

      //cancella
      deleta.addEventListener("click", function () {
        riga.remove();
        let idB = this.id;
        let elementiSalvati = localStorage.getItem("utenti");
        let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
        let sel = db.findIndex((element) => element.id == idB);
        db.splice(sel, 1);
        localStorage.setItem("utenti", JSON.stringify(db));
      });
      //fine cancella

      //modifica
      modifica.setAttribute("id", "modifica" + element.id);
      let edit = riga.querySelector(".modifica");
      edit.addEventListener("click", function () {
        console.log(this.id);
      });
    });
  }
  creaTabella();
  document.querySelector("#logout").addEventListener("click", function () {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    window.location.href = "/login.html";
  });
} else {
  window.location.href = "/login.html";
}
/*let sel = db.findIndex(function(element){
    element.username == idB
})*/
