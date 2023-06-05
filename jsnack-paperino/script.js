const carBrands = ['FerrAri', 'LambORghini', 'Maserati', 'Pagani', 'BMW', 'SMART', 'Porsche', 'Mercedes-Benz', 'TESla', 'volkswagen', 'audi', 'Seat', 'McLaren', 'Fiat', 'Alfa Romeo'];
const porperlyBrands = [];

carBrands.forEach((word) => {
    const newString=word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    porperlyBrands.push(newString);
});