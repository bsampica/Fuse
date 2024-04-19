import { Routes }           from '@angular/router';
import { HomeComponent }    from "./components/home/home.component";
import { JobViewComponent } from "./components/jobview/job-view.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fetch', component: JobViewComponent }
];
