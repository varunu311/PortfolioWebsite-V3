document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 50);
  });



const divBoxLinks = document.querySelectorAll('.div-box-1 a, .div-box-2 a, .div-box-3 a, a');

divBoxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = e.currentTarget.href;
        
        document.body.classList.add('clicked');

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});
