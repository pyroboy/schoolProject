document.addEventListener('DOMContentLoaded', function() {
    const accordionLinks = document.querySelectorAll('.sidebar ul li a');
accordionLinks.forEach(link => {
    // console.log(link);
    link.addEventListener('click', function() {
        // console.log("rat")
        const accordionContent = this.nextElementSibling;
        accordionContent.classList.toggle('active');
    });
});
});