import { Injectable } from '@nestjs/common';
import { BrandsService } from './../brands/brands.service';
import { CarsService } from './../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillCarsWithSeedData(BRANDS_SEED);
    return 'Seed executed';
  }
}
