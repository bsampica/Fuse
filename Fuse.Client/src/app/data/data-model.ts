export interface JobData {
  id: number;
  title: string;
  header: string;
  text: string;
  status: JobStatus;
  fetchUrl: string;
  work: any;
}

export enum JobStatus {
  Running = "running",
  Stopped = "stopped",
  Completed = 'completed'
}

