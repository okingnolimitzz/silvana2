//INICIO primeiro slider "Pronto para morar"
$(function(){

    $(".propriedades-container").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-next"),
        responsive: [
          {
            breakpoint: 1665,
              settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerMode: true
            }
          },
          {
            breakpoint: 1585,
              settings: {
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 4,
              
            }
          },
          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                centerMode: false
              }
            },
            {
              breakpoint: 989,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                centerMode: false,
              }
            },
            {
              breakpoint: 762,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                  focusOnSelect: false,
                  variableWidth: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
              }
            },
            {
              breakpoint: 391,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
              }
            }
          ]
    });

  })
    //FIM primeiro slider "Pronto para morar"


    // INICIO Segundo slider "Lançamentos"
    $(function(){

      $("#propriedades-container2").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        prevArrow: $("#arrow-prev2"),
        nextArrow: $("#arrow-next2"),
        responsive: [
          {
            breakpoint: 1665,
              settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerMode: true
            }
          },
          {
            breakpoint: 1585,
              settings: {
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 4,
              
            }
          },
          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                centerMode: false
              }
            },
            {
              breakpoint: 989,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                centerMode: false
              }
            },
            {
              breakpoint: 762,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                  focusOnSelect: false,
              }
            },
            {
              breakpoint: 600,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                  focusOnSelect: false,
                  variableWidth: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
               // variableWidth: true,
              }
            }
          ]
    })

})
    // FIM Segundo slider "Lançamentos"



    





