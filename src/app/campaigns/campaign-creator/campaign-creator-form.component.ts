import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CampaignApiService } from '../shared/campaign-api.service';
import { CampaignModel } from '../shared/campaign.model';
import { DateUtilsService } from '../../shared/date-utils.service';

@Component({
    selector: 'app-campaign-creator-form',
    templateUrl: './campaign-creator-form.component.html',
    styleUrls: ['./campaign-creator-form.component.scss']
})
export class CampaignCreatorFormComponent implements OnInit {

    campaign: CampaignModel;

    constructor (private campaignApi: CampaignApiService, private dateUtils: DateUtilsService, private router: Router) {}

    ngOnInit() {
        this.setModelDefaults();
    }

    public checkStatus (event) {
        this.campaign.status = event ? 1 : 0;
    }

    public submitForm (form) {
        if (!form.valid) { return; }

        var obj = JSON.parse(JSON.stringify(this.campaign));
        obj.start_at = this.dateUtils.formatSQLDate(obj.start_at);
        obj.end_at = this.dateUtils.formatSQLDate(obj.end_at);
        this.campaignApi.createCampaign(obj)
        .subscribe(
            data => this.processSuccess(data)
        )
    }

    processSuccess (data) {
        this.router.navigate(['campaigns', data.id]);
    }

    public setDate (key, event) {
        this.campaign[key] = new Date(event);
    }

    private setModelDefaults () {
        this.campaign = new CampaignModel();
        this.campaign.name = '';
        this.campaign.description = '';
        this.campaign.status = 0;
        this.campaign.start_at = new Date();
        this.campaign.end_at = new Date();
    }

}
