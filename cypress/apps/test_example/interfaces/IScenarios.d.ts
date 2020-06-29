import { IModal } from './IModules'

export interface IModalScenarios {
  continues: string
  mug: (name: string) => void
  hosp: string
  leave: string
  escape: string
  stalemated: string
}

export interface IWinFight extends IModal {
  withFocus?: boolean
}
