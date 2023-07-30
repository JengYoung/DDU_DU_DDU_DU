export type TRegisterKeys = 'id' | 'password' | 'passwordConfirm'

export type TRegisterState = Record<TRegisterKeys, string>

export type TRegisterFocusState = Record<TRegisterKeys, boolean>