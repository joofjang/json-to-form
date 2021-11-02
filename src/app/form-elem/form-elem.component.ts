import {Component, Input, OnInit} from '@angular/core';
import {FormMetaData} from "../form-meta-data.interface";
import {FormGroupData} from "../input-form/form-group-data.interface";

@Component({
  selector: 'app-form-elem',
  templateUrl: './form-elem.component.html',
  styleUrls: ['./form-elem.component.css']
})
export class FormElemComponent implements OnInit {

  @Input() inputGroup: FormGroupData | null = null;
  @Input() idPrefix: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
