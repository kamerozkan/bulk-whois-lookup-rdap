"""Run bulk-whois-lookup-rdap on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'domains': ['apify.com',
             'https://www.heise.de/',
             'github.io',
             'wikipedia.org',
             'this-domain-is-surely-free-98765.com'],
 'includeRegistrarRecord': True,
 'includeDns': True,
 'maxItems': 20}
run = client.actor("kamerozkan/bulk-whois-lookup-rdap").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
