import { Violation } from './Violation';

export class Inspection {
  id: number;
  score: number;
  date: string;
  business_id: number;
  violations_url: string;
  violations: Violation[];
}
