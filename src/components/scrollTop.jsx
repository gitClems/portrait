import './css/scrollTop.scss'


function ScrollToTop() {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        let mybutton = document.getElementById('scrollBtn');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "flex";
            mybutton.style.transition = '0.2s'
        } else {
            mybutton.style.display = "none";
            mybutton.style.transition = '0.2s'
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <>
            <button id="scrollBtn" onClick={() => topFunction()} title="Go to top"></button>
        </>
    )
}

export default ScrollToTop