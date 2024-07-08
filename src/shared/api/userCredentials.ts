import { DB_BASE_URL } from '../config'

export const getCredentialsByLogin = async (login: string): Promise<UserCredentials> => {
  let credentials = {} as UserCredentials
  await fetch(DB_BASE_URL + 'profiles/?login=' + login)
    .then(async (d) => {
      await d
        .json()
        .then((d) => {
          credentials = d[0]
        })
        .catch((e) => {
          console.log(e)
        })
    })
    .catch((e) => {
      console.log(e)
    })
  return credentials
}

export const postCredentials = async (login: string, password: string) => {
  await fetch(DB_BASE_URL + 'profiles', {
    method: 'POST',
    body: JSON.stringify({ login: login, password: password })
  }).catch((e) => console.log(e))
}

export type UserCredentials = {
  login: string
  password: string
  id: string
}
