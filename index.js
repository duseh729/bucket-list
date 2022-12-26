// 클릭하면 done 클래스가 추가되도록 설계해보자
const stamp = document.querySelectorAll(".bucket");
console.log(stamp);

stamp.forEach(function (e) {
  if (localStorage.getItem(e.id)) {
    e.classList.add("done");
  }
});
// prettier-ignore
stamp.forEach((element) =>element.addEventListener("click", function (e) {
    key=element.id
    console.log(key)
    if (localStorage.getItem(key)){
      element.classList.remove('done')
      localStorage.removeItem(key)
    }else{
      localStorage.setItem(element.id, 'ok');
      element.classList.add('done')
    }
  })
);
