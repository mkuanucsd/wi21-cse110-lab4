let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};

for (cars in statistics) {
  if ((cars[0] == 'r' || cars[0] == 'R') ||
    (statistics[cars] % 2 == 1)) {
    console.log(statistics[cars]);
  }
}