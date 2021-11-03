import {Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormMetaData} from "../form-meta-data.interface";
import {FormGroupData} from "../form-group-data.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnChanges, OnDestroy {
  @Input() formTemplate: FormMetaData[] = [];

  formControlGroup!: FormGroupData[];
  inputForm!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnChanges(): void {
    this.unsubscribeAll();
    this.subscriptions = [];
    this.formControlGroup = [];
    this.inputForm = new FormGroup({});

    for (const form of this.formTemplate) {
      let newControl!: FormControl
      switch (form.type) {
        case 'text':
          if (this.inputForm.contains(form.id) && form.type === 'text') {
            this.inputForm.get(form.id)!.setValue(form.value);
            break;
          }
          newControl = new FormControl(form.value);
          this.subscriptions.push(newControl.valueChanges.subscribe(v => newControl.setValue(v, {emitEvent: false})));
          this.inputForm.addControl(form.id, newControl);
          this.formControlGroup.push({
            ...form,
            formControl: newControl
          });
          break;
        case 'radio':
          if (this.inputForm.contains(form.id)) {
            this.formControlGroup.push({
              ...form,
              formControl: this.inputForm.get(form.id)! as FormControl,
            });
            break;
          }
          newControl = new FormControl("")
          this.subscriptions.push(newControl.valueChanges.subscribe(v => newControl.setValue(v, {emitEvent: false})));
          this.inputForm.addControl(form.id, newControl);
          this.formControlGroup.push({
            ...form,
            formControl: newControl,
          });
          break;
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  private unsubscribeAll() {
    this.subscriptions.forEach(s => {
      if (!s.closed) {
        s.unsubscribe();
      }
    });
  }
}
