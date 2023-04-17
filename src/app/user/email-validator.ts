import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // verify email
    const emailRegex = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'L\'email n\'est pas conforme'
        }
    };

    return !valid ? errors : null;
}
