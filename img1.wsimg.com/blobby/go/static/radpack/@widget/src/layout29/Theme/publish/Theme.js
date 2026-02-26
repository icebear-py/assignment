import Default from '../../../common/Themes/Default/Theme';
import { UX2, constants } from '@wsb/guac-widget-core';
import { omit, merge } from 'lodash';
import DataAid from '../../../common/Components/Internal/Header/constants/dataAids.js';
import React from 'react';
import * as modernIcons from '../../../common/IconPacks/modernThinRound';
import * as socialIconPack from '../../../common/IconPacks/SocialIcons/defaultSocialIconPack';
import { waterfallSwing } from '../../../common/Components/Internal/Header/constants/hamIconAnimations';
import { levelFilter } from '../../../common/utils/text';
import { mergeTypographyOverrides } from '../../../common/utils/typography';
import themeConfig from '../themeConfig';

const { Color } = UX2.utils;
const {
  categoryTypes,
  renderModes,
  widgetTypes,
  layers: { Z_INDEX_INLINE_TOOLBAR }
} = constants;
const { PRIMARY, ACCENT, NEUTRAL } = categoryTypes;
const { DISPLAY } = renderModes;
const { HEADER } = widgetTypes;
const sidelineGrey = '#757575';
const sidebarWidth = 320;

const inputStyle = {
  borderRadius: 0,
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 0,
  backgroundColor: 'section',
  paddingVertical: 'small'
};

const typographyShared1 = {
  style: {
    font: 'primary',
    color: 'highContrast',
    fontSize: 'large',
    fontWeight: 'normal',
    letterSpacing: '1.5px',
    textTransform: 'none'
  }
};

function getSearchColor() {
  const { category } = this.base;

  return category === NEUTRAL ? 'ultraLowContrast' : 'lowContrast';
}

class Theme29 extends Default {
  static config = themeConfig;

  static get displayName() {
    return 'Theme29';
  }

  static getMutatorDefaultProps(widgetType, widgetPreset) {
    const defaultProps = super.getMutatorDefaultProps(widgetType, widgetPreset);

    return widgetType === HEADER
      ? {
        ...defaultProps,
        useSocialLinks: true,
        showOverlayOpacityControls: true,
        enableVideoOverlaySlider: true,
        headerTreatmentsConfig: {}
      }
      : defaultProps;
  }

  constructor() {
    super();
    this.mappedValues = {
      ...this.mappedValues,
      colorSidelineGrey: sidelineGrey,

      backgroundColorNeutralOverlay: () => new Color('rgba(99, 99, 99, 0.3)'),
      backgroundColorAccentOverlay: () => new Color('rgba(59, 59, 59, 0.3)'),

      typographyOverrides: {
        LogoAlpha: {
          ...typographyShared1
        },
        HeadingAlpha: {
          style: {
            font: 'primary',
            color: 'highContrast',
            fontSize: 'xxxlarge',
            fontWeight: 'normal',
            letterSpacing: '1.5px',
            textTransform: 'none'
          }
        },
        HeadingBeta: {
          style: {
            font: 'primary',
            color: 'highContrast',
            fontSize: 'xxlarge',
            fontWeight: 'normal',
            letterSpacing: '1.5px',
            textTransform: 'none'
          }
        },
        HeadingGamma: {
          style: {
            font: 'primary',
            color: 'highContrast',
            fontSize: 'xlarge',
            fontWeight: 'normal',
            letterSpacing: '1.5px',
            textTransform: 'none'
          }
        },
        HeadingDelta: {
          ...typographyShared1
        },
        HeadingEpsilon: {
          style: {
            font: 'alternate',
            color: 'lowContrast',
            fontSize: 'small',
            fontWeight: 'bold',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }
        },
        HeadingZeta: props => ({
          ...mergeTypographyOverrides.call(this, 'BodyAlpha', props)
        }),
        BodyAlpha: {
          style: {
            font: 'alternate',
            color: 'section',
            fontSize: 'medium',
            fontWeight: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            ['@md']: {
              fontWeight: 'normal'
            }
          }
        },
        BodyBeta: {
          style: {
            font: 'alternate',
            color: 'section',
            fontSize: 'large',
            fontWeight: 'normal',
            letterSpacing: '1px',
            textTransform: 'none'
          }
        },
        DetailsGamma: {
          style: {
            font: 'alternate',
            color: 'lowContrast',
            fontSize: 'xsmall',
            fontWeight: 'normal',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }
        },
        NavAlpha: {
          style: {
            'font': 'alternate',
            'color': this.category === NEUTRAL ? 'sidelineGrey' : NEUTRAL,
            'fontSize': 'medium',
            'fontWeight': 'normal',
            'letterSpacing': '1px',
            'textTransform': 'none',
            ':hover': {
              color: 'highlightHover'
            },
            ':active': {
              color: 'highlight'
            }
          },
          active: {
            style: {
              'fontWeight': 'bold',
              'color': 'highlight',
              ':hover': {
                color: 'highlightHover'
              }
            }
          }
        },
        SubNavAlpha: {
          style: {
            'font': 'alternate',
            'color': sidelineGrey,
            'fontSize': 'medium',
            'fontWeight': 'normal',
            'letterSpacing': '1px',
            'textTransform': 'none',
            ':hover': {
              color: 'highlightHover'
            },
            ':active': {
              color: 'highlight'
            }
          },
          active: {
            style: {
              'fontWeight': 'bold',
              'color': 'highlight',
              ':hover': {
                color: 'highlightHover'
              }
            }
          }
        },
        NavBeta: {
          style: {
            'font': 'alternate',
            'color': 'highContrast',
            'fontSize': 'medium',
            'fontWeight': 'normal',
            'letterSpacing': '1px',
            'textTransform': 'none',
            ':hover': {
              color: 'highlightHover'
            },
            ':active': {
              color: 'highlight'
            }
          }
        },
        SubNavBeta: {
          style: {
            'font': 'alternate',
            'color': sidelineGrey,
            'fontSize': 'medium',
            'fontWeight': 'normal',
            'letterSpacing': '1px',
            'textTransform': 'none',
            ':hover': {
              color: 'highlightHover'
            },
            ':active': {
              color: 'highlight'
            }
          }
        },
        InputAlpha: props => {
          return merge(mergeTypographyOverrides.call(this, 'BodyAlpha', props), {
            style: {
              color: 'input',
              ['@xs-only']: {
                fontSize: 'medium' // 16px
              }
            }
          });
        },
        ButtonAlpha: {
          style: {
            font: 'alternate',
            fontSize: 'xsmall',
            fontWeight: 'bold',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }
        }
      }
    };
  }

  /* Basic elements */
  Heading(props) {
    const { tag, level } = props;
    let style;
    const typography = {
      5: 'DetailsBeta'
    }[levelFilter({ tag, level })];

    return super.Heading(this.merge({ style, typography }, props));
  }

  HeadingMajor(props) {
    return super.HeadingMajor(this.merge({ typography: 'HeadingGamma' }, props));
  }

  DisplayHeading(props) {
    return super.DisplayHeading(this.merge({ typography: 'HeadingGamma' }, props));
  }

  Text(props) {
    return super.Text(this.merge({ typography: 'BodyAlpha' }, props));
  }

  Input(props) {
    return super.Input(
      this.merge(
        {
          style: {
            ...inputStyle,
            // Dials Based
            borderColor: 'input',
            // Theme Based
            borderWidth: 'xsmall',
            paddingHorizontal: 'small',
            // Static
            borderStyle: 'solid'
          },
          section: 'alt'
        },
        props
      )
    );
  }

  InputSelect(props) {
    return super.InputSelect(
      this.merge(
        {
          style: {
            ...inputStyle,
            paddingVertical: 0,
            // Theme Based
            borderWidth: 'xsmall',
            // Static
            borderStyle: 'solid'
          },
          section: 'alt'
        },
        props
      )
    );
  }

  InputFloatLabel({ category, ...props }) {
    const { widgetPreset, section } = this.base;

    return super.InputFloatLabel(
      this.merge(
        widgetPreset === 'subscribe3'
          ? {
            category: section === 'overlay' ? NEUTRAL : category,
            section: 'alt'
          }
          : {},
        props
      )
    );
  }

  InputFloatLabelLabel(props) {
    return super.InputFloatLabelLabel(
      this.merge(
        {
          style: {
            left: '16px',
            top: '33%'
          }
        },
        props
      )
    );
  }

  InputTextArea(props) {
    return super.InputTextArea(
      this.merge(
        {
          rows: 6
        },
        props
      )
    );
  }

  InputSelectElement(props) {
    return super.InputSelectElement(
      this.merge(
        {
          style: {
            paddingVertical: 'small',
            paddingHorizontal: 'small'
          }
        },
        props
      )
    );
  }

  /* Icon */
  Icon(props) {
    return super.Icon(
      this.merge(
        {
          iconPack: { ...modernIcons, ...socialIconPack }
        },
        props
      )
    );
  }

  IconHamburger(props) {
    return super.IconHamburger(
      this.merge(
        {
          animation: waterfallSwing
        },
        props
      )
    );
  }

  UtilitiesMenuIcon(props) {
    if (props['data-aid'] === DataAid.SEARCH_ICON_RENDERED_OPEN) {
      return this.OpenSearchIcon(props);
    }

    return super.UtilitiesMenuIcon(
      this.merge(
        {
          style: {
            ['@xs-only']: {
              marginLeft: 0
            },
            ['@md-only']: {
              [':hover']: {
                color: 'highContrast'
              }
            },
            ['@md']: {
              left: 0
            }
          },
          featured: true
        },
        props
      )
    );
  }

  OpenSearchIcon({ category, ...props }) {
    const { forceBreakpoint } = this.base;

    return super.UtilitiesMenuIcon(
      this.merge(
        {
          style: {
            color: getSearchColor.call(this),
            ['@md-only']: {
              marginLeft: 'xsmall'
            },
            ['@md']: {
              color: this.base.category === PRIMARY ? 'action' : 'ultraLowContrast'
            },
            ['@lg']: {
              left: 'medium'
            }
          },
          category: forceBreakpoint === 'md' ? NEUTRAL : category
        },
        props
      )
    );
  }

  CloseIcon(props) {
    const { category } = this.base;

    return super.CloseIcon(
      this.merge(
        {
          style: {
            ...(props['data-aid'] === DataAid.SEARCH_CLOSE_RENDERED && {
              ['@md-only']: {
                marginLeft: 'xsmall'
              },
              ['@md']: {
                color: category === ACCENT ? 'highContrast' : getSearchColor.call(this)
              },
              ['@lg']: {
                width: 28
              }
            })
          }
        },
        props
      )
    );
  }

  Button(props) {
    return super.Button(
      this.merge(
        {
          style: {
            transition: 'all .5s ease',
            ['@xs-only']: {
              width: 'auto'
            }
          },
          customBorderWidth: 'small'
        },
        props
      )
    );
  }

  /* Promo banner */
  PromoBanner(props) {
    return super.PromoBanner(
      this.merge(
        {
          style: {
            zIndex: 1,
            ['@xs']: {
              paddingVertical: 'xsmall'
            },
            ['@md']: {
              boxShadow: '0 0 4px 0 rgba(0,0,0,0.2)',
              paddingVertical: 'xxsmall'
            }
          }
        },
        props
      )
    );
  }

  PromoBannerText(props) {
    return super.PromoBannerText(this.merge(props));
  }

  /* Nav */
  ImageLogo(props) {
    return super.Image(
      this.merge(
        {
          style: {
            width: 'auto',
            maxWidth: '100%',
            zIndex: 2
          }
        },
        props
      )
    );
  }

  Phone(props) {
    return super.Phone(
      this.merge(
        {
          style: {
            marginTop: 'large'
          },
          typography: 'BodyAlpha',
          featured: true
        },
        props
      )
    );
  }

  LinkDropdown(props) {
    return super.LinkDropdown(
      this.merge(
        {
          style: {
            color: 'highContrast',
            [':hover']: {
              color: 'highContrast'
            }
          },
          typography: false
        },
        props
      )
    );
  }

  /* Search */
  FormSearch(props) {
    return super.FormSearch(
      this.merge(
        {
          style: {
            ['@xs']: {
              width: '100%',
              marginHorizontal: 'medium',
              marginTop: '-xsmall'
            },
            ['@md']: {
              marginHorizontal: 'inherit',
              marginTop: 'inherit'
            },
            ['@lg']: {
              width: '85%'
            }
          },
          section: 'alt'
        },
        omit(props, 'section')
      )
    );
  }

  InputSearch(props) {
    return super.InputSearch(
      this.merge(
        {
          style: {
            ['@md-only']: {
              paddingLeft: 'xlarge'
            },
            ['::placeholder']: {
              color: getSearchColor.call(this)
            },
            borderWidth: 'none',
            borderRadius: 'none',
            paddingVertical: 'small',
            paddingLeft: 'xxlarge',
            paddingRight: 'small'
          }
        },
        props
      )
    );
  }

  NavFooterLink(props) {
    return super.NavFooterLink(this.merge({ typography: 'LinkAlpha' }, props));
  }

  /* UtilitiesMenu and Icons */
  UtilitiesMenu(props) {
    const utilitiesMenuElementStyle = {
      ['> :first-child']: {
        marginLeft: 0
      }
    };

    return super.UtilitiesMenu(
      this.merge(
        {
          style: {
            position: 'relative',
            ['@md']: {
              ...utilitiesMenuElementStyle
            },
            ['@lg']: {
              ...utilitiesMenuElementStyle
            }
          }
        },
        props
      )
    );
  }

  UtilitiesMenuLink(props) {
    return super.UtilitiesMenuLink(this.merge({ featured: true }, props));
  }

  /* Hero */
  Hero(props) {
    return super.Hero(
      this.merge(
        {
          style: {
            'paddingVertical': 'xlarge',
            '@md': {
              paddingVertical: 'xxlarge'
            }
          }
        },
        props
      )
    );
  }

  SubTagline(props) {
    return super.SubTagline(
      this.merge(
        {
          style: {
            marginBottom: '0 !important',
            marginTop: 'medium'
          }
        },
        props
      )
    );
  }

  /* Navigation drawer */
  NavigationDrawer(props) {
    return super.NavigationDrawer(
      this.merge(
        {
          style: {
            backgroundColor: 'section',
            justifyContent: 'center'
          }
        },
        props
      )
    );
  }

  NavigationDrawerInputSearch(props) {
    const { category } = this.base;

    return super.NavigationDrawerInputSearch(
      this.merge(
        {
          style: {
            backgroundColor: 'searchMobileLight',
            ...(category === PRIMARY && {
              ['::placeholder']: {
                color: 'gray'
              },
              ['@xs']: {
                color: 'action'
              }
            })
          }
        },
        props
      )
    );
  }

  NavigationDrawerCloseIcon(props) {
    return super.CloseIcon(
      this.merge(
        {
          style: {
            ['@xs']: {
              position: 'absolute',
              top: 'unset',
              bottom: '9%',
              left: 0,
              right: 0,
              marginHorizontal: 'auto',
              fontWeight: 'bold',
              color: 'lowContrast'
            }
          }
        },
        props
      )
    );
  }

  NavigationDrawerIcon(props) {
    const { category } = this.base;

    return super.Icon(
      this.merge(
        {
          style: {
            ...(props.icon === 'magGlass' && {
              fontSize: 'large',
              color: category === PRIMARY ? 'black' : getSearchColor.call(this),
              left: 'large',
              top: 12
            })
          }
        },
        props
      )
    );
  }

  NavigationDrawerContainer(props) {
    return super.Container(
      this.merge(
        {
          style: {
            position: 'absolute',
            top: 80,
            height: '65%'
          }
        },
        props
      )
    );
  }

  NavigationDrawerListItem(props) {
    return super.NavigationDrawerListItem(
      this.merge(
        {
          style: {
            borderBottomWidth: 0
          }
        },
        props
      )
    );
  }

  NavigationDrawerLink(props) {
    const { item } = props;

    if (item) {
      return this.NavigationDrawerDropdownLink(props);
    }
    return this.BasicNavigationDrawerLink(props);
  }

  NavigationDrawerDropdownLink({ children, ...props }) {
    const containerStyle = {
      position: 'relative',
      ['>svg']: {
        position: 'absolute',
        right: -30,
        top: 0,
        bottom: 0,
        marginVertical: 'auto'
      }
    };

    return this.BasicNavigationDrawerLink(
      this.merge(
        {
          style: {},
          children: <UX2.Element.Block style={ containerStyle }>{ children }</UX2.Element.Block>
        },
        props
      )
    );
  }

  BasicNavigationDrawerLink(props) {
    return super.NavigationDrawerLink(
      this.merge(
        {
          style: {
            justifyContent: 'center'
          }
        },
        props
      )
    );
  }

  MembershipHeading(props) {
    return super.MembershipHeading(
      this.merge(
        {
          style: {
            textAlign: 'center'
          }
        },
        props
      )
    );
  }

  Page(props) {
    return super.Page(
      this.merge(
        {
          style: {
            '@lg': {
              paddingLeft: sidebarWidth,
              minHeight: '100vh'
            }
          }
        },
        props
      )
    );
  }

  Sidebar(props) {
    return super.Sidebar(
      this.merge(
        {
          style: {
            backgroundColor: 'section',
            zIndex: Z_INDEX_INLINE_TOOLBAR - 1
          }
        },
        props
      )
    );
  }

  SidebarContainer(props) {
    return super.SidebarContainer(
      this.merge(
        {
          style: {
            paddingTop: '96px',
            paddingBottom: '96px',
            paddingHorizontal: 0,
            ['@md-only']: {
              paddingBottom: '96px'
            }
          }
        },
        props
      )
    );
  }

  SidebarListItem(props) {
    return super.ListItem(
      this.merge(
        {
          style: {
            lineHeight: '45px',
            marginBottom: 0
          }
        },
        props
      )
    );
  }

  SidebarLink(props) {
    return super.Link(this.merge({ typography: 'NavAlpha' }, props));
  }

  SidebarLinkActive(props) {
    return super.Link(this.merge({ typography: 'NavAlpha', active: true }, props));
  }

  SidebarIcon({ icon, ...props }) {
    return super.Icon(
      this.merge(
        {
          icon: icon === 'chevronDown' ? 'chevronRight' : icon
        },
        props
      )
    );
  }

  SubMenu(props) {
    return super.SubMenu(
      this.merge(
        {
          style: {
            ['@md-only']: {
              paddingVertical: 'xxxlarge',
              justifyContent: 'center'
            },
            ['@lg']: {
              paddingTop: 215
            }
          }
        },
        props
      )
    );
  }

  SubMenuList(props) {
    return super.SubMenuList(
      this.merge(
        {
          style: {
            minWidth: 180
          }
        },
        props
      )
    );
  }

  SubMenuLink(props) {
    return super.Link(this.merge({ typography: 'SubNavAlpha' }, props));
  }

  SubMenuLinkActive(props) {
    return super.Link(this.merge({ typography: 'SubNavAlpha', active: true }, props));
  }

  /* Widgets */
  Section(props) {
    const { widgetType, renderMode } = this.base;

    return super.Section(
      this.merge(
        {
          style: {
            paddingVertical: 'xxxlarge',
            // leave space for sidebar in theme preview mode, when there is no Page element
            ...(renderMode === DISPLAY &&
              widgetType === HEADER && {
              marginLeft: sidebarWidth
            })
          }
        },
        props
      )
    );
  }

  SectionHeading(props) {
    return super.SectionHeading(
      this.merge(
        {
          sectionHeadingHR: 'NONE',
          style: {
            // Static
            'textAlign': 'center',
            'marginLeft': 'auto',
            '@md': {
              textAlign: 'center',
              marginLeft: 'auto',
              lineHeight: 2
            }
          },
          typography: 'HeadingEpsilon'
        },
        props
      )
    );
  }

  Intro(props) {
    return super.Intro(
      this.merge(
        {
          style: {
            marginBottom: 'xxlarge'
          },
          alignment: 'center'
        },
        props
      )
    );
  }

  FeaturedHeading(props) {
    return super.FeaturedHeading(this.merge({ typography: 'HeadingGamma' }, props));
  }

  ContentText({ alignment, ...props }) {
    const { widgetPreset } = this.base;
    const borderWidth = 5;

    if (widgetPreset === 'content4' || widgetPreset === 'introduction4') {
      return super.ContentText(
        this.merge(
          {
            style: {
              paddingVertical: 'xxsmall',
              borderStyle: 'solid',
              borderColor: PRIMARY,
              borderWidth: 0,
              ...(['center', 'left'].includes(alignment)
                ? {
                  marginLeft: '0 !important',
                  ['@md']: {
                    paddingLeft: 'medium',
                    borderLeftWidth: borderWidth
                  }
                }
                : {
                  marginRight: '0 !important',
                  ['@md']: {
                    paddingRight: 'medium',
                    borderRightWidth: borderWidth
                  }
                })
            },
            typography: 'BodyBeta'
          },
          props
        )
      );
    }
    return super.ContentText(props);
  }

  GridCell({ md, ...props }) {
    const { widgetPreset } = this.base;

    return super.GridCell(
      this.merge(
        {
          md: widgetPreset === 'content4' || widgetPreset === 'introduction4' ? 6 : md
        },
        props
      )
    );
  }

  ContentCardHeading(props) {
    return super.ContentCardHeading(
      this.merge(
        {
          style: {
            textAlign: 'inherit',
            alignSelf: 'inherit'
          }
        },
        props
      )
    );
  }

  ContentCardButton(props) {
    return this.Button(
      this.merge(
        {
          style: {
            marginTop: 'large'
          }
        },
        props
      )
    );
  }

  ContentCardImageThumbnail(props) {
    return super.ContentCardImageThumbnail(
      this.merge(
        {
          style: {
            height: '100%',
            width: '100%',
            borderRadius: 'none'
          }
        },
        props
      )
    );
  }

  CardBanner(props) {
    return super.CardBanner(
      this.merge(
        {
          style: {
            flexDirection: 'column !important'
          }
        },
        props
      )
    );
  }

  CardHeading(props) {
    const { widgetPreset } = this.base;

    return super.CardHeading(
      this.merge(
        {
          ...(widgetPreset === 'rss1' && {
            style: {
              lineHeight: '32px'
            },
            typography: 'HeadingZeta',
            featured: true
          })
        },
        props
      )
    );
  }

  CardBannerHeading(props) {
    return this.ContentHeading(
      this.merge(
        {
          style: {
            marginBottom: 'large'
          },
          typography: 'HeadingGamma'
        },
        props
      )
    );
  }

  CardBannerBlock(props) {
    return super.CardBannerBlock(
      this.merge(
        {
          style: {
            ['@md']: {
              textAlign: 'center'
            }
          }
        },
        props
      )
    );
  }

  MediaObjectBackground(props) {
    return super.MediaObjectBackground(
      this.merge(
        {
          style: {
            borderRadius: 'medium'
          }
        },
        props
      )
    );
  }

  MembershipContainer(props) {
    return super.Block(
      this.merge(
        {
          style: {
            position: 'absolute',
            top: 'xlarge',
            left: 0,
            marginTop: 'inherit',
            width: '100%'
          }
        },
        props
      )
    );
  }

  MembershipText(props) {
    return this.Text(
      this.merge(
        {
          style: {
            textAlign: 'center'
          }
        },
        props
      )
    );
  }

  FooterText(props) {
    return super.FooterText(
      this.merge(
        {
          typography: 'DetailsGamma'
        },
        props
      )
    );
  }

  FooterDetails(props) {
    return super.FooterDetails(
      this.merge(
        {
          typography: 'DetailsGamma'
        },
        props
      )
    );
  }

  UtilitiesMenuPipe(props) {
    return super.Pipe(
      this.merge(
        {
          style: {
            backgroundColor: 'sectionUltraLowContrast'
          }
        },
        props
      )
    );
  }
}

export default Theme29;
