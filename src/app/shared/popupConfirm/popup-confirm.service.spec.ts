import { TestBed } from '@angular/core/testing';

import { PopupConfirmService } from './popup-confirm.service';

describe('PopupConfirmService', () => {
  let service: PopupConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
