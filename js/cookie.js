/* Cookie */
document.addEventListener('DOMContentLoaded', function () {
    // Function to create a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  
    // Function to get a cookie
    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
  
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptCookiesButton = document.getElementById('accept-cookies');
    var declineButton = document.getElementById('decline');
  
    // Check if the user has already accepted cookies
    if (getCookie("cookies_accepted") !== "true") {
        if (cookieBanner) cookieBanner.style.display = 'block';
    }
  
    // Handle the accept button click
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function () {
            setCookie("cookies_accepted", "true", 365);
            if (cookieBanner) cookieBanner.style.display = 'none';
        });
    }
  
    // Handle the decline button click
    if (declineButton) {
        declineButton.addEventListener('click', function () {
            if (cookieBanner) cookieBanner.style.display = 'none';
        });
    }
  });