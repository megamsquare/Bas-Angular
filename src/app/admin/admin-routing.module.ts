import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AuditLogsComponent } from '@app/admin/audit-logs/audit-logs.component';
import { HostDashboardComponent } from '@app/admin/dashboard/host-dashboard.component';
import { DemoUiComponentsComponent } from '@app/admin/demo-ui-components/demo-ui-components.component';
import { EditionsComponent } from '@app/admin/editions/editions.component';
import { InstallComponent } from '@app/admin/install/install.component';
import { LanguageTextsComponent } from '@app/admin/languages/language-texts.component';
import { LanguagesComponent } from '@app/admin/languages/languages.component';
import { MaintenanceComponent } from '@app/admin/maintenance/maintenance.component';
import { OrganizationUnitsComponent } from '@app/admin/organization-units/organization-units.component';
import { RolesComponent } from '@app/admin/roles/roles.component';
import { HostSettingsComponent } from '@app/admin/settings/host-settings.component';
import { TenantSettingsComponent } from '@app/admin/settings/tenant-settings.component';
import { InvoiceComponent } from '@app/admin/subscription-management/invoice/invoice.component';
import { SubscriptionManagementComponent } from '@app/admin/subscription-management/subscription-management.component';
import { TenantsComponent } from '@app/admin/tenants/tenants.component';
import { UiCustomizationComponent } from '@app/admin/ui-customization/ui-customization.component';
import { UsersComponent } from '@app/admin/users/users.component';
import {DeviceActivationComponent} from "@app/admin/device-activation/device-activation.component";
import {AppPermission} from "@shared/permissions/app-permissions";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Administration.Users' } },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Administration.Roles' } },
                    { path: 'auditLogs', component: AuditLogsComponent, data: { permission: 'Pages.Administration.AuditLogs' } },
                    { path: 'maintenance', component: MaintenanceComponent, data: { permission: 'Pages.Administration.Host.Maintenance' } },
                    { path: 'hostSettings', component: HostSettingsComponent, data: { permission: 'Pages.Administration.Host.Settings' } },
                    { path: 'editions', component: EditionsComponent, data: { permission: 'Pages.Editions' } },
                    { path: 'languages', component: LanguagesComponent, data: { permission: 'Pages.Administration.Languages' } },
                    { path: 'languages/:name/texts', component: LanguageTextsComponent, data: { permission: 'Pages.Administration.Languages.ChangeTexts' } },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' } },
                    { path: 'organization-units', component: OrganizationUnitsComponent, data: { permission: 'Pages.Administration.OrganizationUnits' } },
                    { path: 'subscription-management', component: SubscriptionManagementComponent, data: { permission: 'Pages.Administration.Tenant.SubscriptionManagement' } },
                    { path: 'invoice/:paymentId', component: InvoiceComponent, data: { permission: 'Pages.Administration.Tenant.SubscriptionManagement' } },
                    { path: 'tenantSettings', component: TenantSettingsComponent, data: { permission: 'Pages.Administration.Tenant.Settings' } },
                    { path: 'hostDashboard', component: HostDashboardComponent, data: { permission: 'Pages.Administration.Host.Dashboard' } },
                    { path: 'demo-ui-components', component: DemoUiComponentsComponent, data: { permission: 'Pages.DemoUiComponents' } },
                    { path: 'install', component: InstallComponent },
                    { path: 'ui-customization', component: UiCustomizationComponent },
                    { path: 'deviceActivation', component: DeviceActivationComponent, data: { permission: AppPermission.Pages_Administration_Device_Activation }  }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {

    constructor(
        private router: Router
    ) {
        router.events.subscribe((event) => {
            this.hideOpenDataTableDropdownMenus();

            if (event instanceof NavigationEnd) {
                window.scroll(0, 0);
            }
        });
    }

    hideOpenDataTableDropdownMenus(): void {
        let $dropdownMenus = $('.dropdown-menu.tether-element');
        $dropdownMenus.css({
            'display': 'none'
        });
    }

}
