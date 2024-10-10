export function getAllNames(data) {
  const Logins = data.map((g) => {
    return g.Logins;
  });
  const LoginNames = Logins.flat(1);

  const offlines = data.map((g) => {
    return g.Offlines;
  });
  const offlineNames = offlines.flat(1);

  const allNames = LoginNames.concat(offlineNames);
  return allNames;
}

/**
 * detects the number's of colums that table has
 * @param {Json}} data
 * @returns []
 */

export function columnsDetector(data) {
    const colomns = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].StartTime !== null) {
        colomns.push({
          StartTime: data[i].StartTime,
          EndTime: data[i].EndTime,
          Offlines: data[i].Offlines,
          ResponsibilityName: data[i].Offlines.ResponsibilityName,
          Number: data[i].Number,
          Logins : data[i].Logins,
          ShiftName: data[i].Logins.ShiftName,
          LastName : data[i].Logins.LastName,

        });
      }
      
    }
    return colomns;
  };
   