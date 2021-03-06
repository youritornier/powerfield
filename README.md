# [Powerfield](https://youritornier.github.io/powerfield/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/youritornier/powerfield.svg?branch=master)](https://travis-ci.org/youritornier/powerfield)

Powerfield is a npm package regrouping useful form fields directive for Angular projects. All directives are compatible with Angular Material. The Powerfield aim is to deliver modularity and performance in your Angular projects. Powerfield helps you with common needed Angular input directives.

# Installation
To install the Powerfield package in your project using npm, open a terminal/console window and enter the following command:
```
npm install powerfield
```

To import the installed package to your module, open your module file and edit it as follow:
```typescript
import { PowerfieldModule } from 'powerfield';

@NgModule({
  ...
  imports: [
    ...
    PowerfieldModule,
  ],
  ...
})
...
```

# Documentation
You can find the full Powerfield documentation [here](https://youritornier.github.io/powerfield/). This documentation contains a description of every Powerfield directives and related examples.

# Examples
You can use every provided directives directly in your component templates. Here is an example of the use of the powAutoWidth directive:
```html
<input type="text" powAutoWidth [powExtraWidth]="20" />
```

# Authors
Find all Powerfield authors [here](AUTHORS).

# License
Powerfield is [MIT licensed](LICENSE).
