import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Business } from './Business';
import { Inspection } from './Inspection';
import { Violation } from './Violation';

@Injectable()
export class HealthDataService {
  BUSINESS_URI = '/api/businesses/';

  constructor(private http : Http) {}

  getBusinesses() : Promise<Business[]> {
    return this.http
      .get(this.BUSINESS_URI)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getBusinessByName(businessName : string) : Promise<Business[]> {
    let params = new URLSearchParams();

    params.set('name', businessName);
    
    return this.http
      .get(this.BUSINESS_URI, {search: params})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getInspectionsForBusiness(business : Business) : Promise<Inspection[]> {
    return this.http
      .get(business.inspections)
      .toPromise()
      .then(response => response.json() as Inspection[])
      .catch(this.handleError);
  }

  getViolationsForInspection(inspection : Inspection) : Promise<Violation[]> {
    return this.http
      .get(inspection.violations_url)
      .toPromise()
      .then(response => response.json() as Violation[])
      .catch(this.handleError);
  }

  private extractData(resp : Response) : Business[] {
    let data = resp.json().results;
    let payload : Business[] = [];

    if (data instanceof Array) {
      for (let d of data) {
        payload.push(<Business>d);
      }
    } else {
      payload = [data as Business];
    }

    return payload;
  }

  private handleError(error : any) : Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error)
  }
}
