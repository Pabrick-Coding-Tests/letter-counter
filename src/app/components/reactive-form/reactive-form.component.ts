import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MixService } from './services/mix.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {

  public reactiveForm: FormGroup;

  constructor(private mixService: MixService) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      string1: new FormControl(''),
      string2: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    this.mixService.mix(form.value.string1, form.value.string2);
    console.log('Valid?', form.valid);
    console.log('Str1', form.value.string1);
    console.log('Str2', form.value.string2);
  }

}
