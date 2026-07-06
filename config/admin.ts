import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    docLinks: env.bool('FLAG_DOC_LINKS', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('CLIENT_URL', 'http://localhost:3000')],
      async handler(uid: string, { documentId, locale, status }: { documentId: string, locale: string, status: string }) {
        const document = await strapi.documents(uid as any).findOne({ documentId, locale, status: status as 'draft' | 'published' });
        const secret = env('PREVIEW_SECRET', 'my-preview-secret');
        const urlSearchParams = new URLSearchParams({
          secret,
          slug: (document as any)?.slug || '',
          locale: locale || 'en',
          type: uid.split('.')[1] || '' // Extract content type name (e.g. api::home.home -> home)
        });
        
        return `${env('CLIENT_URL', 'http://localhost:3000')}/api/draft?${urlSearchParams}`;
      },
    },
  },
});

export default config;
