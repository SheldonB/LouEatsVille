import { Component, Input } from '@angular/core';

import { Business } from '../common/Business';
import { Inspection } from '../common/Inspection';
import { HealthDataService } from '../common/HealthDataService';
import { DataPanelService } from './DataPanel.service';

@Component({
  selector: 'data-panel',
  templateUrl: './DataPanel.component.html',
  styleUrls: ['./DataPanel.component.css'],
  providers: [HealthDataService]
})
export class DataPanelComponent {
  @Input()
  panelOpen: boolean = false;

  selectedBusiness: Business;

  inspections: Inspection[];

  constructor(private dataPanelService : DataPanelService, private healthDataService : HealthDataService) {
    dataPanelService.inspectionsButtonClicked$.subscribe(business => {
      this.displayInspections(business)
    });
  }

  displayInspections(business : Business) {
    if (!this.panelOpen) {
      this.togglePanel();
    }

    this.selectedBusiness = business;

    this.healthDataService.getInspectionsForBusiness(this.selectedBusiness).then(inspections => this.inspections = this.getInspectionViolations(inspections));
  }

  getInspectionViolations(inspections : Inspection[]) : Inspection[] {
    inspections.forEach(inspection => {
      this.healthDataService.getViolationsForInspection(inspection).then(violations => inspection.violations = violations);
    });

    return inspections;
  }

  togglePanel() {
    this.panelOpen = !this.panelOpen;
  }
}
