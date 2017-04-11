import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { Business } from '../common/Business';
import { HealthDataService } from '../common/HealthDataService';
import { DataPanelService } from '../data-panel/DataPanel.service';
import { NavBarService } from '../navbar/NavBar.service';

@Component({
  selector: 'map',
  templateUrl: './Map.component.html',
  styleUrls: ['./Map.component.css'],
  providers: [HealthDataService]
})
export class MapComponent implements OnInit {
  businesses: Business[];

  constructor(private healthDataService : HealthDataService,
              private dataPanelService : DataPanelService,
              private navBarService : NavBarService) {}

  ngOnInit() : void {
    this.healthDataService.getBusinesses().then(businesses => this.businesses = businesses);
    this.navBarService.applyClicked$.subscribe(searchTerm => {
      this.healthDataService.getBusinessByName(searchTerm).then(businesses => this.businesses = businesses);
    });
  }

  getPin(business : Business) : string {
    if (business.most_recent_inspection === null) {
      return 'assets/img/yellow-pin.png'
    }

    let score = business.most_recent_inspection.score;
    
    if (score === 100) {
      return 'assets/img/green-pin.png';
    } else if (score >= 80 && score < 100) {
      return 'assets/img/yellow-pin.png'
    } else {
      return 'assets/img/red-pin.png';
    }
  }

  pinClicked(clickedBusiness : Business) : void {
    this.dataPanelService.onClick(clickedBusiness);
  }
}
