import { IModalScenarios } from '../interfaces/IScenarios'

export const modalScenarios: IModalScenarios = {
  continues: 'You defeated',
  mug: name => `You mugged${name} but their wallet was empty`,
  hosp: 'You hospitalized',
  leave: 'You defeated',
  escape: 'You escaped',
  stalemated: 'You stalemated'
}
