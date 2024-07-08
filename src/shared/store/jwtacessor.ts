import { decodeJwt, SignJWT, base64url } from 'jose'
import type { User } from './userStore'

const private_key = import.meta.env.VITE_PRIVATE_KEY.slice(0, 43)
const secret = base64url.decode(private_key)

export const getUserInfo = (): User => {
  const jwt = localStorage.getItem('jwt')
  if (!jwt) return {} as User
  const jwtDecrypted = decodeJwt(jwt)
  if (jwtDecrypted.exp && Math.floor(Date.now() / 1000) > jwtDecrypted.exp) {
    resetUserInfo()
    return {} as User
  }
  const user = jwtDecrypted.sub
  return { login: user } as User
}

export const setUserInfo = async (user: User) => {
  const jwt = await new SignJWT()
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30s')
    .setSubject(user.login)
    .sign(secret)
  localStorage.setItem('jwt', jwt)
  console.log(private_key)
  console.log(jwt)
}

export const resetUserInfo = () => {
  localStorage.removeItem('jwt')
}
