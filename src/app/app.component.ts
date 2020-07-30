  
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first-task';
  public form: FormGroup;
  public blogs =[];

constructor(public _formBuilder: FormBuilder) {
  this.form = this._formBuilder.group(
    {
      title: ['', Validators.required],
      content: ['', Validators.required],
    }
  );
}

onSubmit() {
  console.log(this.form.value);
  
  this.blogs.push(this.form.value)

  
}

}
