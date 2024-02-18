import { Component, Input } from '@angular/core';
import { VehicleDataService } from 'src/app/services/vehicle-data.service';

@Component({
  selector: 'app-side-panel-content',
  templateUrl: './side-panel-content.component.html',
  styleUrls: ['./side-panel-content.component.scss']
})
export class SidePanelContentComponent {

  constructor(private vehicleDataService: VehicleDataService) {

  }

  getDataTypeURLs() : string[] {
    return Object.values(this.vehicleDataService.vehicleURLs);
  }
}
