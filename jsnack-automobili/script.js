const automobili = [
    {make:'Ferrari', fuel: 'benzina', model:'f8 Tributo'},
    {make:'Lamborghini', fuel: 'benzina', model:'Serranto'},
    {make:'Maserati', fuel: 'benzina', model:'Ghibli'},
    {make:'Pagani', fuel: 'benzina', model:'Utopia'},
    {make:'BMW', fuel: 'diesel', model:'530d'},
    {make:'SMART', fuel: 'elettrico', model:'for-two'},
    {make:'Porsche', fuel: 'benzina', model:'718'},
    {make:'Mercedes-Benz', fuel: 'hibrid', model:'Gle300'},
    {make:'Tesla', fuel: 'elettrico', model:'Model S'},
    {make:'Wolkswagen', fuel: 'diesel', model:'Golf'},
    {make:'Audi', fuel: 'diesel', model:'RS6'},
    {make:'Seat', fuel: 'benzina', model:'Leon'},
    {make:'McLaren', fuel: 'benzina', model:'720S'},
    {make:'Fiat', fuel: 'elettrico', model:'500e'},
    {make:'Alfa Romeo', fuel: 'diesel', model:'Giulietta'},
];


const automobiliBenzina=[];
const automobiliDiesel=[];

for (let i=0;i<automobili.length;i++){
    if (automobili[i].fuel == 'benzina'){
        automobiliBenzina.push(automobili[i]);
    }
}

console.log('-----------');
console.log('DIESEL CARS');
console.log('-----------');

automobili.forEach(element => {
    if (element.fuel == 'diesel'){
        automobiliDiesel.push(element);
    }
});

const automobiliOthers = automobili.filter(model => (model.fuel !== 'diesel' && model.fuel !== 'benzina'));

console.log(automobiliBenzina, automobiliDiesel, automobiliOthers);