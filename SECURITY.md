# FRAI Sign Security Policy

FRAI Sign handles documents that may have contractual significance. We treat the
security of the service and its users as a production requirement.

## Reporting a Vulnerability

Report security vulnerabilities privately. Do not open a public issue, discussion, or pull request for security reports.

Use the [private vulnerability reporting form](https://github.com/fra50/frai-sign/security/advisories/new)
or email [security@frai.es](mailto:security@frai.es).

Include the affected version, a clear description, steps to reproduce, and the potential impact.

## Triage and Response

We triage reports as we have availability. We read every report we receive, and we appreciate the time and effort it takes to put one together.

We also run automated source and production-image security analysis.

## Scope

This policy covers vulnerabilities in FRAI Sign application code in this
repository.

The items below are out of scope and will not be accepted. They are deployment, infrastructure, and configuration concerns that belong with the operator's firewall, network, and environment setup, not the application:

- Server-Side Request Forgery (SSRF) and related network-egress concerns
- DNS rebinding and other DNS-level issues
- Rate limiting, denial of service, and volumetric attacks
- TLS and certificate configuration, HTTP security headers, and other reverse-proxy or web-server configuration
- Findings that depend on insecure self-hosted infrastructure or misconfiguration

If you're unsure whether something is in scope, report it privately anyway and we'll happily take a look.

## Supported Versions

Security fixes are applied to the production release.

## Production security dispositions

### GHSA-qwww-vcr4-c8h2 — not affected

- Assessed: 2026-08-02
- Review by: 2026-11-02, or before enabling React Server Components
- Affected package present: `react-router` 7.18.1
- Disposition: not affected in the FRAI Sign production configuration

The advisory affects React Router applications using its unstable React Server
Components APIs. FRAI Sign uses React 18 and does not install
`@vitejs/plugin-rsc` or `react-server-dom-webpack` in its production dependency
tree. Repository and production-tree searches also show no RSC route
configuration or unstable RSC API use.

The vendor-patched React Router 8.3.0 requires React 19.2.7 or newer. A React
18-to-19 application migration would add unrelated production risk without
closing an executable path in this deployment. The image gate therefore allows
only `GHSA-qwww-vcr4-c8h2` for this repository. Any introduction of RSC,
React 19, or a materially different routing configuration invalidates this
disposition and requires reassessment before release.
