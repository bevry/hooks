<!-- TITLE/ -->

<h1>@bevry/hooks</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.com/bevry/hooks" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/com/bevry/hooks/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/@bevry/hooks" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bevry/hooks.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@bevry/hooks" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@bevry/hooks.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/bevry/hooks" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/bevry/hooks.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/bevry/hooks#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/bevry/hooks.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Aggregation of react hooks that we use. Such as useInterval, useMetaKey.

<!-- /DESCRIPTION -->


## Usage

[Complete API Documentation.](http://master.hooks.bevry.surge.sh/docs/globals.html)

<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save @bevry/hooks</code></li>
<li>Import: <code>import * as pkg from ('@bevry/hooks')</code></li>
<li>Require: <code>const pkg = require('@bevry/hooks')</code></li>
</ul>

<a href="https://www.pika.dev/cdn" title="100% Native ES Modules CDN"><h3>pika</h3></a>

``` html
<script type="module">
    import * as pkg from '//cdn.pika.dev/@bevry/hooks/^3.0.0'
</script>
```

<a href="https://unpkg.com" title="unpkg is a fast, global content delivery network for everything on npm"><h3>unpkg</h3></a>

``` html
<script type="module">
    import * as pkg from '//unpkg.com/@bevry/hooks@^3.0.0'
</script>
```

<a href="https://jspm.io" title="Native ES Modules CDN"><h3>jspm</h3></a>

``` html
<script type="module">
    import * as pkg from '//dev.jspm.io/@bevry/hooks@3.0.0'
</script>
```

<h3><a href="https://editions.bevry.me" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>@bevry/hooks/source/index.ts</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> source code with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li>
<li><code>@bevry/hooks</code> aliases <code>@bevry/hooks/edition-esnext/index.js</code></li>
<li><code>@bevry/hooks/edition-esnext/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against <a href="https://en.wikipedia.org/wiki/ECMAScript#ES.Next" title="ECMAScript Next">ESNext</a> for <a href="https://nodejs.org" title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine">Node.js</a> with <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a> for modules</li>
<li><code>@bevry/hooks/edition-browsers/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against <a href="https://en.wikipedia.org/wiki/ECMAScript#10th_Edition_-_ECMAScript_2019" title="ECMAScript ES2019">ES2019</a> for web browsers with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li></ul>

<!-- /INSTALL -->


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/bevry/hooks/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/bevry/hooks/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li>Benjamin Lupton</li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li>Benjamin Lupton</li>
<li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/hooks/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/hooks">view contributions</a></li>
<li><a href="http://github.com/apps/dependabot-preview">dependabot-preview[bot]</a> — <a href="https://github.com/bevry/hooks/commits?author=dependabot-preview[bot]" title="View the GitHub contributions of dependabot-preview[bot] on repository bevry/hooks">view contributions</a></li></ul>

<a href="https://github.com/bevry/hooks/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2019+ Benjamin Lupton</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
