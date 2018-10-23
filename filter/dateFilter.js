var dateFilter = {
  getDateObject: function (str) {
    return new Date(str)
  },
  formatDate(date) {
    let _date = new Date(date);
    let _week = ['日', '一', '二', '三', '四', '五', '六']
    return {
      year: _date.getFullYear() || '',
      month: _date.getMonth() + 1 || '',
      day: _date.getDate() || '',
      week: _week[_date.getDay()] || '',
      timeStamp: date || '',
    }
  },
}

module.exports = dateFilter