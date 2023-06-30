import React from 'react';

function TodayTimeFormal(props) {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : '0' + (now.getMonth() + 1)
    let todayDate = (now.getDate() + 1) > 9 ? (now.getDate() + 1) : '0' + (now.getDate() + 1)
    let hours = (now.getHours() + 1) > 9 ? (now.getHours() + 1) : '0' + (now.getHours() + 1)
    let minutes = (now.getMinutes() + 1) > 9 ? (now.getMinutes() + 1) : '0' + (now.getMinutes() + 1)
    return todayYear + '/' + todayMonth + '/' + todayDate + '/' + hours + '/' + minutes
}

export default TodayTimeFormal;