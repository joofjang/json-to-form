import { Component } from '@angular/core';
import {FormMetaData} from "./form-meta-data.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-to-form';

  formSchema: FormMetaData[] = []

  passFormSchema(newFormSchema: FormMetaData[]) {
    this.formSchema = newFormSchema
  }
}
