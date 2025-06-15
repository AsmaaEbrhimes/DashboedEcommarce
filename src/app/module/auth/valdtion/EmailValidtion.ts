import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const RequierdEmail: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;

  if (!value) {
    return { required: true };
  }

  const regularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regularEmail.test(value)) {
    return { invalidEmail: true };
  }

  return null;
}
