# MoosePlum Date-Time Operations

Repo: [Mootly/mpc_dateTimeOperations](https://github.com/Mootly/mpc_dateTimeOperations)

This is a collection of date-time operations. It was developed to autofill date-time fields in HTML forms.

It currently only works for field types of `date`, `time`, and `datetime-local`.

## Dependencies

This was written in TypeScript and exported to ES2020.

## Assets

The files in this set are as follows:

| path                | description                                        |
| ------------------- | -------------------------------------------------- |
| CHANGELOG.md        | The changelog for this utility.                    |
| LICENSE.md          | License notice ( [MIT](https://mit-license.org) ). |
| README.md           | This document.                                     |
| datetime.ts         | The class definition in TypeScript.                |
| datetime.js         | The class definition in ES2020.                    |
| datetime.min.js     | Minified version.                                  |
| datetime.min.js.map | Map file.                                          |
| tsconfig.json       | Example TS > ES2020 config setting.                |
| _invoke.js          | Example implementation code.                       |

## Installation

Download this repo, or just the script, and add it to the script library for your site.

This script has no external dependencies.

### Compiling from the TypeScript

To save to ES2020 in the current folder, assuming you have the correct libraries installed, run the following in this folder:

`tsc -p tsconfig.json`

## Configuration

### Recommended HTML Code

The script is HTML class attribute driven. The default classes are as follows:

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

### Coding Example

Use the `mp` namespace to help avoid collisions.

```js
let mp = {
  datetime: new mpc_dateTimeOperations(),
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
