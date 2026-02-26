import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UX2 } from '@wsb/guac-widget-core';
import Toggle from '../common/Toggle';
import AbsLink from '../../AbsLink';
import isNestedNavActive from '../../utils/isNestedNavActive';

class MobileFlyoutMenu extends Component {
  constructor() {
    super(...arguments);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      open: false || this.props.alwaysOpen
    };
  }

  handleChange(open) {
    this.setState({ open: this.props.alwaysOpen || open });
  }

  render() {
    const { item, styles, domainName, renderMode, pageRoute, alwaysOpen, enableActiveFlyoutMenu } =
      this.props;
    const { open } = this.state;

    return (
      <UX2.Element.Block>
        <Toggle
          { ...this.props }
          style={ styles.link }
          onChange={ this.handleChange }
          data-edit-interactive={ true }
          isActive={ enableActiveFlyoutMenu && isNestedNavActive(item.navigation) }
        >
          <span style={{ pointerEvents: 'none' }}>{ item.name }</span>
          { !alwaysOpen && (
            <UX2.Element.Icon
              icon='chevronDown'
              size='small'
              rotate={ open ? '180' : '0' }
              style={{
                position: 'relative',
                marginLeft: 'xsmall',
                color: 'inherit',
                flexShrink: '0',
                pointerEvents: 'none'
              }}
            />
          ) }
        </Toggle>
        <UX2.Element.List.Nested role='menu' style={ !open ? { display: 'none' } : {} }>
          { item.navigation.map(subItem => {
            const dataWidget = {
              ...(subItem.widgetId ? { 'data-section-jump': subItem.widgetId } : {})
            };

            return (
              <UX2.Element.ListItem
                tag='li'
                key={ subItem.pageId }
                style={ styles.subListItem }
                role='menuitem'
              >
                <AbsLink
                  tag='a'
                  style={{
                    ...styles.sublink,
                    ...(subItem.active ? styles.activeSublink : { fontWeight: 'normal' })
                  }}
                  href={ subItem.href }
                  target={ subItem.target }
                  rel={ subItem.target === '_blank' ? 'noopener' : '' }
                  data-page={ subItem.isSectionLink ? subItem.destinationPageId : subItem.pageId }
                  { ...dataWidget }
                  data-edit-interactive={ true }
                  data-close={ true }
                  renderMode={ renderMode }
                  domainName={ domainName }
                  pageRoute={ pageRoute }
                  data-aid='MOBILE_NAV_SUBLINK'
                  isActive={ subItem.active }
                  groupType='Sub'
                >
                  <span>{ subItem.name }</span>
                </AbsLink>
              </UX2.Element.ListItem>
            );
          }) }
        </UX2.Element.List.Nested>
      </UX2.Element.Block>
    );
  }
}

MobileFlyoutMenu.propTypes = {
  item: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  domainName: PropTypes.string,
  renderMode: PropTypes.string,
  pageRoute: PropTypes.string,
  alwaysOpen: PropTypes.bool,
  enableActiveFlyoutMenu: PropTypes.bool
};

export default MobileFlyoutMenu;
