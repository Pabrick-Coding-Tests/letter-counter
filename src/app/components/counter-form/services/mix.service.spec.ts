import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { MixService } from './mix.service';

describe('MixService', () => {
  let service: MixService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserDynamicTestingModule
      ],
      declarations: [ MixService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MixService();
    /*
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    */
  });
/*
  it('should create', () => {
    expect(service).toBeTruthy();
  });
*/
});
