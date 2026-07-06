export default {
  register(/* { strapi } */) {},

  /**
   * Bootstrap: automatically grant public read access (find + findOne)
   * for every content-type the frontend needs.
   */
  async bootstrap({ strapi }) {
    // All content-type UIDs whose GET endpoints should be publicly readable
    const publicActions = [
      // Single types
      'api::home.home',
      'api::mission.mission',
      'api::seo.seo',
      'api::global.global',
      'api::navigation.navigation',
      'api::footer.footer',
      // Collection types
      'api::labor.labor',
      'api::industrial.industrial',
      'api::investment.investment',
      'api::event.event',
      'api::culture.culture',
      'api::team.team',
      'api::contact.contact',
      'api::zone.zone',
      'api::city-page.city-page',
    ];

    // Build the array of permission action strings
    const permissions: { action: string; }[] = [];
    for (const uid of publicActions) {
      permissions.push({ action: `${uid}.find` });
      permissions.push({ action: `${uid}.findOne` });
    }

    // Look up the "Public" role (type === 'public')
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) {
      strapi.log.warn('⚠️  Could not find the Public role – skipping permission bootstrap.');
      return;
    }

    // For each permission, create it if it doesn't already exist
    for (const perm of permissions) {
      const existing = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({
          where: {
            action: perm.action,
            role: publicRole.id,
          },
        });

      if (!existing) {
        await strapi
          .query('plugin::users-permissions.permission')
          .create({
            data: {
              action: perm.action,
              role: publicRole.id,
              enabled: true,
            },
          });
        strapi.log.info(`✅  Granted public permission: ${perm.action}`);
      }
    }

    strapi.log.info('🚀  Public API permissions bootstrap complete.');
  },
};
