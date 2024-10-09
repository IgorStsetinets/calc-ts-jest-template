import { Contract } from '../src/Contract'
import { UserEstonia } from '../src/UserEstonia'
import { UserLatvia } from '../src/UserLatvia'

let contract: Contract
let estonianUser: UserEstonia
let latvianUser: UserLatvia

beforeEach(() => {
  contract = new Contract('Test contract')
  estonianUser = new UserEstonia('Alex', 'Ott', 19, '124', '33333', 'test')
  latvianUser = new UserLatvia('Alex', 'Ott', 20, '124', '33333', 'test')
})

describe('Contract signing tests for estonianUser', () => {
  test('Contract should not be signed by default', () => {
    expect(contract.signed).toBe(false)
  })
  test('Estonian user should be able to sign after Mobile ID authorization', () => {
    estonianUser.mobileIDAuthorization = true
    contract.signByEstoniaUser(estonianUser)
    expect(contract.signed).toBe(true)
  })

  test('Estonian user cannot sign without Mobile ID authorization', () => {
    expect(() => {
      contract.signByEstoniaUser(estonianUser)
    }).toThrow('Cannot sign the contract: Mobile ID authorization is not activated')
  })
})

describe('Contract signing tests for latvianUser', () => {
  test('Contract should not be signing by default', () => {
    expect(contract.signed).toBe(false)
  })
  test('Latvian user should be able to sign after EParaksts authorization', () => {
    latvianUser.activateEParakstsForLatvia = true
    contract.signByLatviaUser(latvianUser)
    expect(contract.signed).toBe(true)
  })
  test('Latvian user cannot sign without EParaksts authorization', () => {
    expect(() => {
      contract.signByLatviaUser(latvianUser)
    }).toThrow('Cant sign contract: EParaksts is not activated')
  })

})
