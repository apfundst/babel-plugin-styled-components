import styled from 'styled-components';




const SLButton = styled.button.attrs({
  'data-test': props => props.qaDataTarget
}).withConfig({
  displayName: 'Button__SLButton'
})(['display:flex;align-items:center;justify-content:center;padding:8px 14px;width:', ';background:', ';border:', ' ', ';border-radius:', ';color:', ';cursor:pointer;font-size:0.875rem;font-weight:600;outline:none;text-align:center;transition:all 0.08s ease;vertical-align:middle;white-space:nowrap;touch-action:manipulation;&:disabled{background-color:', ';cursor:not-allowed;opacity:0.6;}&:hover:not([disabled]),&:focus:not([disabled]),&:active:not([disabled]){background-color:', ';color:', ';}i{margin-right:6px;font-size:16px;}'], props => props.theme.width, props => props.theme.type === 'filled' && styleColor || 'unset', borderStyle, props => props.theme.type !== 'filled' && styleColor, borderRadius, props => props.theme.type === 'outlined' ? styleColor : styleFontColor, styleColorDisabled, styleColorHover, styleFontColorHover);

const fadeIn = keyframes(['from{opacity:0;}to{opacity:0.6;}']);

