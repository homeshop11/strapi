import type { Schema, Struct } from '@strapi/strapi';

export interface SharedApplication extends Struct.ComponentSchema {
  collectionName: 'components_shared_applications';
  info: {
    displayName: 'application';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLocalizedTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_localized_text_blocks';
  info: {
    displayName: 'localized-text-block';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<['en', 'de', 'fr', 'es', 'ja']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMaterial extends Struct.ComponentSchema {
  collectionName: 'components_shared_materials';
  info: {
    displayName: 'material';
  };
  attributes: {
    description: Schema.Attribute.Text;
    grade: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSpecification extends Struct.ComponentSchema {
  collectionName: 'components_shared_specifications';
  info: {
    displayName: 'specification';
  };
  attributes: {
    parameter: Schema.Attribute.String & Schema.Attribute.Required;
    unit: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSurfaceTreatment extends Struct.ComponentSchema {
  collectionName: 'components_shared_surface_treatments';
  info: {
    displayName: 'surface-treatment';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTolerance extends Struct.ComponentSchema {
  collectionName: 'components_shared_tolerances';
  info: {
    displayName: 'tolerance';
  };
  attributes: {
    process: Schema.Attribute.String & Schema.Attribute.Required;
    tolerance: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.application': SharedApplication;
      'shared.localized-text-block': SharedLocalizedTextBlock;
      'shared.material': SharedMaterial;
      'shared.specification': SharedSpecification;
      'shared.surface-treatment': SharedSurfaceTreatment;
      'shared.tolerance': SharedTolerance;
    }
  }
}
