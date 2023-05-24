import * as bcrypt from 'bcrypt'


export const encodePassword =  (password : string) => {
  const salt =  bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt)
}

export const isPasswordCorrect =  (password : string, hash : string) => {
  return bcrypt.compareSync(password, hash)
}
