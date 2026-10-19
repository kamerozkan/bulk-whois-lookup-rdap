#!/usr/bin/env bash
# Run bulk-whois-lookup-rdap synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~bulk-whois-lookup-rdap/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"domains": ["apify.com", "https://www.heise.de/", "github.io", "wikipedia.org", "this-domain-is-surely-free-98765.com"], "includeRegistrarRecord": true, "includeDns": true, "maxItems": 20}'
