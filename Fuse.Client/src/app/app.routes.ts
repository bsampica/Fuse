import { Routes }            from '@angular/router';
import { HomeComponent }     from "./components/home/home.component";
import { TrainingComponent } from "./components/training/training.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'jobs', component: TrainingComponent }
];
