import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5,
    }
  },
});

export default config;
