import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent implements OnInit {
  @Input() isVisible!: boolean;
  @Input() title!: string;
  @Input() description!: string;
  @Input() name!: string;
  @Input() content!: string;
  @Input() text!: string;
  @Input() textButtonCancel!: string;
  @Input() hiddenBtnOK = false;
  @Input() hiddenContent = false;
  @Input() isConfirmCancel = true;
  @Input() isLock = false;
  @Input() isCancelLeave = false;
  @Input() isDelete = false;
  @Input() isNotAllowedCreate = false;
  @Input() isPartnerCodeErr = false;
  @Input() isPermissionCodeErr = false;
  @Output() clickCancel = new EventEmitter();
  @Output() callBack = new EventEmitter();
  @Input() recordId!: string;

  constructor() {
  }

  ngOnInit() {
  }

  openModal() {

  }

  handleCancelModal() {
    this.clickCancel.emit();
  }

  handleOkModal() {
    this.callBack.emit(this.recordId);
  }

  handleDelete() {
    this.callBack.emit();
  }

}
