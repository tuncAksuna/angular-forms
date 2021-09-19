import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ImageExtensionValidator {

    static isValidExtension(control: AbstractControl): ValidationErrors | null {

        const controlValue = control.value as string;
        if (controlValue.endsWith('.jpg') || controlValue.endsWith('.png') || controlValue.endsWith('.jpeg') || controlValue.endsWith('.svg')
            || (controlValue.endsWith('PNG')) || (controlValue.endsWith('JPG')) || (controlValue.endsWith('.SVG')) || (controlValue.endsWith('.JPEG'))) {
                return null;
             }
        else {
            return {
                wrongExtension: true
            }
        }
    }
}