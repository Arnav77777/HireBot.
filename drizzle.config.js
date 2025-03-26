/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://MockMateAI_owner:oVkWh6iS2stA@ep-wild-star-a1q1rwle.ap-southeast-1.aws.neon.tech/MockMateAI?sslmode=require',
    }
  };