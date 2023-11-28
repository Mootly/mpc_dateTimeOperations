# MoosePlum Date-Time Operations

This is a collection of date-time operations. It was developed to autofill date-time fields in HTML forms.

It only works for field types of `date`, `time`, and `datetime-local`.

## Dependencies

Written for ES6.

This was written in TypeScript and exported to ES6 to allow support for browsers not yet up to the most recent ECMAScript standards.

## Contents

The files in this set are as follows:

| path                | description
| ------------        | ------------
| LICENSE.md          | License notice ( [MIT](https://mit-license.org) ).
| README.md           | This document.
| mpc_datetime.ts     | The class definition in TypeScript.
| mpc_datetime.js     | The class definition in ES6.
| mpc_datetime.min.js | Minified version.
| _invoke.js          | Example implementation code.

## Recommended HTML Code

The script is class driven. The default classes are as follows:

To autofill a date or time field, the default class is `autofill`.

```html
<input type="date" class="autofill" ... />
<input type="time" class="autofill" ... />
<input type="datetime-local" class="autofill" ... />
```

To autofill a time field and have it update so it is always showing the current time, the default class is `counttime`.

```html
<input type="time" class="autofill counttime" ... />
<input type="datetime-local" class="autofill counttime" ... />
```

You can use the same class for both operations, but keeping them separate helps to make the code self documenting.

## Implementation

### Coding Example

Use the `mp` namespace to help avoid collisions.

```js
let mp = {
  datetime: new mpc_dateTimeOperations()
  ⋮
};
```

To get current date and time values:

```js
let nowDate = mp.datetime.getDate();
let nowTime = mp.datetime.getTime();
```

To autofill current date and time values, specify field type and class name.

```js
let successA = mp.datetime.autofill('all', 'autofill');
let successB = mp.datetime.autofill('date', 'autofill');
let successC = mp.datetime.autofill('time', 'autofill');
let successD = mp.datetime.autofill('datetime', 'autofill');
```

To automatically update the time, specify field type and class name. This is only enabled for time and datetime fields.

```js
let successE = mp.datetime.countTime('time', 'counttime');
let successF = mp.datetime.countTime('datetime', 'counttime');
```
