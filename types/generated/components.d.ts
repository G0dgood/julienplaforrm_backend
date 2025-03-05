import type { Schema, Struct } from '@strapi/strapi';

export interface SetupNewCampaignMediaplan extends Struct.ComponentSchema {
  collectionName: 'components_setup_new_campaign_mediaplans';
  info: {
    displayName: 'mediaplan';
  };
  attributes: {
    configureAdSetsandBudget: Schema.Attribute.JSON;
    defineCampaignObjective: Schema.Attribute.JSON;
    establishGoals: Schema.Attribute.JSON;
    formatsSelection: Schema.Attribute.JSON;
    mapFunnelStages: Schema.Attribute.JSON;
    midRecap: Schema.Attribute.JSON;
    overviewOfYourCampaign: Schema.Attribute.JSON;
    planCampaignSchedule: Schema.Attribute.JSON;
    selectChannelMix: Schema.Attribute.JSON;
    setBuyObjectivesandTypes: Schema.Attribute.JSON;
    setupNewCampaign: Schema.Attribute.JSON;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'setup-new-campaign.mediaplan': SetupNewCampaignMediaplan;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
