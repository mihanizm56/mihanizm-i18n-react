# @mihanizm56/i18n-react

## Sollution for i18n for react&redux usage based on intl-messageformat library (format.js)

## Examples of usage

#### installation

```javascript
npm install @mihanizm56/i18n-react
```

#### connection to redux

```javascript
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { translationMiddleware, translationStorage } from "@mihanizm56/i18n-react";
import { fetchLanguageKeysRequest } from "../../services/api/requests/fetch-language-keys";

const rootReducer = combineReducers({
  translationStorage,
    // ...other reducers
});

export const createAppStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      translationMiddleware(fetchLanguageKeysRequest)
    )
  );

  return store;
};
```

#### action to make request to the backend to get i18n dictionary

```javascript
import { fetchLangAction } from "@mihanizm56/i18n-react";
```

#### Component-based api

```javascript
import React, { memo } from "react";
import { TranslationComponent } from "@mihanizm56/i18n-react";

export const CardWithComponent = memo(() => (
  <p>
    <TranslationComponent key="card-text" options={{foo:'bar'}}/>
  </p>
));
```

#### Render-props-based api

```javascript
import React, { memo } from "react";
import { TranslationRenderProps } from "@mihanizm56/i18n-react";

export const CardRenderProps = memo(({ i18n }) => (
  <TranslationRenderProps>
    {({ i18n }) => <p>{i18n("card-text", {foo:'bar'})}</p>}
  </TranslationRenderProps>
));
```

#### HOC-based api

```javascript
import React, { memo } from "react";
import { TranslationHOC } from "@mihanizm56/i18n-react";

export const TranslatedCard = memo(({ i18n }) => (
  <div>{i18n("card-text", {foo:'bar'})}</div>
));

export const CardHOC = TranslationHOC(TranslatedCard);
```

#### example of the request to get i18n dictionary

```javascript
export const fetchLanguageKeysRequest = (lang) =>
  fetch(`http://google.com?lang=${lang}`).then((data) => data.json());
```

### !!! Attention !!!

### Response of the request must have that fields:

- error (boolean) - the flag of the response status
- errorText (string) - the main error message from the backend
- data (object) - the main data from the backend
