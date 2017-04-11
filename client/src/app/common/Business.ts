import { Inspection } from './Inspection';

export class Business {
  id: number;
  name: string;
  full_address: string;
  latitude: number;
  longitude: number;
  phone_number: string;
  inspections: string;
  most_recent_inspection: Inspection
}
