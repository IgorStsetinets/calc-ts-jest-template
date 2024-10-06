import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach((): void => {
  user = new User('Alice', 'Ott', '554455', 'Eesti', 55)
  processor = new Processor()
})

test('Check new user undefined', (): void => {
  expect(user.consentGiven).toBeUndefined()
})

test('Check processor approve', (): void => {
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)
})

test('Check processor verify', (): void => {
  processor.givenConsent(user)
  expect(processor.checkConsent(user)).toBeTruthy()
})

test('Check processor negative', (): void => {
  expect(processor.checkConsent(user)).toBeFalsy()
})

test('User younger than 18 cannot give consent', () => {
  user.age = 17
  const canGiveConsent = processor.checkUserAge(user)
  expect(canGiveConsent).toBe(false)
})

test('User older than 18 can give consent', () => {
  user.age = 19
  const canGiveConsent = processor.checkUserAge(user)
  expect(canGiveConsent).toBe(true)
})

test('Method revokeConsent correctly revokes consent', () => {
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)

  processor.revokeConsent(user)
  expect(user.consentGiven).toBe(false)

})
