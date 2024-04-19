import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from "rxjs";
import { JobData, JobStatus } from '../data/data-model';

@Injectable({
    providedIn: 'root'
})
export class JobWorkerService {

    private jobs: JobData[] = [];
    private jobsSubject = new BehaviorSubject<JobData[]>(this.jobs);
    public $jobs = this.jobsSubject.asObservable();

    constructor() {

    }

    public async startTask(jobId: number) {

        // TODO:  Used to simulate a task in the background.
        // return setTimeout(() => {
        //     this.jobsSubject.next([]);
        // }, 10000);
    }

    public stopTask(jobId: number) {

    }

    public addJobs(jobs: JobData[]) {
        jobs.forEach(j => this.addJob(j));
    }

    public addJob(job: JobData) {
        this.jobs.push(job);
    }

    public startAllJobs() {
        this.jobs.forEach(j => this.startTask(j.id));
    }

    public stopAllJobs() {
        this.jobs.forEach(j => this.stopTask(j.id));
    }

    private generateSampleJobs(numOfJobs: number) {
        for (let i = 0; i <= 10; i++) {
            this.generateSampleJob(i);
        }
    }

    private generateSampleJob(nextId: number): JobData {
        return {
            id: nextId,
            title: "New Job",
            header: "New Header",
            text: "This is the new job text",
            status: JobStatus.Stopped,
            fetchUrl: "",
            work: () => {
            }
        };
    }

    private generateNextId(): number {
        let jobReference = this.jobs
            .sort((ja, jb) =>
                jb.id - ja.id)[ 0 ];

        if (jobReference === null || undefined)
            return 0;

        return jobReference.id;
    }

}
