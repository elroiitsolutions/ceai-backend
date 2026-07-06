import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost', 'danger']
    >;
  };
}

export interface ElementsDownloadItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_download_items';
  info: {
    description: '';
    displayName: 'download-item';
    icon: 'download';
  };
  attributes: {
    externalUrl: Schema.Attribute.String;
    file: Schema.Attribute.Media<'files'>;
    fileType: Schema.Attribute.Enumeration<
      ['pdf', 'doc', 'xls', 'ppt', 'other']
    >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    description: '';
    displayName: 'faq-item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_cards';
  info: {
    description: '';
    displayName: 'feature-card';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsIndustryTab extends Struct.ComponentSchema {
  collectionName: 'components_elements_industry_tabs';
  info: {
    description: '';
    displayName: 'industry-tab';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    tabId: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsOpportunityCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_opportunity_cards';
  info: {
    description: '';
    displayName: 'opportunity-card';
    icon: 'lightbulb';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    sector: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPolicyCategory extends Struct.ComponentSchema {
  collectionName: 'components_elements_policy_categories';
  info: {
    description: '';
    displayName: 'policy-category';
    icon: 'folder';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_elements_process_steps';
  info: {
    description: '';
    displayName: 'process-step';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    stepNumber: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsProgramCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_program_cards';
  info: {
    description: '';
    displayName: 'program-card';
    icon: 'picture';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsRegulationItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_regulation_items';
  info: {
    description: '';
    displayName: 'regulation-item';
    icon: 'book';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    reference: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_stat_items';
  info: {
    description: '';
    displayName: 'stat-item';
    icon: 'chartBubble';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_timeline_items';
  info: {
    description: '';
    displayName: 'timeline-item';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsValueCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_value_cards';
  info: {
    description: '';
    displayName: 'value-card';
    icon: 'heart';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_links';
  info: {
    description: '';
    displayName: 'footer-link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutNavItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_nav_items';
  info: {
    description: '';
    displayName: 'nav-item';
    icon: 'link';
  };
  attributes: {
    children: Schema.Attribute.Component<'layout.sub-nav-item', true>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface LayoutSubNavItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_sub_nav_items';
  info: {
    description: '';
    displayName: 'sub-nav-item';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: '';
    displayName: 'cta';
    icon: 'cursor';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    theme: Schema.Attribute.Enumeration<['blue', 'red', 'dark', 'light']> &
      Schema.Attribute.DefaultTo<'blue'>;
  };
}

export interface SectionsDownloadList extends Struct.ComponentSchema {
  collectionName: 'components_sections_download_lists';
  info: {
    description: '';
    displayName: 'download-list';
    icon: 'download';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.download-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsEventsList extends Struct.ComponentSchema {
  collectionName: 'components_sections_events_lists';
  info: {
    description: '';
    displayName: 'events-list';
    icon: 'calendar';
  };
  attributes: {
    badge: Schema.Attribute.String;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    showUpcomingOnly: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    description: '';
    displayName: 'faq';
    icon: 'question';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    description: '';
    displayName: 'feature-grid';
    icon: 'apps';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'elements.feature-card', true>;
    columns: Schema.Attribute.Enumeration<['2', '3', '4']> &
      Schema.Attribute.DefaultTo<'3'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_forms';
  info: {
    description: '';
    displayName: 'form';
    icon: 'envelope';
  };
  attributes: {
    formType: Schema.Attribute.Enumeration<
      ['contact', 'newsletter', 'registration']
    > &
      Schema.Attribute.DefaultTo<'contact'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'star';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images', true>;
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    badge: Schema.Attribute.String;
    checklist: Schema.Attribute.JSON;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    subtitle: Schema.Attribute.Text;
    theme: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_blocks';
  info: {
    description: '';
    displayName: 'image-block';
    icon: 'picture';
  };
  attributes: {
    caption: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    layout: Schema.Attribute.Enumeration<['single', 'grid']> &
      Schema.Attribute.DefaultTo<'single'>;
  };
}

export interface SectionsIndustriesTabs extends Struct.ComponentSchema {
  collectionName: 'components_sections_industries_tabs';
  info: {
    description: '';
    displayName: 'industries-tabs';
    icon: 'bulletList';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaButton: Schema.Attribute.Component<'elements.button', false>;
    description: Schema.Attribute.Text;
    featuredImage: Schema.Attribute.Media<'images'>;
    overlayLogo: Schema.Attribute.Media<'images'>;
    tabs: Schema.Attribute.Component<'elements.industry-tab', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMap extends Struct.ComponentSchema {
  collectionName: 'components_sections_maps';
  info: {
    description: '';
    displayName: 'map';
    icon: 'pinMap';
  };
  attributes: {
    address: Schema.Attribute.Text;
    mapUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsStatistics extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics';
  info: {
    description: '';
    displayName: 'statistics';
    icon: 'chartBubble';
  };
  attributes: {
    badge: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'elements.stat-item', true>;
    theme: Schema.Attribute.Enumeration<['light', 'dark', 'blue']> &
      Schema.Attribute.DefaultTo<'light'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTeamGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_grids';
  info: {
    description: '';
    displayName: 'team-grid';
    icon: 'user';
  };
  attributes: {
    badge: Schema.Attribute.String;
    members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_blocks';
  info: {
    description: '';
    displayName: 'text-block';
    icon: 'filter';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SectionsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_sections_timelines';
  info: {
    description: '';
    displayName: 'timeline';
    icon: 'clock';
  };
  attributes: {
    direction: Schema.Attribute.Enumeration<['vertical', 'horizontal']> &
      Schema.Attribute.DefaultTo<'vertical'>;
    items: Schema.Attribute.Component<'elements.timeline-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBusinessDistrict extends Struct.ComponentSchema {
  collectionName: 'components_shared_business_districts';
  info: {
    description: 'Information about a key business district in a city.';
    displayName: 'Business District';
  };
  attributes: {
    companiesCount: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    description: '';
    displayName: 'contact-info';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.Text;
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: 'A simple list item';
    displayName: 'Feature Item';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPolicyRegulation extends Struct.ComponentSchema {
  collectionName: 'components_shared_policy_regulations';
  info: {
    description: 'Latest policies and regulations';
    displayName: 'Policy Regulation';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogDescription: Schema.Attribute.Text;
    ogTitle: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    >;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: '';
    displayName: 'social-link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      [
        'facebook',
        'instagram',
        'youtube',
        'twitter',
        'linkedin',
        'line',
        'wechat',
      ]
    >;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button': ElementsButton;
      'elements.download-item': ElementsDownloadItem;
      'elements.faq-item': ElementsFaqItem;
      'elements.feature-card': ElementsFeatureCard;
      'elements.industry-tab': ElementsIndustryTab;
      'elements.opportunity-card': ElementsOpportunityCard;
      'elements.policy-category': ElementsPolicyCategory;
      'elements.process-step': ElementsProcessStep;
      'elements.program-card': ElementsProgramCard;
      'elements.regulation-item': ElementsRegulationItem;
      'elements.stat-item': ElementsStatItem;
      'elements.timeline-item': ElementsTimelineItem;
      'elements.value-card': ElementsValueCard;
      'layout.footer-link': LayoutFooterLink;
      'layout.nav-item': LayoutNavItem;
      'layout.sub-nav-item': LayoutSubNavItem;
      'sections.cta': SectionsCta;
      'sections.download-list': SectionsDownloadList;
      'sections.events-list': SectionsEventsList;
      'sections.faq': SectionsFaq;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.form': SectionsForm;
      'sections.hero': SectionsHero;
      'sections.image-block': SectionsImageBlock;
      'sections.industries-tabs': SectionsIndustriesTabs;
      'sections.map': SectionsMap;
      'sections.statistics': SectionsStatistics;
      'sections.team-grid': SectionsTeamGrid;
      'sections.text-block': SectionsTextBlock;
      'sections.timeline': SectionsTimeline;
      'shared.business-district': SharedBusinessDistrict;
      'shared.contact-info': SharedContactInfo;
      'shared.feature-item': SharedFeatureItem;
      'shared.policy-regulation': SharedPolicyRegulation;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
    }
  }
}
