import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormMetaData} from "../form-meta-data.interface";

@Component({
  selector: 'app-schema-input',
  templateUrl: './schema-input.component.html',
  styleUrls: ['./schema-input.component.css']
})
export class SchemaInputComponent implements OnInit {
  @Output('schema') schemaEmitter = new EventEmitter<FormMetaData[]>()

  formSchemaString: string = `{
      "form": [
        {
          "id": "name",
          "value": "",
          "type": "text"
        },
        {
          "id": "email",
          "value": "",
          "type": "text"
        },
        {
          "id": "gender",
          "value": "male",
          "type": "radio"
        },
        {
          "id": "gender",
          "value": "female",
          "type": "radio"
        }
      ]
}`;

  errorMsg: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.parseForm()
  }

  parseForm() {
    try {
      this.errorMsg = '';
      let formSchemaJSON = JSON.parse(this.formSchemaString);
      if (!formSchemaJSON['form'] || !Array.isArray(formSchemaJSON['form'])) {
        throw 'form schema must has property "form" as an array'
      }
      const forms = formSchemaJSON['form']
      forms.forEach(elem => {
        const keys = Object.keys(elem)
        if (!(keys.includes('id')) || !(keys.includes('value')) || !(keys.includes('type'))) {
          throw 'form schema is not valid'
        }
      })

      this.schemaEmitter.emit(forms as FormMetaData[]);
    } catch (e) {
      this.errorMsg = e.message ? e.message : e;
    }
  }
}
