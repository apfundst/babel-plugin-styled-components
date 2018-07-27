import * as t from 'babel-types'
import { isStyled } from '../utils/detectors'
import { useRootNode } from '../utils/options'

export default (path, state) => {
  if (
    t.isCallExpression(path.node.init) &&
    t.isIdentifier(path.node.init.callee) &&
    path.node.init.callee.name === 'require' &&
    path.node.init.arguments &&
    path.node.init.arguments[0] &&
    t.isLiteral(path.node.init.arguments[0]) &&
    path.node.init.arguments[0].value === 'styled-components'
  ) {
    state.styledRequired = path.node.id.name
  } else if (
    useRootNode(state) &&
    t.isCallExpression(path.node.init) &&
    path.node.init.arguments &&
    t.isArrayExpression(path.node.init.arguments[0]) &&
    isStyled(path.node.init.callee, state)
  ) {
    if(!path.node.init.callee.arguments || path.node.init.callee.arguments[0].value !== 'keyframes') {
      console.log('alter transpiled styles', path.node.id.name)
      const stylesArray = path.node.init.arguments[0].elements

      if (stylesArray.length === 1) {
        const element = useRootNode(state) + ' { ' + stylesArray[0].value + ' }';
        path.node.init.arguments[0].elements[0].value = element
      } else {
        const firstElement = useRootNode(state) + ' { ' + stylesArray[0].value
        path.node.init.arguments[0].elements[0].value = firstElement
        const lastElement = stylesArray[stylesArray.length - 1].value + ' }'
        path.node.init.arguments[0].elements[stylesArray.length - 1].value = lastElement
      }
    }


  }
}
