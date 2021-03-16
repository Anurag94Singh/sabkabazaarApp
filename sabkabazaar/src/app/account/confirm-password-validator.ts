import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ConfirmPasswordValidator {
  static ConfirmPassword(control: AbstractControl): ValidationErrors | null {
    if (control) {
      const passwordCntrl = control.get('password');
      const confirmPasswordCntrl = control.get('confirmPassword');
      const password = passwordCntrl?.value;
      const confirmPassword = confirmPasswordCntrl?.value;

      if (confirmPasswordCntrl?.errors){
        return null;
      }

      if (confirmPassword === password) {
        confirmPasswordCntrl?.setErrors(null);
        return null;
      }
      else {
        confirmPasswordCntrl?.setErrors({ mustMatch: true });
        return ({ mustMatch: true });
      }
    }
    return null;
  }
}
