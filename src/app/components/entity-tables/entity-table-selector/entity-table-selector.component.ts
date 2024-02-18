import { Component, Input } from '@angular/core';
import { VehicleDataService as VehicleDataService } from 'src/app/services/vehicle-data.service';

@Component({
  selector: 'app-entity-table-selector',
  templateUrl: './entity-table-selector.component.html',
  styleUrls: ['./entity-table-selector.component.scss']
})
export class EntityTableSelectorComponent {

  @Input() dataTypeURL: string | undefined;
  displayString: string | undefined;

  constructor(private vehicleDataService: VehicleDataService)
  {

  }

  ngOnChanges(): void {
    if (this.dataTypeURL != null) {
      this.setURL(this.dataTypeURL);
    }
  }

  setURL(dataURL: string) {
    this.dataTypeURL = dataURL;
    const splitURL = dataURL.split("/");
    this.displayString = splitURL[splitURL.length - 1];
  }

  getData() {
    if (this.dataTypeURL != null) {
      const data = this.vehicleDataService.getVehicleData(this.dataTypeURL);
    } else {
      console.log("No Data! Data type is null!")
    }
  }
}
