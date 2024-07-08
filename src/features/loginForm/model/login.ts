import { userStore } from '@/shared/store'
import { getCredentials, postCredentials } from '@/shared/api/index'

/**
 * based on existence emain in db
 */
export const loginOrRegister = async (login: string, password: string): Promise<string> => {
  if (login == null || password == null) return 'Inorrect data'

  const credentials = await getCredentials(login)

  if (credentials == null) {
    await postCredentials(login, password)
    userStore().setUser(login)
    return 'Registered'
  }

  if (credentials.password == password) {
    userStore().setUser(login)
    return 'Logged'
  }
  return 'Incorrect Password'
}
