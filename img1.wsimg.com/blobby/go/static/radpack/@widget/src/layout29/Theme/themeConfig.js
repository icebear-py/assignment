import { constants } from '@wsb/guac-widget-core';
import { COMMON_BUTTON_CONFIG } from '../../common/constants';
import imageToHeaderTreatments from '../../common/utils/imageToHeaderTreatments';
import { IMAGE, VIDEO, NONE } from '../../common/constants/mediaTypes';

const { colorPackCategories, buttons } = constants;
const { LIGHT, LIGHT_ALT, LIGHT_COLORFUL, DARK, DARK_ALT, DARK_COLORFUL, COLORFUL } =
  constants.paintJobs;

const id = 'layout29';
const imageTreatments = {
  Fill: 'category-default'
};

const defaultHeaderTreatment = 'Fill';
const headerTreatments = imageToHeaderTreatments(imageTreatments);
const headerTreatmentsConfig = {
  defaultHeaderTreatment,
  imageTreatments,
  headerTreatments,
  mediaSupport: {
    [NONE]: [defaultHeaderTreatment],
    [IMAGE]: Object.keys(imageTreatments),
    [VIDEO]: [defaultHeaderTreatment]
  }
};
const defaultPaintJob = LIGHT;

export default {
  id,
  name: 'sideline',
  packs: {
    color: '#5572B0',
    font: 'raleway'
  },
  logo: {
    font: 'primary'
  },
  packCategories: {
    color: colorPackCategories.NEUTRAL
  },
  headerProperties: {
    alignmentOption: 'center'
  },
  headerTreatmentsConfig,
  paintJobs: [LIGHT, LIGHT_ALT, LIGHT_COLORFUL, COLORFUL, DARK_COLORFUL, DARK_ALT, DARK],
  defaultPaintJob,
  applyDefaultPaintJob: true,
  buttons: {
    primary: {
      fill: buttons.fills.GHOST,
      shape: buttons.shapes.SQUARE,
      decoration: buttons.decorations.NONE,
      shadow: buttons.shadows.NONE,
      color: buttons.colors.HIGHCONTRAST
    },
    secondary: {
      fill: buttons.fills.OPEN,
      decoration: buttons.decorations.UNDERLINE_WITH_ARROW,
      shadow: buttons.shadows.NONE,
      color: buttons.colors.PRIMARY
    },
    ...COMMON_BUTTON_CONFIG
  },
  defaultNavFamily: 'none'
};
