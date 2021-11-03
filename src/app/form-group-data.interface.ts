import {FormMetaData} from "./form-meta-data.interface";
import {FormControl} from "@angular/forms";

export interface FormGroupData extends FormMetaData {
    formControl: FormControl
}
