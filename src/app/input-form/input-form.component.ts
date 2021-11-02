import {Component, Input, OnChanges} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormMetaData} from "../form-meta-data.interface";
import {FormGroupData} from "./form-group-data.interface";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnChanges {
  @Input() formTemplate: FormMetaData[] = []

  formControlGroup!: FormGroupData[];
  inputForm!: FormGroup;

  constructor() {
  }

  ngOnChanges(): void {
    this.formControlGroup = []
    this.inputForm = new FormGroup({})

    for (const form of this.formTemplate) {
      let newControl!: FormControl
      switch (form.type) {
        case 'text':
          if (this.inputForm.contains(form.id) && form.type === 'text') {
            this.inputForm.get(form.id)!.setValue(form.value);
            break;
          }
          newControl = new FormControl(form.value)
          newControl.valueChanges.subscribe(v => newControl.setValue(v, {emitEvent: false}))
          this.inputForm.addControl(form.id, newControl)
          this.formControlGroup.push({
            ...form,
            formControl: newControl
          })
          break;
        case 'radio':
          if (this.inputForm.contains(form.id)) {
            this.formControlGroup.push({
              ...form,
              formControl: this.inputForm.get(form.id)! as FormControl,
            })
            break;
          }
          newControl = new FormControl("")
          newControl.valueChanges.subscribe(v => newControl.setValue(v, {emitEvent: false}))
          this.inputForm.addControl(form.id, newControl)
          this.formControlGroup.push({
            ...form,
            formControl: newControl,
          })
          break;
      }
    }
  }

}
