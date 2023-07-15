/*
*  작성일 : 23.06.30
*  작성자 : 김영민
*  기능명세 : 연월일시분 호출
* */
function TodayTimeFormal(props) {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1
    let todayDate = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    return todayYear + '-' + todayMonth + '-' + todayDate + '-' + hours + ':' + minutes + ':' + seconds;
}

export default TodayTimeFormal;