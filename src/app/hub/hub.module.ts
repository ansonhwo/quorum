import { NgModule } from '@angular/core';
import { MatToolbarModule  } from '@angular/material';

import { HubComponent } from './hub.component';
import { HubRoutingModule } from './hub-routing.module';

@NgModule({
  imports: [
    HubRoutingModule,
    MatToolbarModule
  ],
  declarations: [
    HubComponent
  ]
})
export class HubModule {}