import { Component } from '@angular/core';
import { VehicleDataService as VehicleDataService } from 'src/app/services/vehicle-data.service';

@Component({
  selector: 'app-entity-table-selector',
  templateUrl: './entity-table-selector.component.html',
  styleUrls: ['./entity-table-selector.component.scss']
})
export class EntityTableSelectorComponent {

  url: string | undefined;
  vehicleComponent: string | undefined;

  constructor(private vehicleDataService: VehicleDataService)
  {

  }

  setURL(url: string)
  {
    this.url = url;
    const splitURL = url.split("/");
    this.vehicleComponent = splitURL.at(splitURL.length - 1);
  }

  getVehicleData()
  {
    this.vehicleDataService.getBrands();
  }

}
