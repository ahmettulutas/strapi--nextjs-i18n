import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutsFooter extends Schema.Component {
  collectionName: 'components_layouts_footers';
  info: {
    displayName: 'Footer';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    socialLinks: Attribute.Component<'links.link', true> & Attribute.Required;
    legalLinks: Attribute.Component<'links.link', true> & Attribute.Required;
  };
}

export interface LayoutsHero extends Schema.Component {
  collectionName: 'components_layouts_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 200;
      }>;
    buttonLink: Attribute.Component<'links.button-links'> & Attribute.Required;
  };
}

export interface LayoutsNavbar extends Schema.Component {
  collectionName: 'components_layouts_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'cursor';
  };
  attributes: {
    navLinks: Attribute.Component<'links.link', true> & Attribute.Required;
    navButton: Attribute.Component<'links.button-links'>;
    navLogo: Attribute.Media & Attribute.Required;
    logoText: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface LinksButtonLinks extends Schema.Component {
  collectionName: 'components_links_button_links';
  info: {
    displayName: 'Button Links';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required;
    variant: Attribute.Enumeration<
      ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    >;
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required;
    text: Attribute.String & Attribute.Required;
  };
}

export interface MetaMeta extends Schema.Component {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'Meta';
    icon: 'code';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.String & Attribute.Required;
  };
}

export interface SectionsService extends Schema.Component {
  collectionName: 'components_sections_service';
  info: {
    displayName: 'Service';
    icon: 'key';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 100;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 250;
      }>;
    serviceLogo: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services-Wrapper';
    icon: 'restaurant';
    description: '';
  };
  attributes: {
    wrapperImage: Attribute.Media & Attribute.Required;
    Service: Attribute.Component<'sections.service', true> & Attribute.Required;
  };
}

export interface SectionsSolutionWrapper extends Schema.Component {
  collectionName: 'components_sections_solution_wrappers';
  info: {
    displayName: 'Solution-Wrapper';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 100;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 200;
      }>;
    btnLink: Attribute.Component<'links.button-links'>;
    items: Attribute.Component<'sections.solutions', true> & Attribute.Required;
  };
}

export interface SectionsSolutions extends Schema.Component {
  collectionName: 'components_sections_solutions';
  info: {
    displayName: 'Solution';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 80;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 250;
      }>;
    category: Attribute.Enumeration<
      [
        'account',
        'additional',
        'bnpl',
        'cardIssuing',
        'openBanking',
        'payment',
        'pos'
      ]
    > &
      Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layouts.footer': LayoutsFooter;
      'layouts.hero': LayoutsHero;
      'layouts.navbar': LayoutsNavbar;
      'links.button-links': LinksButtonLinks;
      'links.link': LinksLink;
      'meta.meta': MetaMeta;
      'sections.service': SectionsService;
      'sections.services': SectionsServices;
      'sections.solution-wrapper': SectionsSolutionWrapper;
      'sections.solutions': SectionsSolutions;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
