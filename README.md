<div align="center">
    <h1>
        Read-Only Schema Field Type For ApostropheCMS
    </h1>
    <p>
        <a aria-label="Apostrophe logo" href="https://v3.docs.apostrophecms.org">
            <img src="https://img.shields.io/badge/MADE%20FOR%20APOSTROPHECMS-000000.svg?style=for-the-badge&logo=Apostrophe&labelColor=6516DD">
        </a>
        <a aria-label="Stripe logo" href="https://stripe.com">
            <img src="https://img.shields.io/badge/STRIPE-000000.svg?style=for-the-badge&logo=Stripe&labelColor=635bFF&logoColor=FFFFFF">
        </a>
        <br>
        <a aria-label="Personal logo" href="https://stepanjakl.com">
            <img src="https://img.shields.io/badge/STEPANJAKL.COM%20-000000.svg?style=for-the-badge&labelColor=EED500&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTAgMTV2NWgyMFY3LjVIMHY1aDE1LjA1VjE1SDBaTTIwIDBIMHY1aDIwVjBaIiAvPjwvc3ZnPg==">
        </a>
        <a aria-label="License"
           href="https://github.com/apostrophecms/module-template/blob/main/LICENSE.md">
            <img alt="License"
                 src="https://img.shields.io/static/v1?style=for-the-badge&labelColor=000000&label=License&message=MIT&color=3DA639">
        </a>
    </p>
</div>

<br>

This module adds a schema field type designed solely for displaying relevant data in read-only mode, without allowing any editing capability.

<br>

**This module is used primarily in Apostrophe Stripe packages such as [stripe-checkout](https://github.com/stepanjakl/apostrophe-stripe-checkout) or [stripe-products](https://github.com/stepanjakl/apostrophe-stripe-products).**

<br>

## Installation

Use your preferred package manager to install the module:

```zsh
npm install read-only-field@npm:@stepanjakl/apostrophe-read-only-field
```

<br>

## Usage

First, add the installed module to your configuration in the `app.js` root file:

```js
require('apostrophe')({
  shortName: 'project-name',
  modules: {
    'read-only-field': {}
  }
});
```

<br>

Then, easily add the field type to any module that accepts the `fields` property. The schema field object accepts optional parameters such as `copyToClipboard`, `openInNewTab`, and `openInNewTabPrepend`. See the example below:

```js
module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      name: {
        type: 'readOnly',
        label: 'Name',
        copyToClipboard: true,
        openInNewTab: true,
        openInNewTabPrepend: `${process.env.STRIPE_DASHBOARD_BASE_URL}${process.env.STRIPE_TEST_MODE === 'false' ? '' : '/test'}/prices/`
      }
    }
  }
}
```
