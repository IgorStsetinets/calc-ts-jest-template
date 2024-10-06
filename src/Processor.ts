import { User } from './User'

export class Processor {
  givenConsent(user: User): void {
    user.consentGiven = true
  }

  revokeConsent(user: User): void {
    user.consentGiven = false //
  }

  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }

  checkUserAge(user: User): boolean {
    if (user.age < 18) {
      return false
    } else {
      return true
    }

  }
}
