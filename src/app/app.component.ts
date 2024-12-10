import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nameTemplateData = '';

  reactiveForm = this.formBuilder.group({
    nameReactiveData: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }
 
  templateSave(): void {
    alert(this.nameTemplateData);
  }
  
  reactiveSave(): void {
    alert(this.reactiveForm.controls.nameReactiveData.value);
  }

}
