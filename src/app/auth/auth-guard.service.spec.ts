/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';

import { AuthService } from '../auth/auth.service';
import { AuthMockService } from '../mocks/auth/auth-mock.service';

import { RouterModule, Router, RouterStateSnapshot } from '@angular/router';
import { RouterMockService } from '../mocks/router/router-mock.service';
import { RouterStateSnapshotMock } from '../mocks/router/router-state-snapshot-mock.service';

let authService;
let authGuardService;
let router;
let state;

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuardService,
        {provide: AuthService, useClass: AuthMockService },
        {provide: Router, useClass: RouterMockService },
        {provide: RouterStateSnapshot, useClass: RouterStateSnapshotMock }
      ]
    });

    authGuardService = TestBed.get(AuthGuardService);
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
    state = TestBed.get(RouterStateSnapshot);
  });

  it('should exist', () => {
    expect(authGuardService).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should have a canActivate function', () => {
      expect(authGuardService.canActivate).toBeTruthy();
    });

    it ('should return true if the AuthService returns true', () => {
      spyOn(authService, 'loggedIn').and.returnValue(true);
      expect(authGuardService.canActivate()).toEqual(true);
    });

    it ('should return false if the AuthService.loggedIn() returns false', () => {
      spyOn(authService, 'loggedIn').and.returnValue(false);
      spyOn(authService, 'setUrl').and.returnValue(false);
      expect(authGuardService.canActivate(null, state)).toEqual(false);
    });

    it ('should call setUrl on the AuthService with the RouterStateSnapshot url value if AuthService.loggedIn() returns false', () => {
      state.url = '/url';
      spyOn(authService, 'loggedIn').and.returnValue(false);
      spyOn(authService, 'setUrl').and.returnValue(false);
      authGuardService.canActivate(null, state);
      expect(authService.setUrl).toHaveBeenCalledWith('/url');
    });

    // still debating wether this is necessary
    // it ('should call navigateByUrl on the Router with "/login" AuthService.loggedIn() returns false', () => {
    //   spyOn(authService, 'loggedIn').and.returnValue(false);
    //   spyOn(router, 'navigateByUrl');
    //   authGuardService.canActivate();
    //   expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
    // });
  })
});
