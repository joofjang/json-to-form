import {Component, Input, OnInit} from '@angular/core';
import {FormGroupData} from "../input-form/form-group-data.interface";

@Component({
  selector: 'app-mirror-form',
  templateUrl: './mirror-form.component.html',
  styleUrls: ['./mirror-form.component.css']
})
export class MirrorFormComponent implements OnInit {

  @Input() formGroupData : FormGroupData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
