import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SchemaInputComponent } from './schema-input/schema-input.component';
import { MirrorFormComponent } from './mirror-form/mirror-form.component';
import { FormElemComponent } from './form-elem/form-elem.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    SchemaInputComponent,
    MirrorFormComponent,
    FormElemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
