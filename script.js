window.addEventListener('scroll', changeColor)

function changeColor() {
    if (scrollY > 535){
        document.getElementById('the-navbar').classList.add('dark-navbar')
        document.querySelectorAll('h4').forEach(function(element){
            element.style.color = 'white';
        })
    } else {
        document.getElementById('the-navbar').classList.remove('dark-navbar')
        document.querySelectorAll('h4').forEach(function(element){
            element.style.color = 'black';
        })
    }
}

const sections = [
    document.querySelector('#about-me'), 
    document.querySelector('#work'),
    document.querySelector('#skill-area')
];

const options = {
    rootMargin: '-150px'
};

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        
        if (entry.target.id == 'about-me' && entry.isIntersecting){
            let large_text = document.querySelector('#large-title-about');
            let carlton = document.querySelector('#carlton');
            let large_image = document.querySelector('#large-image-right');
            let medium_text = document.querySelector('#medium-sub-heading-about');
            let about_text = document.querySelector('#about-me-description');
            large_text.classList.add('show');
            large_text.classList.remove('start-up');
            carlton.classList.add('show');
            carlton.classList.remove('start-left');
            large_image.classList.add('show');
            large_image.classList.remove('start-right');
            medium_text.classList.add('show');
            about_text.classList.add('show');
        }
        if (entry.target.id == 'work' && entry.isIntersecting){
            let box1 = document.querySelector('#box1');
            let box2 = document.querySelector('#box2');
            let box3 = document.querySelector('#box3');
            let text1 = document.querySelector('#text1');
            let text2 = document.querySelector('#text2');
            let text3 = document.querySelector('#text3');
            let large_text = document.querySelector('#large-text');
            large_text.classList.add('show');
            large_text.classList.remove('start-up');
            box1.classList.add('show');
            box1.classList.remove('start-left');
            box2.classList.add('show');
            box2.classList.remove('start-left');
            box3.classList.add('show');
            box3.classList.remove('start-left');
            text1.classList.add('show');
            text1.classList.remove('start-right');
            text2.classList.add('show');
            text2.classList.remove('start-right');
            text3.classList.add('show');
            text3.classList.remove('start-right');
        }
        if (entry.target.id == 'skill-area' && entry.isIntersecting){
            let title = document.querySelector('#top-skill-header');
            let traitsLeft = document.querySelector('#traitsLeft');
            let traitsRight = document.querySelector('#traitsRight');
            let techLeft = document.querySelector('#techLeft');
            let techRight = document.querySelector('#techRight');
            title.classList.add('show');
            title.classList.remove('start-up');
            traitsLeft.classList.add('show');
            traitsLeft.classList.remove('start-right');
            traitsRight.classList.add('show');
            traitsRight.classList.remove('start-right');
            techLeft.classList.add('show');
            techLeft.classList.remove('start-down');
            techRight.classList.add('show');
            techRight.classList.remove('start-down');
        }
    })
}, options);

sections.forEach((section)=>{
    observer.observe(section);
})

let div = document.querySelector('#skill-area');
let tech_bars = document.querySelectorAll('.progress-bar')
div.addEventListener('mouseenter', ()=>{
    tech_bars.forEach((bar)=>{
        bar.style.width = "80%"
    })
})