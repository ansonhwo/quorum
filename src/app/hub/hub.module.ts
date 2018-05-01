import { NgModule } from '@angular/core';
import { MaterialModule } from '../mat/material.module';

import { HubComponent } from './hub.component';
import { HubRoutingModule } from './hub-routing.module';

@NgModule({
  imports: [
    HubRoutingModule,
    MaterialModule
  ],
  declarations: [
    HubComponent
  ]
})
export class HubModule {}