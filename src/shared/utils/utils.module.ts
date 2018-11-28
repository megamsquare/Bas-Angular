import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutoFocusDirective } from '@shared/utils/auto-focus.directive';
import { BusyIfDirective } from '@shared/utils/busy-if.directive';
import { ButtonBusyDirective } from '@shared/utils/button-busy.directive';
import { CurrencyInputDirective } from '@shared/utils/currency-input.directive';
import { FileDownloadService } from '@shared/utils/file-download.service';
import { FriendProfilePictureComponent } from '@shared/utils/friend-profile-picture.component';
import { LocalStorageService } from '@shared/utils/local-storage.service';
import { MomentFormatPipe } from '@shared/utils/moment-format.pipe';
import { NormalizeDropdownPositionDirective } from '@shared/utils/normalize-dropdown-position.directive';
import { ValidationMessagesComponent } from '@shared/utils/validation-messages.component';
import { EqualValidator } from '@shared/utils/validation/equal-validator.directive';
import { MinValueValidator } from '@shared/utils/validation/min-value-validator.directive';
import { PasswordComplexityValidator } from '@shared/utils/validation/password-complexity-validator.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        FileDownloadService,
        LocalStorageService
    ],
    declarations: [
        EqualValidator,
        PasswordComplexityValidator,
        MinValueValidator,
        ButtonBusyDirective,
        AutoFocusDirective,
        BusyIfDirective,
        FriendProfilePictureComponent,
        MomentFormatPipe,
        CurrencyInputDirective,
        NormalizeDropdownPositionDirective,
        ValidationMessagesComponent
    ],
    exports: [
        EqualValidator,
        PasswordComplexityValidator,
        MinValueValidator,
        ButtonBusyDirective,
        AutoFocusDirective,
        BusyIfDirective,
        FriendProfilePictureComponent,
        MomentFormatPipe,
        CurrencyInputDirective,
        NormalizeDropdownPositionDirective,
        ValidationMessagesComponent
    ]
})
export class UtilsModule { }
