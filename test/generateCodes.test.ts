import { generateEstoniaCode, generateLatviaCode, generateLithuaniaCode } from '../src/generateCodes'

generateEstoniaCode()
generateLatviaCode()
generateLithuaniaCode()

describe('Estonia code generation',() => {

  test('should start with EST-', () => {
    const code = generateEstoniaCode()
    expect(code.startsWith('EST-')).toBe(true)
  })

  test('should be 8 characters long and contain four digits after the prefix',() =>{
    const code = generateEstoniaCode()
    expect(code.length).toBe(8)
    expect(/EST-\d{4}/.test(code)).toBe(true)
  })

})

describe('Latvia code generation',() => {

  test('should start with LVA-',() => {
    const code = generateLatviaCode()
    expect(code.startsWith('LVA-')).toBe(true)
  })

  test('should be 8 characters long and contain four digits after the prefix',() => {
    const code = generateLatviaCode()
    expect(code.length).toBe(8)
    expect(/LVA-\d{4}/.test(code)).toBe(true)
  })

})

describe('Lithuania code generation',() =>{

  test('should start with LTU-',() => {
    const code = generateLithuaniaCode()
    expect(code.startsWith('LTU-')).toBe(true)
  })

    test('should be 8 characters long and contain four digits after the prefix',() => {
      const code = generateLithuaniaCode()
      expect(code.length).toBe(8)
      expect(/LTU-\d{4}/.test(code)).toBe(true)
    })

})
