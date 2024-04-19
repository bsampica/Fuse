import { ApplicationConfig }                  from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideHttpClient }                  from '@angular/common/http';

import { routes }            from './app.routes';
import { JobWorkerService }  from "./services/job-worker.service";
import { WebFetcherService } from './services/web-fetcher.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    WebFetcherService,
    JobWorkerService,
    provideHttpClient(),
  ]
};
