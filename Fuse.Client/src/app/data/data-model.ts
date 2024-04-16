export interface DisplayData {
    id?: number;
    title?: string;
    header?: string;
    text?: string;
    status?: JobStatus;
}

export enum JobStatus {
    Running = "running",
    Stopped = "stopped"
}
