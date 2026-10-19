// Run bulk-whois-lookup-rdap on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "domains": [
    "apify.com",
    "https://www.heise.de/",
    "github.io",
    "wikipedia.org",
    "this-domain-is-surely-free-98765.com"
  ],
  "includeRegistrarRecord": true,
  "includeDns": true,
  "maxItems": 20
};
const run = await client.actor('kamerozkan/bulk-whois-lookup-rdap').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
