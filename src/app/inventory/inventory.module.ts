import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from '@app/inventory/inventory-routing.module';
import {AddMemberModalComponent} from '@app/admin/organization-units/add-member-modal.component';
import {ImpersonationService} from '@app/admin/users/impersonation.service';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [],
    exports: [],
    providers: []
})
export class InventoryModule { }
