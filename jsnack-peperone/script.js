const peperoni = [
    {variety:'Peperone di Pontecorvo Dop', weight: 50, length:'10cm'},
    {variety:'Peperone di Carmagnola Igp', weight: 24, length:'20cm'},
    {variety:'Peperone di Senise Igp', weight: 30, length:'12cm'},
    {variety:'Peperone Quadrato di Asti', weight: 12, length:'15cm'},
    {variety:'Peperone di Capriglio', weight: 69, length:'22cm'},
    {variety:'Papaccella napoletana', weight: 120, length:'11cm'},
    {variety:'Friggitello Torricello', weight: 300, length:'7cm'},
    {variety:'Peperone dolce di Altino', weight: 160, length:'16cm'},
    {variety:'Peperone di Polizzi Generosa', weight: 89, length:'30cm'},
    {variety:'Cappello del Vescovo', weight: 109, length:'8cm'},
];


console.log()

function createPeperoni (variety, weight, length){
    let variety = variety;
    let weight = weight;
    let length = length;

    peperoni.push(createPeperoni())
}