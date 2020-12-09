function postForms() {
   
    const forms = document.querySelectorAll('.get-contact__form');

    forms.forEach(item => {
        postData(item);
    });

    const message = {
        loading: "Загрузка",
        success: "Спасибо, скоро мы с Вами свяжемся",
        failure: "Ошибка...",
    }


    function postData(form) {

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(form);

            const object = {};
            formData.forEach((value,key) => {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if(request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });

        });
    }
   
        
}

export default postForms;