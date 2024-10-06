export class User {
  name: string
  surname: string
  phone: string
  address: string
  age: number
  consentGiven: undefined | boolean

  constructor(name: string, surname: string, phone: string, address: string, age: number) {
    this.name = name
    this.surname = surname
    this.phone = phone
    this.address = address
    this.age = age

  }
}
