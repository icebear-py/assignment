import * as boldIcons from '../../../../IconPacks/boldOutline';
import keyframes from './keyframes';

const lineAnimation = 'swing-left 1.5s infinite';
export const waterfallSwing = {
  animationIcon: 'hamburger',
  iconPack: boldIcons,
  animationStyle: {
    ['@md']: {
      cursor: 'pointer',
      [':hover']: {
        'path:nth-child(3)': {
          animation: lineAnimation
        },
        'path:nth-child(2)': {
          animation: lineAnimation,
          animationDelay: '0.3s'
        },
        'path:nth-child(1)': {
          animation: lineAnimation,
          animationDelay: '0.6s'
        }
      }
    }
  },
  keyFrame: keyframes.swingLeft
};
