export interface CarModel {
    id: number;
    model: string;
    color : string;
    fuelType: string;
    year: number;
    carsAvailable?: number;
    type: string;
    img?: string;
}