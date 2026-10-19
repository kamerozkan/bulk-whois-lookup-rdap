# Bulk WHOIS Lookup (RDAP) - Domain Expiry, Age, Registrar, CSV

Bulk WHOIS lookup over RDAP for any TLD: paste domains, URLs or a CSV column and get registrar, creation and expiry dates, domain age, days to expiry, EPP status, nameservers, DNSSEC, registrant organization and country, plus A, MX and NS records. Unregistered domains are flagged as available.

**[Run it on Apify Store](https://apify.com/kamerozkan/bulk-whois-lookup-rdap)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/bulk-whois-lookup-rdap); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/bulk-whois-lookup-rdap).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/bulk-whois-lookup-rdap) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
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
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "domain": "wikipedia.org",
    "inputValue": "wikipedia.org",
    "tld": "org",
    "status": "registered",
    "registered": true,
    "registrar": "MarkMonitor Inc.",
    "registrarIanaId": "292",
    "registrarUrl": "https://www.markmonitor.com/about-us/",
    "registrarAbuseEmail": "contact@example.com",
    "registrarAbusePhone": "+1 555 0100",
    "createdAt": "2001-01-13T00:12:14Z",
    "updatedAt": "2026-08-12T08:47:19Z",
    "expiresAt": "2027-01-13T00:00:00Z",
    "lastTransferAt": "2012-03-09T16:33:50Z",
    "daysUntilExpiry": 85,
    "domainAgeYears": 25.8,
    "expiringSoon": false,
    "eppStatuses": [
      "clientDeleteProhibited",
      "clientTransferProhibited",
      "clientUpdateProhibited"
    ],
    "transferLock": true,
    "nameservers": [
      "ns0.wikimedia.org",
      "ns1.wikimedia.org",
      "ns2.wikimedia.org"
    ],
    "dnssec": false,
    "registrantOrganization": null,
    "registrantCountry": "US",
    "registrantState": "CA",
    "privacyProtected": true,
    "dnsA": null,
    "dnsMx": null,
    "dnsNs": null,
    "rdapRegistryUrl": "https://rdap.publicinterestregistry.org/rdap/domain/wikipedia.org",
    "rdapRegistrarUrl": "https://rdap.markmonitor.com/rdap/domain/wikipedia.org",
    "rdapSource": "registry+registrar",
    "checkedAt": "2026-10-19T12:27:20Z"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/bulk-whois-lookup-rdap/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
