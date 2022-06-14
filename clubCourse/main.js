$(function s() {
  $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let p = document.getElementById("cm").value;
  let q = document.getElementById("cd").value;
  setMonthAndDay(p, q);

  var topicCount = topic.length;
  // 一秒鐘有1000毫秒
  // 每分鐘60秒、每小時60分鐘、每天24小時
  let millisecsPerDay = 24 * 60 * 60 * 1000;
  for (var x = 0; x < topicCount; x++) {
    console.log(x);
    if (x == 0 || x == 1) {
      $("#courseTable").append(
        `<tr class="st">
                <td>${x + 1}</td>
                <td id="${x}">${new Date(
          startDate.getTime() + 7 * x * millisecsPerDay
        )
          .toLocaleDateString()
          .slice(5)}</td>
                <td>${topic[x]}</td>
                </tr>`
      );
    } else {
      $("#courseTable").append(
        `<tr>
                <td>${x + 1}</td>
                <td id="${x}">${new Date(
          startDate.getTime() + 7 * x * millisecsPerDay
        )
          .toLocaleDateString()
          .slice(5)}</td>
                <td>${topic[x]}</td>
                </tr>`
      );
    }
  }

  document.getElementById("button").onclick = function () {
    let p = document.getElementById("cm").value;
    let q = document.getElementById("cd").value;
    if (p > 12 || p < 1) {
      p = 1;
    }
    if (q > days[p - 1] || q < 1) {
      q = days[p - 1];
    }
    setMonthAndDay(p, q);
    for (var x = 0; x < topicCount; x++) {
      document.getElementById(x).innerHTML = new Date(
        startDate.getTime() + 7 * x * millisecsPerDay
      )
        .toLocaleDateString()
        .slice(5);
    }
  };
});
