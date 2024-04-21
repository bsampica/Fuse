import { HttpClient }      from '@angular/common/http';
import { Component }       from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
    selector: 'app-training',
    standalone: true,
    imports: [],
    templateUrl: './training.component.html',
    styleUrl: './training.component.scss'
})
export class TrainingComponent {

    private _httpClient: HttpClient;
    private _webFetchDataSubject$: BehaviorSubject<string>
        = new BehaviorSubject<string>('');

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;

    }

    public async buttonClicked() {
        console.debug('buttonClicked:enter');

        this._webFetchDataSubject$.subscribe((fetchData) => {
            this.handleObservableSubscription(fetchData)
        });

        await this.getWebDataUsingObservables();
        console.debug('buttonClicked:exit');
    }

    public handleObservableSubscription(fetchedData: string) {
        console.debug('Fetched Data: ', fetchedData.slice(0, 100));

    }

    public async getWebDataUsingObservables() {
        this._httpClient.get('/client-api/request', { responseType: 'text' })
            .subscribe((fetchData) => {
                this._webFetchDataSubject$.next(fetchData);
            })
    }

    // public async getWebDataWithPromise(): Promise<string> {
    //     return new Promise<string>((resolve, reject) => {
    //         try {
    //             this._httpClient.get('/client-api/request', { responseType: 'text' })
    //                 .subscribe((data) => {
    //                     resolve(`Finished Request: ${data}`);
    //                 });
    //
    //         } catch (error) {
    //             reject(`Error: ${error}`);
    //         }
    //     });
    // }

}

