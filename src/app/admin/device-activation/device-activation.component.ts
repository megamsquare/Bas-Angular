import { NotifyService } from 'abp-ng2-module/dist/src/notify/notify.service';
import { Component, Injector, ViewChild } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/common/app-component-base';
import {
    DeviceActivationCodeDto, DeviceActivationCodeServiceProxy, RoleListDto,
    RoleServiceProxy
} from '@shared/service-proxies/service-proxies';
import { FileDownloadService } from '@shared/utils/file-download.service';
import {Table} from 'primeng/table';
import {CreateOrEditDeviceActivationModalComponent} from '@app/admin/device-activation/create-or-edit-device-activation-modal.component';
import {AppPermission} from "@shared/permissions/app-permissions";

@Component({
    templateUrl: './device-activation.component.html',
    animations: [appModuleAnimation()]
})
export class DeviceActivationComponent extends AppComponentBase {

     @ViewChild('createOrEditDeviceActivationModal') createOrEditDeviceActivationModal: CreateOrEditDeviceActivationModalComponent;
    @ViewChild('dataTable') dataTable: Table;


    //Filters
    selectedPermission = '';
    appPermissions = AppPermission;
    constructor(
        injector: Injector,
        private _deviceActivationCodeService: DeviceActivationCodeServiceProxy,
        private _notifyService: NotifyService,
        private _fileDownloadService: FileDownloadService
    ) {
        super(injector);
    }

    getDeviceActivations(): void {
        this.primengTableHelper.showLoadingIndicator();
        //let permission = this.permission ? this.selectedPermission : undefined;

        this._deviceActivationCodeService.getAll(0, 20).subscribe(result => {
            this.primengTableHelper.records = result.items;
            this.primengTableHelper.totalRecordsCount = result.items.length;
            this.primengTableHelper.hideLoadingIndicator();
        });
    }

    createDeviceActivation(): void {
         this.createOrEditDeviceActivationModal.show();
    }

    delete(deviceActivation: DeviceActivationCodeDto): void {
        let self = this;
        self.message.confirm(
            self.l('DeleteWarningMessage', deviceActivation.code),
            isConfirmed => {
                if (isConfirmed) {
                    this._deviceActivationCodeService.delete(deviceActivation.id).subscribe(() => {
                        this.getDeviceActivations();
                        abp.notify.success(this.l('SuccessfullyDeleted'));
                    });
                }
            }
        );
    }
}
