import { Component }        from '@angular/core';
import { JobData }          from "../../data/data-model";
import { JobWorkerService } from "../../services/job-worker.service";


@Component({
    selector: 'app-jobview',
    standalone: true,
    imports: [],
    templateUrl: './job-view.component.html',
    styleUrl: './job-view.component.scss'
})
export class JobViewComponent {
    private jobWorkerService: JobWorkerService;


    constructor(jobworkerService: JobWorkerService) {
        this.jobWorkerService = jobworkerService;
        this.jobWorkerService
            .$jobs
            .subscribe((jobUpdate: JobData[]) => {
                console.log('job data has changed inside JobWorkerService', jobUpdate);
            })
    }

    public startJobClicked(jobId: number) {
        console.log('Start Job Clicked', jobId);
        this.jobWorkerService.startTask(jobId)
            .then(value => {console.log('Start Task Finished: ', value)})
            .catch((err) => console.log('Promise errored or never returned', err))
            .finally(() => console.log('Finally block hit for start task promise'));
    }

    public addJobClicked() {

    }

    public startAllJobsClicked() {

    }


}
