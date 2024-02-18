import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  // Spring Boot URLs (from controllers)
  baseUrl: string = 'http://localhost:8080/api';
  
  vehicleURLs: {
    types: string,
    status: string,
    condition: string,
    color: string,
    price: string,
    brands: string,
    models: string,
    licensePlate: string,
    cars: string,
  } = {
    types: `${this.baseUrl}/vehicle/type`,
    status: `${this.baseUrl}/vehicle/status`,
    condition: `${this.baseUrl}/vehicle/condition`,
    color: `${this.baseUrl}/color`,
    price: `${this.baseUrl}/vehicle/price`,
    brands: `${this.baseUrl}/vehicle/brand`,
    models: `${this.baseUrl}/vehicle/model`,
    licensePlate: `${this.baseUrl}/vehicle/licensePlate`,
    cars: `${this.baseUrl}/vehicle/car`,
  };
  

  constructor(private http: HttpClient) { }

  getVehicleData(url : string) : any {
    var data: any = this.http.get(url).subscribe(data =>
      console.log(`${url} data: `, data)
    );
  
    return data;
  }

  getBrands() : any {
    var data: any = this.http.get(this.vehicleURLs.brands).subscribe(data =>
      console.log("Result: ", data)
    );
  
    return data;
  }

  getModels() : any {
    var data: any = this.http.get(this.vehicleURLs.models).subscribe(data =>
      console.log("Result: ", data)
    );
  
    return data;
  }

  getCars() : any {
    var data: any = this.http.get(this.vehicleURLs.cars).subscribe(data =>
      console.log("Result: ", data)
    );
  
    return data;
  }
}
