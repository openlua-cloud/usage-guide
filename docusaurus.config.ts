import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'openlua.cloud Usage Guide',
  tagline: 'openlua.cloud Usage Guide',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://guide.openlua.cloud',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openlua-cloud', // Usually your GitHub org/user name.
  projectName: 'usage-guide', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [{
    src: 'https://analytics.openlua.cloud/js/pa-a04FDqLJW9AbAvXvrFV0d.js',
    async: true
  }],
  headTags: [{
    tagName: 'script',
    attributes: {},
    innerHTML: 'window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()'
  }],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/openlua-cloud/usage-guide/tree/main/',
          routeBasePath: '/' // Docs-only mode
        },
        blog: false, // Disable blog for docs-only mode
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: '',
    announcementBar: {
      id: 'info_banner',
      content: 'Manifestor.cc is in the process of rebranding to openlua.cloud. More info in our Discord server',
      backgroundColor: '#20232a',
      textColor: '#fff',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'openlua.cloud Usage Guide',
      logo: {
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/faq',
          label: 'FAQ',
          position: 'left'
        },
        {
          href: 'https://status.openlua.cloud',
          label: 'Status',
          position: 'left'
        },
        {
          href: 'https://discord.gg/openlua',
          position: 'right',  
          className: 'header-discord-link'
        },
        {
          href: 'https://github.com/openlua-cloud/usage-guide',
          position: 'right',
          className: 'header-github-link'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Terms of Service',
              href: 'https://openlua.cloud/#termsofservice',
            },
            {
              label: 'Privacy Policy',
              href: 'https://openlua.cloud/#privacypolicy',
            },
          ],
        }
      ],
      copyright: `© ${new Date().getFullYear()} openlua.cloud. All rights reserved (hypothetically)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
