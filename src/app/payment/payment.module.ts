import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from '@app/payment/payment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule
  ],
  declarations: [],
    exports: [],
    providers: []
})
export class PaymentModule { }
