export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  return regex.test(String(email).toLowerCase())
}
