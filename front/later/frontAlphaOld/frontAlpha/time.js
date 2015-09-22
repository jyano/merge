

function $superUTC(d) {
    // uniT ms 0-999
    d.sUMs = d.setUTCMilliseconds
    d.gUMs = d.getUTCMilliseconds

    //uniT secs 0-59
    d.SUSc = d.setUTCSeconds
    d.gUSc = d.getUTCSeconds//

    //uniT min 0-59
    d.sUMn = d.setUTCMinutes
    d.gUMn = d.getUTCMinutes

    //uniT hour 0-23
    d.sUH = d.setUTCHours
    d.gUH = d.getUTCHours


    d.gUM = d.getUTCMonth
    d.sUM = d.setUTCMonth

    //uniT dtOb's year (4digs)
    d.sUFY = d.setUTCFullYear
    d.gUFY = d.getUTCFullYear

    //  uniT  dOM 1-31
    d.gUDt = d.getUTCDate
    d.sUDt = d.setUTCDate

    d.U = d.UTC //num of MSs in a date since midnight of 1/1/70, according to UTC time
    d.gUD = d.getUTCDay // uniT dOW 0-6
    d.gO = d.gTO = d.getTimezoneOffset// mns dif bwn UTC/local time

    return d
}
function $superParse(d) {
    d.tS = d.toString  //dtOb -> str
    d.tI = d.toISOString   //date as a str, using ISO standard
    d.tDt = d.toDateString //Converts the date portion of   dtOb into a readable string
    d.tLDt = d.toLocaleDateString//    date portion of a dtOb as   string, using locale conventions
    d.tLT = d.toLocaleTimeString  //time portion of  dtOb as   string, using locale conventions
    d.tL = d.toLocaleString   //dtOb -> str, using locale conventions

    d.tT = d.toTimeString //Converts   time portion of  dtOb to   string

    d.tU = d.toUTCString   //dtOb -> str, by uniT
    d.p = d.parse //Parses date str  and num   ms snc 1/1/70
    d.j = d.tJ = d.toJSON   //date as   str, formatted as a JSON date
    d.v = d.vO = d.valueOf   //primitive val  of   dtOb
    return d
}
function oneHourFromNowInDateForm() {
    return $D.n($D.H)
}