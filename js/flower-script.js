onload = () =>{
    document.body.classList.remove("container");
};
function goToNextPage() {
    window.location.href = '../ForU/next-page.html';
}
setTimeout(function() {
    document.getElementById('top-banner').style.display = 'block';
}, 10000);