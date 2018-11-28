import { AbpModule } from 'abp-ng2-module/dist/src/abp.module';
import * as ngCommon from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { QuickSideBarChat } from '@app/shared/layout/chat/QuickSideBarChat';
import { ChatSignalrService } from '@app/shared/layout/chat/chat-signalr.service';
import { LinkAccountModalComponent } from '@app/shared/layout/link-account-modal.component';
import { LinkedAccountsModalComponent } from '@app/shared/layout/linked-accounts-modal.component';
import { LoginAttemptsModalComponent } from '@app/shared/layout/login-attempts-modal.component';
import { ChangePasswordModalComponent } from '@app/shared/layout/profile/change-password-modal.component';
import { ChangeProfilePictureModalComponent } from '@app/shared/layout/profile/change-profile-picture-modal.component';
import { MySettingsModalComponent } from '@app/shared/layout/profile/my-settings-modal.component';
import { SmsVerificationModalComponent } from '@app/shared/layout/profile/sms-verification-modal.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { UtilsModule } from '@shared/utils/utils.module';
import { FileUploadModule } from 'ng2-file-upload';
import { ModalModule, TabsModule, TooltipModule } from 'ngx-bootstrap';
import { FileUploadModule as PrimeNgFileUploadModule, PaginatorModule, ProgressBarModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ImpersonationService } from '@app/admin/users/impersonation.service';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AppCommonModule } from '@app/shared/common/app-common.module';
import { ChatBarComponent } from '@app/shared/layout/chat/chat-bar.component';
import { ChatFriendListItemComponent } from '@app/shared/layout/chat/chat-friend-list-item.component';
import { ChatMessageComponent } from '@app/shared/layout/chat/chat-message.component';
import { FooterComponent } from '@app/shared/layout/footer.component';
import { HeaderComponent } from '@app/shared/layout/header.component';
import { LinkedAccountService } from '@app/shared/layout/linked-account.service';
import { SideBarMenuComponent } from '@app/shared/layout/nav/side-bar-menu.component';
import { TopBarMenuComponent } from '@app/shared/layout/nav/top-bar-menu.component';
import { UserNotificationHelper } from '@app/shared/layout/notifications/UserNotificationHelper';
import { HeaderNotificationsComponent } from '@app/shared/layout/notifications/header-notifications.component';
import { NotificationSettingsModalComponent } from '@app/shared/layout/notifications/notification-settings-modal.component';
import { NotificationsComponent } from '@app/shared/layout/notifications/notifications.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeaderNotificationsComponent,
        SideBarMenuComponent,
        TopBarMenuComponent,
        FooterComponent,
        LoginAttemptsModalComponent,
        LinkedAccountsModalComponent,
        LinkAccountModalComponent,
        ChangePasswordModalComponent,
        ChangeProfilePictureModalComponent,
        MySettingsModalComponent,
        SmsVerificationModalComponent,
        NotificationsComponent,
        ChatBarComponent,
        ChatFriendListItemComponent,
        NotificationSettingsModalComponent,
        ChatMessageComponent
    ],
    imports: [
        ngCommon.CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        TabsModule.forRoot(),
        FileUploadModule,
        AbpModule,
        AppRoutingModule,
        UtilsModule,
        AppCommonModule.forRoot(),
        ServiceProxyModule,
        TableModule,
        PaginatorModule,
        PrimeNgFileUploadModule,
        ProgressBarModule
    ],
    providers: [
        ImpersonationService,
        LinkedAccountService,
        UserNotificationHelper,
        ChatSignalrService,
        QuickSideBarChat
    ]
})
export class AppModule { }
