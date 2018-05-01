import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { reducers, metaReducers } from '../ngrx/reducers';
import { CustomRouterStateSerializer } from '../ngrx/router-state';

import { AppComponent } from './app.component';
import { p404Component } from './pages/404.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    p404Component
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
