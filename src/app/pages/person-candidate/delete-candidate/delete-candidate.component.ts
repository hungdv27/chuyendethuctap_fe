import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CandidateListService } from 'src/app/service/candidate-list';

@Component({
  selector: 'app-delete-candidate',
  templateUrl: './delete-candidate.component.html',
  styleUrls: ['./delete-candidate.component.less'],
})
export class DeleteCandidateComponent implements OnInit {
  @Input() dataFromParent!: any;
  listDelet: any;
  // Form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private notification: NzNotificationService,
    private candidateListService: CandidateListService,
    private router: Router
  ) {}

  @Input() isVisible: boolean = false;
  @Output() isVisibleChange: EventEmitter<any> = new EventEmitter();
  @Output() clickCancel = new EventEmitter();
  @Output() clickSave = new EventEmitter();
  ngOnInit(): void {
    console.log('sss', this.dataFromParent);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
  Cancel() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
  delete() {
    console.log('lllll', this.dataFromParent);
    this.candidateListService.deleteData(this.dataFromParent).subscribe({
      next: (value) => {
        this.listDelet = value;
        console.log(this.listDelet);
        this.notification.blank('Thông báo', 'Xóa ứng viên thành công', {
          nzStyle: {
            width: '300px',
            marginLeft: '-265px',
            color: '#56CA00',
          },
          nzClass: 'test-class',
        });

        this.isVisible = false;
        // debugger;
        this.router.navigate(['person-candidate']);
      },
    });
  }
}
