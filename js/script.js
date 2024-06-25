// 스크롤 이벤트
var page = 1;
        $("html").animate({scrollTop: 0}, 10);

        $(document).ready(function() {
            var lastPage = $("section").length;
            var mHtml = $("html, body");
            var pageHeight = 1080; // 고정된 높이 설정

            // 휠 이벤트로 페이지 이동
            $(window).on("wheel", function(e) {
                if (mHtml.is(":animated")) return;

                if (e.originalEvent.deltaY > 0) {
                    if (page == lastPage) return;
                    page++;
                } else if (e.originalEvent.deltaY < 0) {
                    if (page == 1) return;
                    page--;
                }

                var posTop = (page - 1) * pageHeight;
                mHtml.animate({scrollTop: posTop}, 800);
            });

            // 메뉴 클릭 이벤트로 페이지 이동
            $('.menu ul li a').on('click', function(e) {
                e.preventDefault();
                var targetId = $(this).attr('href');
                var targetIndex = $(targetId).index('section') + 1;

                page = targetIndex;

                var posTop = (page - 1) * pageHeight;
                mHtml.animate({scrollTop: posTop}, 800);
            });
        });


// line 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    function animateLine(element, duration) {
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            let progress = timestamp - start;
            let width = Math.min(progress / duration * 500, 500); // 500px까지 애니메이션
            element.style.width = width + 'px';
            if (progress < duration) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');

    animateLine(line1, 2000); // 2초 동안 애니메이션
    animateLine(line2, 2000); // 2초 동안 애니메이션
});

//회전 다이아몬드 + 아마도 뺄거같음
window.onload = function() {
    const diamonds = document.querySelectorAll('.diamond img');
    diamonds.forEach(img => {
        img.classList.add('spin');
    });
};

//스와이퍼
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    }
  });

// 디자인 클릭이벤트
// function toggleClickShow() {
//     var clickShow = document.querySelector('.clickShow');
//     clickShow.style.display = (clickShow.style.display === 'none' || clickShow.style.display === '') ? 'block' : 'none';
    
//     var img1 = document.querySelector('.img.img1');
//     img1.style.display = 'block';
// }

//close 버튼
// document.addEventListener('DOMContentLoaded', function() {
//     var closeBtns = document.querySelectorAll('.closeBtn');
//     closeBtns.forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             var clickShow = document.querySelector('.clickShow');
//             clickShow.style.display = 'none';
//         });
//     });
// });
