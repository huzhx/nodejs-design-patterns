const BoatBuilder = require('./boat-builder');

const myBoat = new BoatBuilder()
  .withMotors(2, 'Best Motor Co.', 'OM123')
  .withSails(1, 'fabric', 'white')
  .withCabin()
  .hullColor('blue')
  .build();

console.log(myBoat);
