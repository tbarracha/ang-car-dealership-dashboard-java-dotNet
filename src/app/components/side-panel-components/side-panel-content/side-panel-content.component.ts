import { Component } from '@angular/core';
import { VehicleDataService } from 'src/app/services/vehicle-data.service';

@Component({
  selector: 'app-side-panel-content',
  templateUrl: './side-panel-content.component.html',
  styleUrls: ['./side-panel-content.component.scss']
})
export class SidePanelContentComponent {

  dataType: string | undefined;

  constructor(private vehicleDataService: VehicleDataService) {

  }

  setDataType(dataType: string) {
    this.dataType = dataType;
  }

  getData() {
    if (this.dataType != null) {
      this.vehicleDataService.getVehicleData(this.dataType);
    } else {
      this.vehicleDataService.getBrands();
      console.log("No Data Type to fetch. Data type is null!");
    }
  }
}
