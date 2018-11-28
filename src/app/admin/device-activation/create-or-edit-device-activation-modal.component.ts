import { AfterViewChecked, Component, ElementRef, EventEmitter, Injector, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import {
    CreateOrUpdateRoleInput, DeviceActivationCodeCreateDto, DeviceActivationCodeDto, DeviceActivationCodeServiceProxy,
    DeviceActivationCodeUpdateDto,
    PagedResultDtoOfStatusDto,
    RoleEditDto,
    RoleServiceProxy, StatusDto, StatusServiceProxy
} from '@shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap';
import { PermissionTreeComponent } from '@app/admin/shared/permission-tree.component';
import { moment } from '../../../../node_modules/ngx-bootstrap/chronos/test/chain';

@Component({
    selector: 'createOrEditDeviceActivationModal',
    templateUrl: './create-or-edit-device-activation-modal.component.html'
})
export class CreateOrEditDeviceActivationModalComponent extends AppComponentBase implements AfterViewChecked {

    @ViewChild('codeInput') codeInput: ElementRef;
    @ViewChild('statusIdInput') statusIdInput: ElementRef;
    @ViewChild('createOrEditModal') modal: ModalDirective;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active = false;
    saving = false;
    offset = 0;
    pageSize = 20;
    deviceActivationId?: number;
    deviceActivation: DeviceActivationCodeDto = new DeviceActivationCodeDto();
    statusList: StatusDto[] = [];
    constructor(
        injector: Injector,
        private _deviceActivationCodeService: DeviceActivationCodeServiceProxy,
        private _statusService: StatusServiceProxy
    ) {
        super(injector);
    }

    ngAfterViewChecked(): void {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    }

    show(deviceActivationId?: number): void {
        const self = this;
        self.active = true;
        self.deviceActivationId = deviceActivationId;
        console.log(self.deviceActivationId);
        this._statusService.getAll(this.offset, 200).subscribe( (result) => {
            this.statusList = result.items;
        });
if (deviceActivationId !== null && deviceActivationId !== undefined) {
    self._deviceActivationCodeService.get(deviceActivationId).subscribe(result => {
        self.deviceActivation.code = result.code;
        self.deviceActivation.statusId = result.statusId;
        self.modal.show();
    });
        } else {
    self.modal.show();
}


    }

    onShown(): void {
        $(this.codeInput.nativeElement).focus();
    }

    save() : void {
        const self = this;
        this.saving = true;
            const input = new DeviceActivationCodeCreateDto();
            input.id = self.deviceActivationId;
            input.code = self.deviceActivation.code;
            input.statusId = self.deviceActivation.statusId;
                this._deviceActivationCodeService.create(input)
                .finally(() => this.saving = false)
                .subscribe(() => {
                    this.notify.info(this.l('SavedSuccessfully'));
                    this.close();
                    this.modalSave.emit(null);
                });
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
