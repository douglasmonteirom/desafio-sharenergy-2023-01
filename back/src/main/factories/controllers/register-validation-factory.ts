import { EmailValidatorAdapter } from "../../../infra/validator/email-validator-adapter"
import { Validation } from "../../../presentation/protocols/validation"
import { CompareFieldsValidation } from "../../../validation/validators/compare-fields-validation"
import { EmailValidation } from "../../../validation/validators/email-validation"
import { RequiredFieldValidation } from "../../../validation/validators/required-field-validation"
import { ValidationComposite } from "../../../validation/validators/validations-composite"

export const makeRegisterValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirm']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirm'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}