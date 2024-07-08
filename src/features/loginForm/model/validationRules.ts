export const vallidationEmail = (v: string): boolean | string => {
  return (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      v
    ) || 'Incorrect email'
  )
}

export const vallidationPassword = (v: string): boolean | string => {
  return v.length > 2 || 'Incorrect password'
}
