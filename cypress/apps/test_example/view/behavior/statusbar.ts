import checkPosition from '../../../../utils/checkPosition'

import { statusBarWrap, statusBarIcon, statusBarDesc } from '../selectors/statusbar'

import { ICheckStatusBar } from '../../interfaces/IView'
import { TPersonTypes } from '../../interfaces/IController'
import { STATUS_BAR_COORDS } from '../constants/coords'
import checkStyles from '../../../../utils/checkStyles'

export const checkStatusBarWrap = ({ userType }: { userType: TPersonTypes }) => {
  const wrap = () => statusBarWrap(userType)

  wrap().should('have.length', 1)
  checkStyles({
    elemNode: wrap(),
    expectations: {
      bottom: '0px',
      width: '323px',
      'z-index': '100000'
    }
  })

  checkPosition({ nodeElement: wrap, ...STATUS_BAR_COORDS[userType].wrap })
}

export const checkStatusBarIcon = ({ userType }: { userType: TPersonTypes }) => {
  const icon = () => statusBarIcon(userType)

  icon().should('have.length', 1)
  checkStyles({
    elemNode: icon(),
    expectations: {
      height: '30px',
      'flex-grow': '0',
      'flex-shrink': '0',
      'flex-basis': '57px',
      'background-color': 'rgb(204, 204, 204)'
    }
  })

  checkPosition({ nodeElement: icon, ...STATUS_BAR_COORDS[userType].icon })
}

export const checkStatusBarDesc = ({ userType }: { userType: TPersonTypes }) => {
  const desc = () => statusBarDesc(userType)

  checkStyles({
    elemNode: desc(),
    expectations: {
      color: 'rgb(255, 255, 255)',
      height: '30px',
      'padding-left': '15px',
      'text-shadow': 'rgba(0, 0, 0, 0.65) 1px 1px 2px',
      'background-color': 'rgb(170, 170, 170)'
    }
  })

  checkPosition({ nodeElement: desc, ...STATUS_BAR_COORDS[userType].desc })
}

export const checkStatusBar = (config: ICheckStatusBar) => {
  const { userType } = config

  cy.log(`**[START] Check StatusBar: ${userType}**`)

  checkStatusBarWrap({ userType })
  checkStatusBarIcon({ userType })
  checkStatusBarDesc({ userType })

  cy.log(`**[END] Check StatusBar: ${userType}**`)
}
