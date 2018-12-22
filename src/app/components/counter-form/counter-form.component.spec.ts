import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { ReactiveFormsModule } from '@angular/forms';

import { CounterFormComponent } from './counter-form.component';
import { MixService } from './services/mix.service';

describe('CounterFormComponent', () => {
  let component: CounterFormComponent;
  let fixture: ComponentFixture<CounterFormComponent>;
  let service: MixService;

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
    service = TestBed.get(MixService);
    fixture.detectChanges();
  });

  it('should create this form', () => {
    expect(component).toBeTruthy();
  });

  it('Test MIX for dummy1', () => {
    const dummy = {
      string1: 'my&friend&Paul has heavy hats! &',
      string2: 'my friend John has many many friends &'
    };
    expect(service.mix(dummy.string1, dummy.string2))
      .toEqual('2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss');
  });

  it('Test MIX for dummy2', () => {
    const dummy = {
      string1: 'mmmmm m nnnnn y&friend&Paul has heavy hats! &',
      string2: 'my frie n d Joh n has ma n y ma n y frie n ds n&'
    };
    expect(service.mix(dummy.string1, dummy.string2))
      .toEqual('1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss');
  });

  it('Test MIX for dummy3', () => {
    const dummy = {
      string1: 'Are the kids at home? aaaaa fffff',
      string2: 'Yes they are here! aaaaa fffff'
    };
    expect(service.mix(dummy.string1, dummy.string2))
      .toEqual('=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh');
  });

});
