import { User } from './User'
import { UserEstonia } from './UserEstonia'
import { UserLatvia } from './UserLatvia'

export class Contract {
  title: string
  signed: boolean

  constructor(title: string) {
    this.title = title
    this.signed = false
  }
  signByEstoniaUser(user: UserEstonia): void {
    if (user.mobileIDAuthorization) {
      this.signed = true
    } else {
      throw new Error('Cannot sign the contract: Mobile ID authorization is not activated')
    }
  }

  signByLatviaUser(user: UserLatvia): void {
    if (user.activateEParakstsForLatvia) {
      this.signed = true
    } else {
      throw new Error('Cant sign contract: EParaksts is not activated')
    }
  }

}
