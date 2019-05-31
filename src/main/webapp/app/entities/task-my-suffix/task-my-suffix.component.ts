import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITaskMySuffix } from 'app/shared/model/task-my-suffix.model';
import { AccountService } from 'app/core';
import { TaskMySuffixService } from './task-my-suffix.service';

@Component({
  selector: 'jhi-task-my-suffix',
  templateUrl: './task-my-suffix.component.html'
})
export class TaskMySuffixComponent implements OnInit, OnDestroy {
  tasks: ITaskMySuffix[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected taskService: TaskMySuffixService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.taskService
      .query()
      .pipe(
        filter((res: HttpResponse<ITaskMySuffix[]>) => res.ok),
        map((res: HttpResponse<ITaskMySuffix[]>) => res.body)
      )
      .subscribe(
        (res: ITaskMySuffix[]) => {
          this.tasks = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInTasks();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ITaskMySuffix) {
    return item.id;
  }

  registerChangeInTasks() {
    this.eventSubscriber = this.eventManager.subscribe('taskListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
