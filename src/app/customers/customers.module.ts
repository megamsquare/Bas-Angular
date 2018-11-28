import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from '@app/customers/customers-routing.module';
import {AddMemberModalComponent} from '@app/admin/organization-units/add-member-modal.component';
import {ImpersonationService} from '@app/admin/users/impersonation.service';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [],
    exports: [],
    providers: []
})
export class CustomersModule { }
