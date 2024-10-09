import { User } from '../src/User'
import { UserBase } from '../src/UserBase'
import { UserEstonia } from '../src/UserEstonia'
import { UserLatvia } from '../src/UserLatvia'
import { KYC } from '../src/KYC'

let userLatvia: UserLatvia
let userLatviaIsYoung: UserLatvia
let userEstonia: UserEstonia
let userEstoniaIsYoung: UserEstonia
let kyc: KYC

beforeEach(() => {
  userLatvia = new UserLatvia('Alex', 'Ott', 20, '124', '33333', 'test')
  userEstonia = new UserEstonia('Alex', 'Ott', 19, '124', '33333', 'test')
  userEstoniaIsYoung = new UserEstonia('Alex', 'Ott', 15, '124', '33333', 'test')
  userLatviaIsYoung = new UserLatvia('Alex', 'Ott', 15, '124', '33333', 'test')
  kyc = new KYC()
})

describe('test for estonia user', () => {
  test('new user mobile', () => {
    expect(userEstonia.mobileIDAuthorization).toBeUndefined()
  })
  test('check adult', () => {
    kyc.activateMobileIDForEstonia(userEstonia)
    expect(userEstonia.mobileIDAuthorization).toBeTruthy()
  })
  test('check is too young', () => {
    expect(() => {
      kyc.activateMobileIDForEstonia(userEstoniaIsYoung)
    }).toThrow('User is too young')
  })
})

describe('test for latvia user', () => {
  test('new user mobile', () => {
    expect(userLatvia.activateEParakstsForLatvia).toBeUndefined()
  })
  test('check adult', () => {
    kyc.activateEParakstsForLatvia(userLatvia)
    expect(userLatvia.activateEParakstsForLatvia).toBeTruthy()
  })
  test('check is too young', () => {
    expect(() => {
      kyc.activateEParakstsForLatvia(userLatviaIsYoung)
    }).toThrow('User is too young')
  })

})
