import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UX2, constants } from '@wsb/guac-widget-core';

const PAGES_WITH_ABS_LINKS = {
  '/idx/wrapper': true
};

class AbsLink extends Component {
  render() {
    const { Link } = UX2.Element;
    const { renderMode, pageRoute, isActive, isNested, ...props } = this.props;

    const isPublishMode = renderMode === constants.renderModes.PUBLISH;
    const convertToAbsolute = isPublishMode && PAGES_WITH_ABS_LINKS[pageRoute];
    let LinkComponent;
    if (!isNested) {
      LinkComponent = isActive ? Link.Active : Link;
    } else {
      LinkComponent = isActive ? Link.NestedActive : Link.Nested;
    }

    return <LinkComponent convertToAbsolute={ convertToAbsolute } role='link' { ...props } />;
  }
}

AbsLink.propTypes = {
  renderMode: PropTypes.string,
  pageRoute: PropTypes.string,
  isActive: PropTypes.bool,
  isNested: PropTypes.bool
};

export default AbsLink;
