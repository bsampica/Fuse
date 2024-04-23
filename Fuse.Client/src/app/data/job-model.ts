import { Observable } from "rxjs";

export interface JobModel {
  id: number;
  requestCount?: number;
  displayHeader?: string;
  displayTitle?: string;
  displayStatus?: JobStatus;
  data?: Observable<string>;
}

export class JobFactory {
  static _currentId: number = 0;
  static create(): JobModel {
    this._currentId++;
    return {
      id: this._currentId,
      requestCount: 0,
      displayHeader: 'Google:Fetch',
      displayStatus: JobStatus.Stopped,
      data: new Observable<string>(),
    }
  }
}
export enum JobStatus {
  Starting = 'Starting',
  Running = 'Running',
  Stopping = 'Stopping',
  Stopped = 'Stopped',
  Completed = 'Completed'
}
