import checkPosition from '../../../../utils/checkPosition'

import { modelWrap, modelLayers, modelContainer, modelImage } from '../selectors/model'

import { ICheckModel, TGenderTypes } from '../../interfaces/IView'
import { TPersonTypes } from '../../interfaces/IController'
import { MODEL_COORDS } from '../constants/coords'
import checkStyles from '../../../../utils/checkStyles'

export const checkModelWrap = ({ userType }: { userType: TPersonTypes }) => {
  const wrap = () => modelWrap(userType)

  wrap().should('have.length', 1)
  checkStyles({
    elemNode: wrap(),
    expectations: {
      width: '324px',
      height: '455px',
      'background-image': 'url("https://google.com/test.jpg")',
      'border-top-color': 'rgb(255, 255, 255)',
      'border-right-color': 'rgb(251, 251, 251)',
      'border-bottom-color': 'rgb(237, 237, 237)',
      'border-left-color': 'rgb(242, 242, 242)'
    }
  })

  checkPosition({ nodeElement: wrap, ...MODEL_COORDS[userType].wrap })
}

export const checkModelLayers = ({ userType }: { userType: TPersonTypes }) => {
  const layers = () => modelLayers(userType)

  layers().should('have.length', 1)
  checkStyles({
    elemNode: layers(),
    expectations: {
      width: '240px',
      top: '0px',
      'padding-top': '20px',
      'z-index': '1',
      position: 'absolute'
    }
  })

  checkPosition({ nodeElement: layers, ...MODEL_COORDS[userType].layers })
}

export const checkModelContainer = ({ userType }: { userType: TPersonTypes }) => {
  const container = () => modelContainer(userType)

  container().should('have.length', 1)
  checkStyles({
    elemNode: container(),
    expectations: {
      'z-index': '2',
      position: 'absolute'
    }
  })

  checkPosition({ nodeElement: container, ...MODEL_COORDS[userType].container })
}

export const checkModelImage = ({ userType, gender }: { userType: TPersonTypes; gender: TGenderTypes }) => {
  const image = () => modelImage(userType)

  image().should('have.length', 1)
  image().styles('user-select').should('eq', 'none')
  image().should('have.attr', 'src', `/images/v2/attack/models/${gender}_model.png`)

  checkPosition({ nodeElement: image, ...MODEL_COORDS[userType].image })
}

export const checkModel = (config: ICheckModel) => {
  const { type, gender } = config

  cy.log(`**[START] Check Model: ${type}**`)

  checkModelWrap({ userType: type })
  checkModelLayers({ userType: type })
  checkModelContainer({ userType: type })
  checkModelImage({ userType: type, gender })

  cy.log(`**[END] Check Model: ${type}**`)
}
