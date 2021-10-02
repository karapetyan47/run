import moment from 'moment';

export default function jogsByDate(jogs, from, to) {
  if (from && to) {
    return jogs.filter(
      (jog) =>
        moment(new Date(jog.date)).diff(moment(from)) >= 0 &&
        moment(to).diff(new Date(jog.date)) >= 0,
    );
  }

  if (to) {
    return jogs.filter((jog) => moment(to).diff(new Date(jog.date)) >= 0);
  }

  if (from) {
    return jogs.filter((jog) => moment(new Date(jog.date)).diff(moment(from)) >= 0);
  }

  return jogs;
}
