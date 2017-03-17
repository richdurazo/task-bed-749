import { Component, OnInit } from '@angular/core';

import { TriggerApiService } from '../shared/trigger-api.service';
import { TriggerModel } from '../shared/trigger.model';

@Component({
  selector: 'app-triggers-overview',
  templateUrl: './triggers-overview.component.html',
  styleUrls: ['./triggers-overview.component.scss']
})
export class TriggersOverviewComponent implements OnInit {

    triggers: TriggerModel[] = [];

  constructor(private triggerApi: TriggerApiService) { }

  ngOnInit() {
      this.getTriggers();
  }

  getTriggers () {
    this.triggerApi.getTriggers()
    .subscribe(
        data => this.processGetSuccess(data)
    )
  }

  processGetSuccess (data) {
      this.triggers = data;
  }

  deleteItem (idx) {
      this.triggerApi.deleteTrigger(this.triggers[idx])
      .subscribe(
          data => this.processDeleteSuccess(data, idx)
      )
  }

  processDeleteSuccess (data, idx) {
      this.triggers.splice(idx, 1);
  }

}