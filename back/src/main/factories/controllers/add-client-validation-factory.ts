import { EmailValidatorAdapter } from "../../../infra/validator/email-validator-adapter";
import { Validation } from "../../../presentation/protocols/validation";
import { EmailValidation } from "../../../validation/validators/email-validation";
import { RequiredFieldValidation } from "../../../validation/validators/required-field-validation";
import { ValidationComposite } from "../../../validation/validators/validations-composite";

export const makeAddClientValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'phone', 'adress', 'cpf']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}