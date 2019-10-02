# Phoenix Tabs

Phoenix Drop Down bzw. Select Box. Umgesetzt mit Mithril.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Installation

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/select
```

## Anwendung

```js
// entweder CommonJS
const Tabs = require('@phoenixreisen/select');

// oder ES6+
import Tabs from '@phoenixreisen/select';
```

#### Aufruf

```js
// Hyperscript bzw. Javascript
const el1 = m('div');
const el2 = m('div');
const el3 = m('a'); 

m(SelectView, { title: 'Optionen' }, [ 
    el1, 
    el2, 
    el3 
]);

// JSX
<Select title="Optionen">
    <el1 />
    <el2 />
    <el3 />
</Select>
```

## Test

```bash
npm install
npm run test
```

## Deployment

```bash
npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```