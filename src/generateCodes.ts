// Function to generate a random four-digit number

export function generateEstoniaCode():string{
  const prefix = 'EST-'
  const randomNumber = Math.floor(1000 + Math.random()*9000)
  return prefix + randomNumber
}

export function generateLatviaCode():string{
  const prefix = 'LVA-'
  const randomNumber = Math.floor(1000 + Math.random()*9000)
  return prefix + randomNumber
}

export function generateLithuaniaCode():string{
  const prefix = 'LTU-'
  const randomNumber = Math.floor(1000 + Math.random()*9000)
  return prefix + randomNumber
}