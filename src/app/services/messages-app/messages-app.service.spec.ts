import { TestBed } from '@angular/core/testing';

import { MessagesAppService } from './messages-app.service';

describe('MessagesAppService', () => {
  let service: MessagesAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
