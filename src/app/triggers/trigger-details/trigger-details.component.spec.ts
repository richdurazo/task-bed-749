import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TriggerApiService } from '../shared/trigger-api.service';
import { TriggerApiMockService } from '../../mocks/triggers/trigger-api-mock.service';

import { TriggerDetailsComponent } from './trigger-details.component';

describe('TriggerDetailsComponent', () => {
    let component: TriggerDetailsComponent;
    let fixture: ComponentFixture<TriggerDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TriggerDetailsComponent ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [
                { provide: TriggerApiService, useClass: TriggerApiMockService }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TriggerDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
