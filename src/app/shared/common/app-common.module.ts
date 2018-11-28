import { AbpModule } from 'abp-ng2-module/dist/src/abp.module';
import * as ngCommon from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppLocalizationService } from '@app/shared/common/localization/app-localization.service';
import { AppNavigationService } from '@app/shared/layout/nav/app-navigation.service';
import { CommonModule } from '@shared/common/common.module';
import { UtilsModule } from '@shared/utils/utils.module';
import { ModalModule } from 'ngx-bootstrap';
import { PaginatorModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { AppAuthService } from '@app/shared/common/auth/app-auth.service';
import { AppRouteGuard } from '@app/shared/common/auth/auth-route-guard';
import { JqPluginDirective } from '@app/shared/common/libs/jq-plugin.directive';
import { CommonLookupModalComponent } from '@app/shared/common/lookup/common-lookup-modal.component';
import { DatePickerDirective } from '@app/shared/common/timing/date-picker.component';
import { DateRangePickerComponent } from '@app/shared/common/timing/date-range-picker.component';
import { DateTimeService } from '@app/shared/common/timing/date-time.service';
import { TimeZoneComboComponent } from '@app/shared/common/timing/timezone-combo.component';

@NgModule({
    imports: [
        ngCommon.CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        UtilsModule,
        AbpModule,
        CommonModule,
        TableModule,
        PaginatorModule
    ],
    declarations: [
        TimeZoneComboComponent,
        JqPluginDirective,
        CommonLookupModalComponent,
        DateRangePickerComponent,
        DatePickerDirective
    ],
    exports: [
        TimeZoneComboComponent,
        JqPluginDirective,
        CommonLookupModalComponent,
        DateRangePickerComponent,
        DatePickerDirective
    ],
    providers: [
        DateTimeService,
        AppLocalizationService,
        AppNavigationService
    ]
})
export class AppCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppCommonModule,
            providers: [
                AppAuthService,
                AppRouteGuard
            ]
        };
    }
}
