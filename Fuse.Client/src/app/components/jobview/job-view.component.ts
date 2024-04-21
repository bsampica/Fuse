import { Component }          from '@angular/core';
import { JobData, JobStatus } from "../../data/data-model";
import { Observable }         from 'rxjs';
import { CommonModule }       from '@angular/common';


@Component({
    selector: 'app-job-view',
    standalone: true,
    imports: [ CommonModule ],
    templateUrl: './job-view.component.html',
    styleUrl: './job-view.component.scss'
})
export class JobViewComponent {
    public JobStatus = JobStatus;
    public jobs: JobData[] = [];

    constructor() {
    }

    public async startJobClicked(jobId: number) {
        console.debug(`Start Job Clicked: ${jobId} :Enter`);
        console.debug(`Start Job Clicked: ${jobId} :Exit`);

    }

    public async stopJobClicked(jobId: number) {
        console.debug(`Stop Job Clicked: ${jobId} :Enter`);
        console.debug(`Stop Job Clicked: ${jobId} :Exit`)
    }

    public addJobClicked() {
        console.debug('Add Job Clicked');
    }

    public startAllJobsClicked() {
        throw Error('Not Implemented');
    }

    public stopAllJobsClicked() {
        throw Error('Not Implemented');
    }
}
