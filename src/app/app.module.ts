import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule, Http, Headers, RequestOptions } from '@angular/http';
import 'hammerjs';
import * as moment from 'moment/moment.d';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CampaignsComponent } from './campaigns/campaigns-component/campaigns.component';
import { CampaignsOverviewComponent } from './campaigns/campaigns-overview/campaigns-overview.component';
import { CampaignCreatorComponent } from './campaigns/campaign-creator/campaign-creator.component';
import { CampaignCreatorFormComponent } from './campaigns/campaign-creator/campaign-creator-form.component';

import { ContentComponent } from './content/content-component/content.component';
import { ContentCreatorComponent } from './content/content-creator/content-creator.component';
import { ContentCreatorFormComponent } from './content/content-creator/content-creator-form.component';
import { ContentOverviewComponent } from './content/content-overview/content-overview.component';

import { TriggersComponent } from './triggers/triggers-component/triggers.component';
import { TriggerCreatorComponent } from './triggers/trigger-creator/trigger-creator.component';
import { TriggerCreatorFormComponent } from './triggers/trigger-creator/trigger-creator-form.component';
import { TriggersOverviewComponent } from './triggers/triggers-overview/triggers-overview.component';

import { AuthCustomHttpService } from './auth/auth-custom-http.service';
import { CampaignApiService } from './campaigns/shared/campaign-api.service';
import { ContentApiService } from './content/shared/content-api.service';
import { TriggerApiService } from './triggers/shared/trigger-api.service';
import { UserApiService } from './users/shared/user-api.service';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';

import { DateUtilsService } from './shared/date-utils.service';
import { FilestackService } from './shared/filestack.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        OverviewComponent,
        PageNotFoundComponent,
        CampaignsComponent,
        CampaignCreatorComponent,
        CampaignsOverviewComponent,
        CampaignCreatorFormComponent,
        ContentComponent,
        ContentCreatorComponent,
        ContentOverviewComponent,
        ContentCreatorFormComponent,
        TriggersComponent,
        TriggerCreatorComponent,
        TriggersOverviewComponent,
        TriggerCreatorFormComponent,
        AppNavigationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        FlexLayoutModule,
        AppRoutingModule
    ],
    providers: [
        AuthCustomHttpService,
        ContentApiService,
        FilestackService,
        CampaignApiService,
        DateUtilsService,
        TriggerApiService,
        UserApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
