import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { ReactiveFormsModule } from '@angular/forms';

import { CounterFormComponent } from './counter-form.component';

describe('CounterFormComponent', () => {
  let component: CounterFormComponent;
  let fixture: ComponentFixture<CounterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserDynamicTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ CounterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create this form', () => {
    expect(component).toBeTruthy();
  });
});
