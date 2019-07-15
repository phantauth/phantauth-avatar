module.exports = {
    ttl: Number(process.env.PHANTAUTH_TTL || "0"),
    domain: process.env.PHANTAUTH_DOMAIN,
    serviceUri: process.env.PHANTAUTH_SERVICE_URI || ("https://" + process.env.PHANTAUTH_DOMAIN),
    developerPortalUri: process.env.PHANTAUTH_DEVELOPER_PORTAL_URI || ("https://www." + process.env.PHANTAUTH_DOMAIN),
    defaultTenantUri: process.env.PHANTAUTH_DEFAULT_TENANT_URI || ("https://default" + process.env.PHANTAUTH_DOMAIN)
  };
