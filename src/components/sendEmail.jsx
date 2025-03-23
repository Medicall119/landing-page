import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    '--service_id--',
    '--template_id--',
    e.target,
    '--user_id--'
  ).then((result) => {
    alert('문의가 성공적으로 전송되었습니다!');
  }, (error) => {
    alert('전송에 실패했습니다. 다시 시도해주세요.');
    console.log(error.text);
  });

  e.target.reset(); // 폼 초기화
};

export default sendEmail;
