// 클릭하면 done 클래스가 추가되도록 설계해보자
const stamp = document.querySelectorAll(".bucket");
console.log(stamp);
// prettier-ignore
stamp.forEach((element) =>element.addEventListener("click", function (e) {
    e.target.classList.toggle("done");
  })
);
