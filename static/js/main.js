$(
    function slide(){
        let author = ["Saorabh Prakash", "Saorabh Prakash"]
        let title = ["Trustable Content","Perfect Place Before Exam"]
        let content = ["Here we deliver Trustable learning content for the college and semester exam , which goes through our watch before deliver to you all . ", "This platform is free for students before the exam , they get all organised content in easy and helpful way"]
        let bgcolor = ["linear-gradient(200deg, #3a62e7, #92abff)", " linear-gradient(200deg, #ff6021, #fdad7f)"]

        // Buttons
        let btn1 = $(".whyUs .container .contentCards .textContent .button .btn1")
        let btn2 = $(".whyUs .container .contentCards .textContent .button .btn2")
        // cards content
        let contenttitle = $(".whyUs .container .contentCards .card .cardcontainer .cardTitle p")
        let innercontent = $(".whyUs .container .contentCards .card .cardcontainer .content p")
        let innerauthor = $(".whyUs .container .contentCards .card .cardcontainer .cardCreatorDetail h2")
        let card = $(".whyUs .container .contentCards .card");
        count = 1
        btn1.click(() => {
            contenttitle.html(title[count]);
            innercontent.html(content[count]);
            innerauthor.html(author[count]);
            card.css({
                "background": bgcolor[count],
            })
            count -= 1
            if (count < 0){
                count = 0
            }
        })

        btn2.click(() => {
            contenttitle.html(title[count]);
            innercontent.html(content[count]);
            innerauthor.html(author[count]);
            
            count +=1
            card.css({
                "background": bgcolor[count],
            })
            if (count > title.length){
                count = title.length
            }
        })

        

    }
);
//smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});



