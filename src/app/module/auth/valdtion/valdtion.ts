import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmePasswordValidtors: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('passwordConfirm')?.value;
  if (password !== confirmPassword) {
    return { misMatch: true };
  }
  return null;
};
