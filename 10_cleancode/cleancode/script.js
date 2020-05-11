const ferrari = {name: 'ferrari', speed: '100', unit: 'km/s'};
const fiat = {name: 'panda', speed: '1280', unit: 'km/s'};

// // l'utilité des paramètres / réusabilité !
const display_speed = function(current_car) {
  console.log(`your ${current_car.name} going at ${current_car.speed}${current_car.unit}`);
}
display_speed(ferrari);



// const vs let ¯\_(ツ)_/¯
// interdit les variables globales ça fait des bugs

const display_name = function(current_car) {
    const name = current_car.name;
    console.log(`ta voiture est une ${name}`);
}
display_name(fiat);
