import { Component } from '@angular/core';
import { JobStatus, JobData } from '../data/data-model';
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
  public allTasks: JobData[] = []
  private currentId: number = 0;
  public startAllEnabled: boolean = false;

  constructor() {
  }

  public ButtonClicked_Start(itemId?: number) {
    let task = this.allTasks[this.allTasks.findIndex(d => d.id == itemId)];
    task.status = JobStatus.Running;
    task.action(task.id);
  }

  public ButtonClicked_Stop(itemId?: number) {
    this.allTasks[this.allTasks.findIndex(d => d.id == itemId)].status = JobStatus.Stopped;
  }

  private HandleActiveTasks(data: boolean) {
    this.startAllEnabled = data;
  }

  public addNewTask() {
    this.allTasks.push({
      id: this.currentId,
      title: 'Process Title',
      header: 'No Text',
      text: 'No Text ' + this.currentId,
      status: JobStatus.Stopped,
      action: async (id) => this.handleTaskAction(id)
    });
    this.currentId++;
  }

  private async handleTaskAction(id: number) {
    const taskIndex = this.allTasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return;
    let task = this.allTasks[taskIndex];
    console.log('Handling task with the id of', id);
    await this.delay(5000);
    task.status = JobStatus.Completed;
    console.log('Finished handling the task with id', id);
  }

  public startAllTasks() {
    this.allTasks.forEach(t => {
      t.status = JobStatus.Running;
      t.action(t.id);
    });
  }

  public stopAllTasks() {
    this.allTasks.forEach(t => {
      t.status = JobStatus.Stopped;
    });
  }

  private delay(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public isWaiting(): string {
    if (this.startAllEnabled) return 'btn-waiting';
    return '';
  }
}
