/** --- Common Date and Time Functions ---------------------------------------- *
 * mpc_datetime
 * @copyright 2017-2023 Mootly Obviate -- See /LICENSE.md
 * @license   MIT
 * @version   1.0.0
 * ---------------------------------------------------------------------------- *
 * Return current date and time formatted for HTML input fields.
 * Autoset date and time fields with specified class.
 * Auto-increment time fields with specified class.
 * ---------------------------------------------------------------------------- *
 * Methods:
 *  - getDate() : string
 *    Returns the current date.
 *  - getTime() : string
 *    Returns the current Time.
 *  - getDateTime() : string
 *    Returns the current date and time - 'yyyy-mm-ddThh:ss'.
 *  - autofill(fieldtype : string, classname : string) : boolean
 *    Autofill date, time, and datetime-local fields with a given class name.
 *  - countTime(classname : string) : boolean
 *    Refresh a time field of a given class name every 10 seconds.
 * *** Usage Example ---------------------------------------------------------- *
 * Need both load and scroll listeners
 * let mp = {
 *   datetime: new mpc_dateTimeOperations(),
 *   ...
 * };
 * let nowDate      = mp.datetime.getDate();
 * let nowTime      = mp.datetime.getTime();
 * let nowDateTime  = mp.datetime.getDateTime();
 * let success      = mp.datetime.autofill('all|date|time|datetime','classname');
 * let success      = mp.datetime.countTime('time|datetime''classname');
 * --- Revision History ------------------------------------------------------- *
 * 2023-12-04 | Version 1.0.0 completed.
 * ---------------------------------------------------------------------------- */
class mpc_dateTimeOperations {
  date              : string;
  time              : string;
  datetime          : string;
  dateEl            : NodeListOf<HTMLInputElement>;
  timeEl            : NodeListOf<HTMLInputElement>;
  datetimeEl        : NodeListOf<HTMLInputElement>;
  constructor (){
    this.date       = this.getDate();
    this.time       = this.getTime();
    this.datetime   = this.getDateTime();
  }
  getDate() {
    let now         = new Date();
    let day         = ("0" + now.getDate()).slice(-2);
    let month       = ("0" + (now.getMonth() + 1)).slice(-2);
    let nowDate     = now.getFullYear()+"-"+(month)+"-"+(day) ;
    return nowDate;
  }
  getTime() {
    let now         = new Date();
    let hours       = ("0" + now.getHours()).slice(-2);
    let minutes     = ("0" + now.getMinutes()).slice(-2);
    let nowTime     = (hours)+":"+(minutes) ;
    return nowTime;
  }
  getDateTime() {
    let date        = this.getDate();
    let time        = this.getTime();
    return date+'T'+time;
  }
  autofill(type : string = 'all', target : string = 'autofill') {
    let cString     = '[class*='+target+']';
    switch (target) {
    case 'date':
      this.dateEl = document.querySelectorAll('input[type=date]'+cString);
      this.dateEl.forEach ((el)=>{ el.value = this.getDate(); });
      break;
    case 'time':
      this.timeEl = document.querySelectorAll('input[type=time]'+cString);
      this.timeEl.forEach ((el)=>{ el.value = this.getTime(); });
      break;
    case 'datetime':
      this.datetimeEl = document.querySelectorAll('input[type=datetime-local]'+cString);
      this.datetimeEl.forEach ((el)=>{ el.value = this.getDateTime(); });
      break;
    default:
      this.dateEl = document.querySelectorAll('input[type=date]'+cString);
      this.dateEl.forEach ((el)=>{ el.value = this.getDate(); });
      this.timeEl = document.querySelectorAll('input[type=time]'+cString);
      this.timeEl.forEach ((el)=>{ el.value = this.getTime(); });
      this.datetimeEl = document.querySelectorAll('input[type=datetime-local]'+cString);
      this.datetimeEl.forEach ((el)=>{ el.value = this.getDateTime(); });
      break;
    }
    return true;
  }
  countTime(type : string = 'time', target : string = 'counttime') {
    let cString     = '[class*='+target+']';
    if (type == 'datetime') {
      this.timeEl = document.querySelectorAll('input[type=datetime-local]'+cString);
      this.timeEl.forEach ((el)=>{ setInterval(() => { el.value = this.getDateTime(); }, 10*1000);});
    } else {
      this.timeEl = document.querySelectorAll('input[type=time]'+cString);
      this.timeEl.forEach ((el)=>{ setInterval(() => { el.value = this.getTime(); }, 10*1000);});
    }
    return true;
  }
}
/* ---------------------------------------------------------------------------- */
