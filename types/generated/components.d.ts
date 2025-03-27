import type { Schema, Struct } from '@strapi/strapi';

export interface CampaignAdSet extends Struct.ComponentSchema {
  collectionName: 'components_campaign_ad_sets';
  info: {
    description: '';
    displayName: 'Ad_set';
    icon: 'connector';
  };
  attributes: {
    audience_type: Schema.Attribute.String;
    kpi: Schema.Attribute.Component<'campaign.kp-is', false>;
    name: Schema.Attribute.String;
    size: Schema.Attribute.String;
  };
}

export interface CampaignBudgetDetails extends Struct.ComponentSchema {
  collectionName: 'components_campaign_budget_details';
  info: {
    displayName: 'Budget_details';
    icon: 'cup';
  };
  attributes: {
    currency: Schema.Attribute.String;
    fee_type: Schema.Attribute.String;
    sub_fee_type: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface CampaignCampaignBudget extends Struct.ComponentSchema {
  collectionName: 'components_campaign_campaign_budgets';
  info: {
    displayName: 'Campaign_budget';
    icon: 'briefcase';
  };
  attributes: {
    amount: Schema.Attribute.String;
    budget_type: Schema.Attribute.String;
    currency: Schema.Attribute.String;
  };
}

export interface CampaignChannelMix extends Struct.ComponentSchema {
  collectionName: 'components_campaign_channel_mixes';
  info: {
    description: '';
    displayName: 'Channel_mix';
    icon: 'command';
  };
  attributes: {
    display_networks: Schema.Attribute.Component<
      'campaign.format-selection',
      true
    >;
    funnel_stage: Schema.Attribute.String;
    funnel_stage_timeline_end_date: Schema.Attribute.Date;
    funnel_stage_timeline_start_date: Schema.Attribute.Date;
    search_engines: Schema.Attribute.Component<
      'campaign.format-selection',
      true
    >;
    social_media: Schema.Attribute.Component<'campaign.format-selection', true>;
    stage_budget: Schema.Attribute.Component<
      'campaign.individual-budget',
      false
    >;
  };
}

export interface CampaignClientSelection extends Struct.ComponentSchema {
  collectionName: 'components_campaign_client_selections';
  info: {
    description: '';
    displayName: 'client_selection';
    icon: 'calendar';
  };
  attributes: {
    client: Schema.Attribute.String;
    level_1: Schema.Attribute.String;
    level_2: Schema.Attribute.String;
    level_3: Schema.Attribute.String;
  };
}

export interface CampaignFormat extends Struct.ComponentSchema {
  collectionName: 'components_campaign_formats';
  info: {
    description: '';
    displayName: 'Format';
    icon: 'clock';
  };
  attributes: {
    format_type: Schema.Attribute.String;
    num_of_visuals: Schema.Attribute.String;
    previews: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CampaignFormatSelection extends Struct.ComponentSchema {
  collectionName: 'components_campaign_format_selections';
  info: {
    description: '';
    displayName: 'format_selection';
    icon: 'code';
  };
  attributes: {
    ad_sets: Schema.Attribute.Component<'campaign.ad-set', true>;
    budget: Schema.Attribute.Component<'campaign.individual-budget', false>;
    buy_type: Schema.Attribute.String;
    campaign_end_date: Schema.Attribute.Date;
    campaign_start_date: Schema.Attribute.Date;
    format: Schema.Attribute.Component<'campaign.format', true>;
    kpi: Schema.Attribute.Component<'campaign.kp-is', false>;
    objective_type: Schema.Attribute.String;
    platform_name: Schema.Attribute.String;
  };
}

export interface CampaignIndividualBudget extends Struct.ComponentSchema {
  collectionName: 'components_campaign_individual_budgets';
  info: {
    description: '';
    displayName: 'Individual_budget';
    icon: 'cog';
  };
  attributes: {
    currency: Schema.Attribute.String;
    fixed_value: Schema.Attribute.String;
    percentage_value: Schema.Attribute.String;
  };
}

export interface CampaignKpIs extends Struct.ComponentSchema {
  collectionName: 'components_campaign_kp_is';
  info: {
    description: '';
    displayName: 'KPIs';
    icon: 'crop';
  };
  attributes: {
    avg_pages_visit: Schema.Attribute.Integer;
    avg_visit_time: Schema.Attribute.Integer;
    bounce_rate: Schema.Attribute.Integer;
    click_to_land_rate: Schema.Attribute.Integer;
    clv_of_associated_product: Schema.Attribute.Integer;
    completed_view: Schema.Attribute.Integer;
    completion_rate: Schema.Attribute.Integer;
    cpc: Schema.Attribute.Integer;
    cpcv: Schema.Attribute.Integer;
    cpi: Schema.Attribute.Integer;
    cpl: Schema.Attribute.Integer;
    cpm: Schema.Attribute.Integer;
    cpv: Schema.Attribute.Integer;
    ctr: Schema.Attribute.Integer;
    cvr: Schema.Attribute.Integer;
    eng_rate: Schema.Attribute.Integer;
    frequency: Schema.Attribute.Integer;
    impressions: Schema.Attribute.Integer;
    install_rate: Schema.Attribute.Integer;
    installs: Schema.Attribute.Integer;
    lead_rate: Schema.Attribute.Integer;
    link_clicks: Schema.Attribute.Integer;
    off_funnel_rate: Schema.Attribute.Integer;
    open_rate: Schema.Attribute.Integer;
    reach: Schema.Attribute.Integer;
    video_views: Schema.Attribute.Integer;
    vtr: Schema.Attribute.Integer;
  };
}

export interface CampaignMediaPlanDetails extends Struct.ComponentSchema {
  collectionName: 'components_campaign_media_plan_details';
  info: {
    displayName: 'Media_plan_details';
    icon: 'cursor';
  };
  attributes: {
    internal_approver: Schema.Attribute.String;
    plan_name: Schema.Attribute.String;
  };
}

export interface CampaignType extends Struct.ComponentSchema {
  collectionName: 'components_campaign_types';
  info: {
    displayName: 'Type';
    icon: 'connector';
  };
  attributes: {};
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
      'campaign.ad-set': CampaignAdSet;
      'campaign.budget-details': CampaignBudgetDetails;
      'campaign.campaign-budget': CampaignCampaignBudget;
      'campaign.channel-mix': CampaignChannelMix;
      'campaign.client-selection': CampaignClientSelection;
      'campaign.format': CampaignFormat;
      'campaign.format-selection': CampaignFormatSelection;
      'campaign.individual-budget': CampaignIndividualBudget;
      'campaign.kp-is': CampaignKpIs;
      'campaign.media-plan-details': CampaignMediaPlanDetails;
      'campaign.type': CampaignType;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
