function TodayTimeFormal(props) {
  let now = new Date()
  let todayYear = now.getFullYear()
  let todayMonth = now.getMonth() + 1
  let todayDate = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  return (
    todayYear +
    '-' +
    todayMonth +
    '-' +
    todayDate +
    '-' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds
  )
}

export default TodayTimeFormal
