const corpoTabela= document.getElementById("corpoTabela")
const formulario = document.getElementById("formulario")

const Dinossauros = [
    {nome:"T-Rex", Dieta:"Carnívoro" },
    {nome:"Tricerátops", Dieta:"Herbívoro"},
    {nome:"Velociraptor", Dieta:"Carnívoro"},
    {nome:"Estegossauro", Dieta:"Herbívoro"},
    {nome:"Oviraptor", Dieta:"Onívoro"},
]

function exibir(){
    corpoTabela.innerHTML = ""

    for (Dinossauro of Dinossauros){
        corpoTabela.innerHTML += `
            <tr>
                <td>${Dinossauro.nome}</td> 
                <td>${Dinossauro.Dieta}</td>
            </tr>
        `
    }
}    

exibir()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const valorNome = document.getElementById("campoEspécie").value
    const valorDieta = document.getElementById("campoDieta").value

    const x = {nome:valorNome, Dieta:valorDieta}
    
    Dinossauros.push(x)
    
    exibir()
})
