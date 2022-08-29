const widthItem = document.querySelectorAll('.about-item');
const heading = document.querySelectorAll('.about-item h4');
const para = document.querySelectorAll('.para');
console.log(heading)

function increaseWidth(index){
    widthItem.forEach(function (node){
        node.style.width = '30px';
    })
    // widthItem[index].style.backgroundColor = 'red';
    widthItem[index].style.width = '90%';

    para.forEach(function (node){
        node.style.display = 'none';
    })
    para[index].style.display = 'block';

    heading.forEach(function (node){
        node.style.writingMode = 'vertical-lr';
    })
    heading[index].style.writingMode = 'horizontal-tb';
}
// widthItem.style.width = '40px';
increaseWidth(2);




const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'service_lr1cxqf';
  const templateID = 'template_5xsilqe';

  emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'Send Email';
     alert('Sent Successfully');
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });
});










