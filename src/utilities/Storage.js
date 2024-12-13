class Storage {
  //#region generic storage methods

  static async getListFromLocalStorage(key) {
    let values = localStorage.getItem(key);
    if (values === null) {
      values = [];
    } else {
      values = JSON.parse(values);
    }
    return values;
  }

  /**
   * For storing a list of primitive values; always refreshes newest and removes oldest if needed
   * @param {string} key identifier for the whole list
   * @param {*} val a unique primitive value to be added to the list
   * @param {number} maxCount optional: how many values to keep in storage
   * @returns removed values, if any
   */
  static async addToLocalStorageList(key, val, maxCount) {
    //assume the array sort order persists;
    //always put newly accessed values at the front, remove oldest to keep maxCount
    let removedValues = [];
    let valuesArray = await Storage.getListFromLocalStorage(key);
    valuesArray = valuesArray.filter((i) => i !== val);
    valuesArray.unshift(val);
    if (maxCount) {
      while (valuesArray.length > maxCount) {
        removedValues.push(valuesArray.pop());
      }
    }
    localStorage.setItem(key, JSON.stringify(valuesArray));
    return removedValues;
  }

  static async removeFromLocalStorageList(key, val) {
    let valuesSet = new Set(await Storage.getListFromLocalStorage(key));
    valuesSet.delete(val);
    localStorage.setItem(key, JSON.stringify(Array.from(valuesSet)));
  }

  //#endregion

  //// idea for future: extend basic storage class

  //#region methods specific to advent calendar

  static calendarDaysOpenedListName = "AdventCalendar_daysOpened";

  static async getCalendarDaysOpened() {
    return Storage.getListFromLocalStorage(Storage.calendarDaysOpenedListName);
  }

  static setCalendarDaysOpened(days) {
    if (days?.length) {
      localStorage.setItem(Storage.calendarDaysOpenedListName, JSON.stringify(days));
    }
  }

  static addToCalendarDaysOpened(day) {
    Storage.addToLocalStorageList(Storage.calendarDaysOpenedListName, day);
  }

  static clearCalendarDaysOpened() {
    localStorage.removeItem(Storage.calendarDaysOpenedListName);
  }

  //#endregion
}

export default Storage;

