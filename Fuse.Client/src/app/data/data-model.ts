import { Action } from "rxjs/internal/scheduler/Action";

export interface JobData {
    id: number;
    title: string;
    header: string;
    text: string;
    status: JobStatus;
    action: (id: number) => void;
}

export enum JobStatus {
    Running = "running",
    Stopped = "stopped",
    Completed = 'completed'
}

