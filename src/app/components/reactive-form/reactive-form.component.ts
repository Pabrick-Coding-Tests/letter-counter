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
  public result: Array<string>;

  constructor(private mixService: MixService) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      string1: new FormControl(''),
      string2: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    if (form.value.string1 || form.value.string2) {
      const solution = this.mixService.mix(form.value.string1, form.value.string2);
      console.log(solution);
      this.result = solution.replace(/[/]/g, '/*').split('*');
    } else {
      alert('You should write something in the inputs first!');
    }
  }

}
