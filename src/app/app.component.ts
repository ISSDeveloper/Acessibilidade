import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  title = 'acessibilidade';
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: ['no']
    })
  }

  public submit(): void {
    console.log(this.form.getRawValue())
  }
}
