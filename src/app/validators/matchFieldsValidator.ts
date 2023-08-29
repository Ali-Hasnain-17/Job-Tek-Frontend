import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchFieldsValidator(
  field1: string,
  field2: string
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const field1Value = control.get(field1)?.value;
    const field2Value = control.get(field2)?.value;

    if (field1Value !== field2Value) {
      return { matchFields: true };
    }

    return null;
  };
}
