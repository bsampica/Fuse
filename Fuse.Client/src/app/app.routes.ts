import { Routes }            from '@angular/router';
import { HomeComponent }     from "./components/home/home.component";
import { JobViewComponent }  from "./components/jobview/job-view.component";
import { TrainingComponent } from "./components/training/training.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'jobs', component: JobViewComponent },
    { path: 'training', component: TrainingComponent }
];
