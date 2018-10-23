// 城市分类过滤器
let classifyCity = function (list) {
  let arr = [], arr_new = [];
  for (let i = 0; i < list.length; i++) {
    let s = list[i].pinyin.slice(0, 1);
    if (!arr[s]) {
      arr[s] = [];
    }
    arr[s].push(list[i])
  }
  // 将键值数组变成下标数组
  for (var k in arr) {
    let obj = {
      'key': k,
      value: arr[k]
    };
    arr_new.push(obj)
  }
  function compare(property) {
    return function (a, b) {
      var value1 = a[property].charCodeAt(0);
      var value2 = b[property].charCodeAt(0);
      return value1 - value2;
    }
  }
  // 将数组排序
  arr_new.sort(compare('key'))
  return arr_new;
}

module.exports = classifyCity

