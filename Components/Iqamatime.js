import DefaultPreference from 'react-native-default-preference';

class Iqamatime {
  constructor() {
    this.Fajrazaantime = '04:20';
    this.Fajrtime = '04:50';
    this.Dhuhrazaantime = '01:00';
    this.Dhuhrtime = '01:30';
    this.Asrazaantime = '05:15';
    this.Asrtime = '05:30';
    this.Maghribazaantime = '07:05';
    this.Maghribtime = '07:10';
    this.Ishaazaantime = '08:00';
    this.Ishatime = '08:15';
  }

  async getData() {
    try {
      const value1 = await DefaultPreference.get('Fajrazaan');
      if (value1 !== null) {
        this.Fajrazaantime = value1;
      }
      const value2 = await DefaultPreference.get('Fajrnamaaz');
      if (value2 !== null) {
        this.Fajrtime = value2;
      }
      const value3 = await DefaultPreference.get('Dhuhrazaan');
      if (value3 !== null) {
        this.Dhuhrazaantime = value3;
      }
      const value4 = await DefaultPreference.get('Dhuhrnamaaz');
      if (value4 !== null) {
        this.Dhuhrtime = value4;
      }
      const value5 = await DefaultPreference.get('Asrazaan');
      if (value5 !== null) {
        this.Asrazaantime = value5;
      }
      const value6 = await DefaultPreference.get('Asrnamaaz');
      if (value6 !== null) {
        this.Asrtime = value6;
      }
      const value7 = await DefaultPreference.get('Maghribazaan');
      if (value7 !== null) {
        this.Maghribazaantime = value7;
      }
      const value8 = await DefaultPreference.get('Maghribnamaaz');
      if (value8 !== null) {
        this.Maghribtime = value8;
      }
      const value9 = await DefaultPreference.get('Ishaazaan');
      if (value9 !== null) {
        this.Ishaazaantime = value9;
      }
      const value10 = await DefaultPreference.get('Ishanamaaz');
      if (value10 !== null) {
        this.Ishatime = value10;
      }
    } catch (e) {
      // error reading value
    }
  }

  async getiqamaafter() {
    await this.getData();

    return -1;

    var currdate = new Date();

    var year = currdate.getFullYear();
    var month = currdate.getMonth();
    var day = currdate.getDate();
    var hour = currdate.getHours();
    var minutes = currdate.getMinutes();
    var iqamaaftertime = '-1';

    var fajratime = this.createDatetime(
      this.Fajrazaantime,
      year,
      month,
      day,
      0,
      -30,
    );
    var fajrntime = this.createDatetime(this.Fajrtime, year, month, day, 0, 30);

    if (
      currdate.getTime() >= fajratime.getTime() &&
      currdate.getTime() < fajrntime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        fajrntime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    var dhuhratime = this.createDatetime(
      this.Dhuhrazaantime,
      year,
      month,
      day,
      0,
      -30,
    );
    var dhuhrntime = this.createDatetime(
      this.Dhuhrtime,
      year,
      month,
      day,
      0,
      30,
    );
    var spl1 = this.Dhuhrazaantime.split(':');
    if (parseInt(spl1) < 1) {
      dhuhratime = this.createDatetime(
        this.Dhuhrazaantime,
        year,
        month,
        day,
        12,
        -30,
      );
    }
    spl1 = this.Dhuhrtime.split(':');
    if (parseInt(spl1) < 1) {
      dhuhrntime = this.createDatetime(
        this.Dhuhrtime,
        year,
        month,
        day,
        12,
        30,
      );
    }
    if (
      currdate.getTime() >= dhuhratime.getTime() &&
      currdate.getTime() < dhuhrntime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        dhuhrntime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    var asratime = this.createDatetime(
      this.Asrazaantime,
      year,
      month,
      day,
      12,
      -30,
    );
    var asrntime = this.createDatetime(this.Asrtime, year, month, day, 12, 30);

    if (
      currdate.getTime() >= asratime.getTime() &&
      currdate.getTime() < asrntime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        asrntime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    var maghribatime = this.createDatetime(
      this.Maghribazaantime,
      year,
      month,
      day,
      12,
      -30,
    );
    var maghribntime = this.createDatetime(
      this.Maghribtime,
      year,
      month,
      day,
      12,
      30,
    );

    if (
      currdate.getTime() >= maghribatime.getTime() &&
      currdate.getTime() < maghribntime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        maghribntime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    var ishaatime = this.createDatetime(
      this.Ishaazaantime,
      year,
      month,
      day,
      12,
      -30,
    );
    var ishantime = this.createDatetime(
      this.Ishatime,
      year,
      month,
      day,
      12,
      30,
    );

    if (
      currdate.getTime() >= ishaatime.getTime() &&
      currdate.getTime() < ishantime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        ishantime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    return iqamaaftertime;
  }

  milisecondtoHHmm(ms) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour

    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    var hrs =
      hours.toString().length == 1 ? '0' + hours.toString() : hours.toString();
    var mins =
      minutes.toString().length == 1
        ? '0' + minutes.toString()
        : minutes.toString();

    return hrs + ':' + mins;
  }

  createDatetime(data, year, month, day, value, minsval) {
    var spl = data.split(':');
    var date1 = new Date(
      year,
      month,
      day,
      parseInt(spl[0]) + value,
      parseInt(spl[1]) + minsval,
    );
    return date1;
  }

  converthhmmToInt(data) {
    var spl = data.split(':');
    var mins = parseInt(spl[0]) * 60 + parseInt(spl[1]);
    return mins;
  }
}

export default Iqamatime;
