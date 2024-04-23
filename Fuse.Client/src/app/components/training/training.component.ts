import { AsyncPipe }                            from "@angular/common";
import { HttpClient }                           from '@angular/common/http';
import { Component }                            from '@angular/core';
import { map, of, OperatorFunction, switchMap } from "rxjs";
import { fromFetch }                            from "rxjs/internal/observable/dom/fetch";
import { JobFactory, JobModel, JobStatus }      from "../../data/job-model";

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  protected readonly JobStatus = JobStatus;
  protected _jobs: JobModel[] = [];
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public async addNewJob() {
    const job = JobFactory.create();
    this._jobs.push(job);
  }

  async startJob(jobId: number) {
    console.debug(`Starting Job: ${jobId}`);

    let jobReference = this._jobs.find(j => j.id === jobId)
    if (!jobReference) return;
    switch (jobReference?.displayStatus) {
      case (JobStatus.Starting):
      case (JobStatus.Running):
      case (JobStatus.Stopping):
      case (JobStatus.Completed):
        return;
      case (JobStatus.Stopped):
        jobReference.displayStatus = JobStatus.Starting;
        break;
      default:
        console.error('No case was met, fell to default');
        return;
    }

    const result = await this.doWebRequest(jobReference);
    console.debug('Result: ', result.slice(0, 100));
    console.debug(' ----------- ALL DONE ----------- ');
  }

  async doWebRequest(job: JobModel): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fromFetch('/client-api/request')
       
        .subscribe((response: Response) => {
          if (response.ok) {
            resolve(response.text());
          }
        });
    });
  }
}

