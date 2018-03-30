/**
 * Created by Administrator on 2018/3/8.
 */
//添加class名
export function addClass(el, className) {
  let isHasClass = hasClass(el, className);
  if (!isHasClass){
    let newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');
  }
}

export function hasClass(el, className) {
  return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
}

export function getSongMsg(item) {
  let song = {
    id: item.id,
    name: item.name,
    artists: item.artists,
    album: item.album,
    duration: item.duration
  };
  return song
}

export function pad(m, n = 2) {
  let len = m.toString().length;
  while (n > len) {
    m = '0' + m;
    len++;
  }
  return m;
}
export function format(thisTime){
  thisTime = thisTime | 0;
  let min = thisTime/60 | 0;
  let s = pad(thisTime%60);
  return `${min}:${s}`
}

let song = {
  id: '',
  name: '',
  artists: [{}],
  album: {}
}

