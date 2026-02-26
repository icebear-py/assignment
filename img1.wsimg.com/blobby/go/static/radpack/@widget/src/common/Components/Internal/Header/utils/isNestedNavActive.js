import { some } from 'lodash';

export default function isNestedNavActive(navigation) {
  return some(navigation, { active: true });
}
