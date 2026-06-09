/**
 * On Vercel, VERCEL_PROJECT_PRODUCTION_URL always points at the production
 * deployment — swap in a custom domain here when there is one.
 */
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
