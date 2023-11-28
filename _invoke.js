/* ---------------------------------------------------------------------------- */
/*! --- Implementation Example Script ----------------------------------------- *
 * Copyright (c) 2023 Mootly Obviate -- See /LICENSE.md
 * ---------------------------------------------------------------------------- */
                    // All scripts in the mp namespace to avoid collisions.     *
let mp = {
  datetime          : new mpc_dateTimeOperations(),
//...
};
                    // To get current date and time values
let nowDate = mp.datetime.getDate();
let nowTime = mp.datetime.getTime();
                    // To autofill current date and time values
let successA = mp.datetime.autofill('all', 'autofill');
let successB = mp.datetime.autofill('date', 'autofill');
let successC = mp.datetime.autofill('time', 'autofill');
let successD = mp.datetime.autofill('datetime', 'autofill');
                    // To automatically update the time
let successE = mp.datetime.countTime('time', 'counttime');
let successF = mp.datetime.countTime('datetime', 'counttime');
