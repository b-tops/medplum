import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'html',
      value: '<strong>Getting Started</strong>',
      className: 'sidebar-title',
    },
    'home',
    'fhir-basics',
    {
      type: 'category',
      label: 'Tutorials',
      link: { type: 'doc', id: 'tutorials/index' },
      items: [{ type: 'autogenerated', dirName: 'tutorials' }],
    },
    {
      type: 'category',
      label: 'Medplum App',
      link: { type: 'doc', id: 'app/index' },
      items: [{ type: 'autogenerated', dirName: 'app' }],
    },

    {
      type: 'html',
      value: '<strong>Core Workflows</strong>',
      className: 'sidebar-title',
    },

    {
      type: 'category',
      label: 'Authentication and Identity',
      link: { type: 'doc', id: 'auth/index' },
      items: [{ type: 'autogenerated', dirName: 'auth' }],
    },

    {
      type: 'category',
      label: 'Authorization and Access Control',
      link: { type: 'doc', id: 'access/index' },
      items: [{ type: 'autogenerated', dirName: 'access' }],
    },
    {
      type: 'category',
      label: 'Administration',
      link: { type: 'doc', id: 'administration/provider-directory/index' },
      items: [{ type: 'autogenerated', dirName: 'administration' }],
    },
    {
      type: 'category',
      label: 'Questionnaires & Assessments',
      link: { type: 'doc', id: 'questionnaires/index' },
      items: [{ type: 'autogenerated', dirName: 'questionnaires' }],
    },
    {
      type: 'category',
      label: 'Care Planning and Navigation',
      link: { type: 'doc', id: 'careplans/index' },
      items: [
        { type: 'html', value: '<strong class="menu__link">Care Navigation</strong>' },
        { type: 'doc', id: 'careplans/tasks/tasks' },
        { type: 'doc', id: 'careplans/clinical-decision-support' },
        {
          type: 'html',
          value: '<strong class="menu__link">Diagnostics</strong>',
        },
        { type: 'doc', id: 'careplans/diagnostic-catalog/diagnostic-catalog' },
        { type: 'doc', id: 'careplans/reference-ranges' },
        { type: 'doc', id: 'careplans/loinc' },
      ],
    },
    {
      type: 'category',
      label: 'Charting',
      link: { type: 'doc', id: 'charting/index' },
      items: [{ type: 'autogenerated', dirName: 'charting' }],
    },
    {
      type: 'category',
      label: 'Scheduling',
      link: { type: 'doc', id: 'scheduling/index' },
      items: [{ type: 'autogenerated', dirName: 'scheduling' }],
    },
    {
      type: 'category',
      label: 'Messaging & Communications',
      link: { type: 'doc', id: 'communications/index' },
      items: [
        { type: 'doc', id: 'communications/organizing-communications' },
        { type: 'doc', id: 'communications/async-encounters/async-encounters' },
      ],
    },
    {
      type: 'category',
      label: 'Labs & Imaging',
      link: { type: 'doc', id: 'labs-imaging/index' },
      items: [{ type: 'autogenerated', dirName: 'labs-imaging' }],
    },
    {
      type: 'category',
      label: 'Medications',
      link: { type: 'doc', id: 'medications/index' },
      items: [{ type: 'autogenerated', dirName: 'medications' }],
    },
    {
      type: 'category',
      label: 'Billing and Payments',
      link: { type: 'doc', id: 'billing/index' },
      items: [{ type: 'autogenerated', dirName: 'billing' }],
    },
    {
      type: 'category',
      label: 'FHIRcast',
      link: { type: 'doc', id: 'fhircast/index' },
      items: [{ type: 'autogenerated', dirName: 'fhircast' }],
    },
    {
      type: 'html',
      value: '<strong>Automation</strong>',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Bots',
      link: { type: 'doc', id: 'bots/index' },
      items: [{ type: 'autogenerated', dirName: 'bots' }],
    },
    {
      type: 'category',
      label: 'Subscriptions',
      link: { type: 'doc', id: 'subscriptions/index' },
      items: [{ type: 'autogenerated', dirName: 'subscriptions' }],
    },
    {
      type: 'category',
      label: 'CLI',
      link: { type: 'doc', id: 'cli/index' },
      items: [{ type: 'autogenerated', dirName: 'cli' }],
    },
    {
      type: 'category',
      label: 'On-Prem Agent',
      link: { type: 'doc', id: 'agent/index' },
      items: [{ type: 'autogenerated', dirName: 'agent' }],
    },
    {
      type: 'html',
      value: '<strong>Reference</strong>',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'FHIR Datastore',
      link: { type: 'doc', id: 'fhir-datastore/index' },
      items: [
        {
          type: 'html',
          value: '<strong class="menu__link">FHIR Data</strong>',
        },
        { type: 'doc', id: 'fhir-datastore/create-fhir-data' },
        { type: 'doc', id: 'fhir-datastore/deleting-data' },
        { type: 'doc', id: 'fhir-datastore/binary-data' },
        { type: 'doc', id: 'fhir-datastore/resource-history' },
        { type: 'doc', id: 'fhir-datastore/fhir-batch-requests' },
        {
          type: 'html',
          value: '<strong class="menu__link">Data Validation</strong>',
        },
        { type: 'doc', id: 'fhir-datastore/profiles' },
        { type: 'doc', id: 'fhir-datastore/understanding-uscdi-dataclasses' },
        {
          type: 'html',
          value: '<strong class="menu__link">Migration</strong>',
        },
        { type: 'doc', id: 'fhir-datastore/adoption-strategy' },
        { type: 'doc', id: 'fhir-datastore/migration-logic' },
        {
          type: 'html',
          value: '<strong class="menu__link">Data Modeling</strong>',
        },
        {
          type: 'category',
          label: 'Patient Dedupliaction Architectures',
          link: {
            type: 'doc',
            id: 'fhir-datastore/patient-deduplication/patient-deduplication',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'fhir-datastore/patient-deduplication',
            },
          ],
        },
        {
          type: 'doc',
          id: 'fhir-datastore/family-relationships/family-relationships',
        },
      ],
    },
    {
      type: 'category',
      label: 'Search',
      link: { type: 'doc', id: 'search/index' },
      items: [{ type: 'autogenerated', dirName: 'search' }],
    },
    {
      type: 'category',
      label: 'GraphQL',
      link: { type: 'doc', id: 'graphql/index' },
      items: [{ type: 'autogenerated', dirName: 'graphql' }],
    },
    {
      type: 'category',
      label: 'React Components',
      link: { type: 'doc', id: 'react/index' },
      items: [{ type: 'autogenerated', dirName: 'react' }],
    },
    {
      type: 'html',
      value: '<strong>Advanced</strong>',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Integrations',
      link: { type: 'doc', id: 'integration/index' },
      items: [{ type: 'autogenerated', dirName: 'integration' }],
    },
    {
      type: 'category',
      label: 'Analytics',
      link: { type: 'doc', id: 'analytics/index' },
      items: [{ type: 'autogenerated', dirName: 'analytics' }],
    },
    {
      type: 'category',
      label: 'Rate Limits',
      link: { type: 'doc', id: 'rate-limits/index' },
      items: [{ type: 'autogenerated', dirName: 'rate-limits' }],
    },
    {
      type: 'category',
      label: 'Self-Hosting',
      link: { type: 'doc', id: 'self-hosting/index' },
      items: [{ type: 'autogenerated', dirName: 'self-hosting' }],
    },
    {
      type: 'category',
      label: 'Contributing',
      link: { type: 'doc', id: 'contributing/index' },
      items: [{ type: 'autogenerated', dirName: 'contributing' }],
    },
    {
      type: 'category',
      label: 'Compliance',
      link: { type: 'doc', id: 'compliance/index' },
      items: [{ type: 'autogenerated', dirName: 'compliance' }],
    },
  ],
  apiSidebar: [
    'api/index',
    {
      type: 'category',
      label: 'TypeScript SDK',
      link: { type: 'doc', id: 'sdk/core' },
      items: [
        { type: 'doc', id: 'sdk/core.medplumclient', label: 'MedplumClient' },
        { type: 'doc', id: 'sdk/core', label: 'Utilities' },
        { 'Bot Utilities': ['sdk/core.hl7message', 'sdk/core.botevent'] },
        {
          'Media Utilities': {
            PDF: ['sdk/core.createpdffunction'],
            Email: ['sdk/core.mailoptions', 'sdk/core.mailattachment', 'sdk/core.mailaddress'],
          },
        },
      ],
    },
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
};

export default sidebars;
