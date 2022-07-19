
/* The Team */
 var team = [{
    name: "Alice Stone",
    role: "UI Designer",
    desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
    photo: "images/image1.jpg",
    website: "https://rafaelalucas.com",
    email: "mailto:rafaelavlucas@gmail.com",
    linkedin: "https://www.linkedin.com/in/rafaelalucas/",
    dribbble: "https://dribbble.com/rafaelalucas",
},
{
    name: "Adam Turner",
    role: "Project Manager",
    desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
    photo: "images/image2.jpg",
    website: "https://rafaelalucas.com",
    email: "mailto:rafaelavlucas@gmail.com",
    linkedin: "https://www.linkedin.com/in/rafaelalucas/",
    dribbble: "https://dribbble.com/rafaelalucas",
},
{
    name: "Nancy Hughes",
    role: "UX Specialist",
    desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
    photo: "images/image3.jpg",
    website: "https://rafaelalucas.com",
    email: "mailto:rafaelavlucas@gmail.com",
    linkedin: "https://www.linkedin.com/in/rafaelalucas/",
    dribbble: "https://dribbble.com/rafaelalucas",
},
{
    name: "Jonathan Campbell",
    role: "Front-End Developer",
    desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
    photo: "images/image1.jpg",
    website: "https://rafaelalucas.com",
    email: "mailto:rafaelavlucas@gmail.com",
    linkedin: "https://www.linkedin.com/in/rafaelalucas/",
    dribbble: "https://dribbble.com/rafaelalucas",
},
{
    name: "Jack Keller",
    role: "Back-End Developer",
    desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
    photo: "images/image2.jpg",
    website: "https://rafaelalucas.com",
    email: "mailto:rafaelavlucas@gmail.com",
    linkedin: "https://www.linkedin.com/in/rafaelalucas/",
    dribbble: "https://dribbble.com/rafaelalucas",
},
{
    name: "Sara Carroll",
    role: "Head of UI Design",
    desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
    photo: "images/image3.jpg" ,
    website: "https://rafaelalucas.com",
    email: "mailto:rafaelavlucas@gmail.com",
    linkedin: "https://www.linkedin.com/in/rafaelalucas/",
    dribbble: "https://dribbble.com/rafaelalucas",
}];

var swiper_wrapper = document.querySelector('.swiper-wrapper');
const now = new Date();


// complete cards
for (var i=0 ; i<team.length ; i++){

    var new_member =
    `<div class="swiper-slide">
    <div class="slide">
            <span class="plus"></span>
        <div class="slide-photo">
            <img src="${team[i].photo}" alt=''>
        </div>

        <div class="slide-header">
        </div>
            
        <div class="slide-body">
            <h2>${team[i].name}</h2>
            <p>${team[i].role}</p>
        </div>

        <div class="information">
            <h2>${team[i].name}</h2>
            <p>${team[i].role}</p>
            <p>${team[i].desc}</p>    
        </div>
        <div class="slide-footer">
            <div class="pointer"></div>
            <a href="${team[i].website}" data-index='0' class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                </svg>
            </a>
            <a href="${team[i].email}" data-index='1' class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
            </a>
            <a href="${team[i].linkedin}" data-index='2' class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
            </a>
            <a href="${team[i].dribbble}" data-index='3' class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"/>
                </svg>
            </a>    
        </div>
        </div>
    </div>`;
    swiper_wrapper.insertAdjacentHTML('beforeend',new_member);
}

const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    loop: true,
    centeredSlides: false,
    speed: 800,
    slidesPerView: 3,
    threshold: 5,
    
    // Navigation arrows
    navigation: {
        nextEl: ".prev-btn",
        prevEl: ".next-btn"
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    
    breakpoints: {
        350: {
            slidesPerView: 1,
            centeredSlides: "true",
        },
        800: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    }
});


// show more details in card
document.querySelectorAll('.slide .plus').forEach(function(btn){
    btn.addEventListener('click', (event)=>{
        btn.classList.toggle('active');
        event.target.closest('.slide').classList.toggle('show-more');
    });
});


// social-media pinter
const footer_icons = document.querySelectorAll('.slide .slide-footer .icon');
footer_icons.forEach(function(btn){
    btn.addEventListener("mouseenter",(event)=>{
        var pointer = event.target.closest('.slide').querySelector('.pointer');
        var index = event.currentTarget.dataset.index;
        var sizeIcon = (67 * index) + 35;

        pointer.style.transform = `translateX(${sizeIcon}px) rotate(45deg) `;
        pointer.style.opacity = "1";
    });
    btn.addEventListener("mouseleave",(event)=>{
        var pointer = event.target.closest('.slide').querySelector('.pointer');
        pointer.style.opacity = "0";
    });
});
