import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@wilder\.school$/;
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'must end with @wilder.school'
        }
    };

    return !valid ? errors : null;
}
