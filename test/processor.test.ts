import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach((): void => {
  user = new User('Alice', 'Ott', '554455', 'Eesti')
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
