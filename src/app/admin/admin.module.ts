import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '@app/shared/common/app-common.module';
import { UtilsModule } from '@shared/utils/utils.module';
import { AddMemberModalComponent } from '@app/admin/organization-units/add-member-modal.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ModalModule, PopoverModule, TabsModule, TooltipModule } from 'ngx-bootstrap';
import { AutoCompleteModule, EditorModule, FileUploadModule as PrimeNgFileUploadModule, InputMaskModule, PaginatorModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { AdminRoutingModule } from '@app/admin/admin-routing.module';
import { AuditLogDetailModalComponent } from '@app/admin/audit-logs/audit-log-detail-modal.component';
import { AuditLogsComponent } from '@app/admin/audit-logs/audit-logs.component';
import { EntityChangeDetailModalComponent } from '@app/admin/audit-logs/entity-change-detail-modal.component';
import { HostDashboardComponent } from '@app/admin/dashboard/host-dashboard.component';
import { DemoUiComponentsComponent } from '@app/admin/demo-ui-components/demo-ui-components.component';
import { DemoUiDateTimeComponent } from '@app/admin/demo-ui-components/demo-ui-date-time.component';
import { DemoUiEditorComponent } from '@app/admin/demo-ui-components/demo-ui-editor.component';
import { DemoUiFileUploadComponent } from '@app/admin/demo-ui-components/demo-ui-file-upload.component';
import { DemoUiInputMaskComponent } from '@app/admin/demo-ui-components/demo-ui-input-mask.component';
import { DemoUiSelectionComponent } from '@app/admin/demo-ui-components/demo-ui-selection.component';
import { CreateOrEditEditionModalComponent } from '@app/admin/editions/create-or-edit-edition-modal.component';
import { EditionsComponent } from '@app/admin/editions/editions.component';
import { InstallComponent } from '@app/admin/install/install.component';
import { CreateOrEditLanguageModalComponent } from '@app/admin/languages/create-or-edit-language-modal.component';
import { EditTextModalComponent } from '@app/admin/languages/edit-text-modal.component';
import { LanguageTextsComponent } from '@app/admin/languages/language-texts.component';
import { LanguagesComponent } from '@app/admin/languages/languages.component';
import { MaintenanceComponent } from '@app/admin/maintenance/maintenance.component';
import { CreateOrEditUnitModalComponent } from '@app/admin/organization-units/create-or-edit-unit-modal.component';
import { OrganizationTreeComponent } from '@app/admin/organization-units/organization-tree.component';
import { OrganizationUnitMembersComponent } from '@app/admin/organization-units/organization-unit-members.component';
import { OrganizationUnitsComponent } from '@app/admin/organization-units/organization-units.component';
import { CreateOrEditRoleModalComponent } from '@app/admin/roles/create-or-edit-role-modal.component';
import { RolesComponent } from '@app/admin/roles/roles.component';
import { HostSettingsComponent } from '@app/admin/settings/host-settings.component';
import { TenantSettingsComponent } from '@app/admin/settings/tenant-settings.component';
import { EditionComboComponent } from '@app/admin/shared/edition-combo.component';
import { FeatureTreeComponent } from '@app/admin/shared/feature-tree.component';
import { OrganizationUnitsTreeComponent } from '@app/admin/shared/organization-unit-tree.component';
import { PermissionComboComponent } from '@app/admin/shared/permission-combo.component';
import { PermissionTreeComponent } from '@app/admin/shared/permission-tree.component';
import { RoleComboComponent } from '@app/admin/shared/role-combo.component';
import { InvoiceComponent } from '@app/admin/subscription-management/invoice/invoice.component';
import { SubscriptionManagementComponent } from '@app/admin/subscription-management/subscription-management.component';
import { CreateTenantModalComponent } from '@app/admin/tenants/create-tenant-modal.component';
import { EditTenantModalComponent } from '@app/admin/tenants/edit-tenant-modal.component';
import { TenantFeaturesModalComponent } from '@app/admin/tenants/tenant-features-modal.component';
import { TenantsComponent } from '@app/admin/tenants/tenants.component';
import { UiCustomizationComponent } from '@app/admin/ui-customization/ui-customization.component';
import { CreateOrEditUserModalComponent } from '@app/admin/users/create-or-edit-user-modal.component';
import { EditUserPermissionsModalComponent } from '@app/admin/users/edit-user-permissions-modal.component';
import { ImpersonationService } from '@app/admin/users/impersonation.service';
import { UsersComponent } from '@app/admin/users/users.component';
import {DeviceActivationComponent} from "@app/admin/device-activation/device-activation.component";
import {CreateOrEditDeviceActivationModalComponent} from "@app/admin/device-activation/create-or-edit-device-activation-modal.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        FileUploadModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        AdminRoutingModule,
        UtilsModule,
        AppCommonModule,
        TableModule,
        PaginatorModule,
        PrimeNgFileUploadModule,
        AutoCompleteModule,
        EditorModule,
        InputMaskModule
    ],
    declarations: [
        UsersComponent,
        PermissionComboComponent,
        RoleComboComponent,
        CreateOrEditUserModalComponent,
        EditUserPermissionsModalComponent,
        PermissionTreeComponent,
        FeatureTreeComponent,
        OrganizationUnitsTreeComponent,
        RolesComponent,
        CreateOrEditRoleModalComponent,
        AuditLogsComponent,
        AuditLogDetailModalComponent,
        EntityChangeDetailModalComponent,
        HostSettingsComponent,
        InstallComponent,
        MaintenanceComponent,
        EditionsComponent,
        CreateOrEditEditionModalComponent,
        LanguagesComponent,
        LanguageTextsComponent,
        CreateOrEditLanguageModalComponent,
        TenantsComponent,
        CreateTenantModalComponent,
        EditTenantModalComponent,
        TenantFeaturesModalComponent,
        CreateOrEditLanguageModalComponent,
        EditTextModalComponent,
        OrganizationUnitsComponent,
        OrganizationTreeComponent,
        OrganizationUnitMembersComponent,
        CreateOrEditUnitModalComponent,
        TenantSettingsComponent,
        HostDashboardComponent,
        EditionComboComponent,
        InvoiceComponent,
        SubscriptionManagementComponent,
        AddMemberModalComponent,
        DemoUiComponentsComponent,
        DemoUiDateTimeComponent,
        DemoUiSelectionComponent,
        DemoUiFileUploadComponent,
        DemoUiInputMaskComponent,
        DemoUiEditorComponent,
        UiCustomizationComponent,
        DeviceActivationComponent,
        CreateOrEditDeviceActivationModalComponent
    ],
    exports: [
        AddMemberModalComponent
    ],
    providers: [
        ImpersonationService
    ]
})
export class AdminModule { }
