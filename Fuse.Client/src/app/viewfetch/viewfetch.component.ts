import { Component } from '@angular/core';
import { JobStatus, DisplayData } from '../data/data-model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-viewfetch',
  standalone: true,
  imports: [],
  templateUrl: './viewfetch.component.html',
  styleUrl: './viewfetch.component.scss'
})
export class ViewfetchComponent {
  // public data: number[] = [1, 2, 3, 4, 5];
  public data: DisplayData[] = []
  private currentId: number = 0;
  public startAllEnabled: boolean = false;

  private activeTasksSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $activeTasks = this.activeTasksSubject.asObservable();


  constructor() {
    this.$activeTasks.subscribe(data => this.HandleActiveTasks(data));
  }

  public ButtonClicked_Start(itemId?: number) {
    this.data[this.data.findIndex(d => d.id == itemId)].status = JobStatus.Running;
  }

  public ButtonClicked_Stop(itemId?: number) {
    this.data[this.data.findIndex(d => d.id == itemId)].status = JobStatus.Stopped;
  }

  private HandleActiveTasks(data: boolean) {
    this.startAllEnabled = data;
  }

  public addNewTask() {
    this.data.push({
      id: this.currentId,
      title: 'Process Title',
      header: 'No Text',
      text: 'No Text ' + this.currentId,
      status: JobStatus.Stopped
    });
    this.currentId++;
  }

  public startAllTasks() {
    console.info('Starting All Tasks');
    this.activeTasksSubject.next(true);

  }

  private delay(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public isWaiting(): string {
    if (this.startAllEnabled) return 'btn-waiting';
    return '';
  }
}