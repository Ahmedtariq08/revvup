/**
 * ! Executing this script will delete all data in your database and seed it with 10 vercel_auths.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

const main = async () => {
  try {
    const seed = await createSeedClient({dryRun: true});
    await seed.$resetDatabase();
  
    // Seed the database with 10 vercel_auths
    await seed.vercel_auths((x) => x(10));
  
    console.log("Database seeded successfully!");
    process.exit();

  } catch (error) {
    console.log("Unable to seed database.");
  }
 
};

main();