document.addEventListener("DOMContentLoaded", ()=>{
    const description={
        "mail.png":"tom.deletang@gmail.com",
        "tel.png":"07 61 20 53 49",
        "maison.png":"8 rue Gambert",
    };
    const zone = document.getElementById("description-text")

    document.addEventListener("click", (e) =>{
        const nom =e.target.getAttribute("src");
        zone.textContent = description[nom] || "aucune description disponible";
    });
});