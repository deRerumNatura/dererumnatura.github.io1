$(document).ready(function () {
   // lottie animation
   $('.lottie').css('display', 'none');

   let timer = setInterval(function () {
      
      if ($('.header-bcg-pattern img')[0].complete) {
         $('.logo').css('display', 'none');
         $('.lottie').css('display', 'flex');
         $('.header-illustration-wrapper').animate({ 'opacity': 1, 'left': 0 }, 1500);
         clearInterval(timer);
      }
   }, 500);
   
   if (window.location.href != "http://localhost:3000/") {
      setTimeout(function () {
         $('.logo').css('display', 'none');
         $('.lottie').css('display', 'flex');
         $('.header-illustration-wrapper').animate({ 'opacity': 1, 'left': 0 }, 1500);
      }, 1000)
   }
   // setTimeout(function () {
   //    $('.logo').css('display', 'none');
   //    $('.lottie').css('display', 'flex');
   //    $('.header-illustration-wrapper').animate({'opacity': 1, 'left': 0}, 1500);
   // }, 2000);


   // setTimeout(function () {
   //    $('.lottie').animate({ 'opacity': '0' }, 800);
   // }, 5000);

   // setTimeout(function () {
   //    $('.main-container').animate({ 'opacity': '1' }, 1200);
   //    $('.lottie').css({ 'display': 'none' });
   //    $('html').css({ 'overflow-y': 'scroll'});
   // }, 6000);

   //////////////////////////////////////////////////////////////
   ////// Services cards hover///////////////////////////////////

   $('#serviceCard1').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard1').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard1 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard1 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard1 .service-description').css({
         display: 'none'
      });

      $('#serviceCard1 .icon-wrapper').css({
         display: 'flex'
      });
   });

   $('#serviceCard2').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard2').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard2 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard2 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard2 .service-description').css({
         display: 'none'
      });

      $('#serviceCard2 .icon-wrapper').css({
         display: 'flex'
      });
   });

   $('#serviceCard3').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard3').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard3 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard3 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard3 .service-description').css({
         display: 'none'
      });

      $('#serviceCard3 .icon-wrapper').css({
         display: 'flex'
      });
   });

   $('#serviceCard4').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard4').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard4 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard4 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard4 .service-description').css({
         display: 'none'
      });

      $('#serviceCard4 .icon-wrapper').css({
         display: 'flex'
      });
   });

   $('#serviceCard5').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard5').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard5 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard5 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard5 .service-description').css({
         display: 'none'
      });

      $('#serviceCard5 .icon-wrapper').css({
         display: 'flex'
      });
   });

   $('#serviceCard6').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard6').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard6 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard6 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard6 .service-description').css({
         display: 'none'
      });

      $('#serviceCard6 .icon-wrapper').css({
         display: 'flex'
      });
   });

   $('#serviceCard7').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard7').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard7 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard7 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard7 .service-description').css({
         display: 'none'
      });

      $('#serviceCard7 .icon-wrapper').css({
         display: 'flex'
      });
   });

   $('#serviceCard8').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard8').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard8 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard8 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard8 .service-description').css({
         display: 'none'
      });

      $('#serviceCard8 .icon-wrapper').css({
         display: 'flex'
      });
   });

   $('#serviceCard9').mouseenter(function () {
      $('.service-card').css('opacity', '.6');
      $('#serviceCard9').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.47)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '56px',
         'box-shadow': '0px 0px 2px $orange, 0px 0px 0px $orange, 0px 0px 10px $orange'
      });

      $('#serviceCard9 .service-description').css({
         display: 'flex'
      });

      $('#serviceCard9 .icon-wrapper').css({
         display: 'none'
      });
   }).mouseleave(function () {
      $('.service-card').css('opacity', '1');
      $('#servicesSectionTitle').css('color', 'rgba(255, 255, 255, 0.87)');
      $('#servicesSectionTitleSpan').css({
         'font-size': '54px',
         'box-shadow': '0px 0px 0px $orange, 0px 0px 0px $orange, 0px 0px 0px $orange'
      });

      $('#serviceCard9 .service-description').css({
         display: 'none'
      });

      $('#serviceCard9 .icon-wrapper').css({
         display: 'flex'
      });
   });
   /////////////////END////////////////////////

   //////////////////////////////////////////////////////////////
   ////// WE MAKE ANIMATION ///////////////////////////////////
   let i = 1;
   let leftPost = 0;
   let offset = 300;

   // $('#rightArrow').mouseenter(function () {
   //    let left = $('#weMakeCardsBlock').css('left');

   //    $('#weMakeCardsBlock').animate({
   //       'left': parseInt(left.substr(0, left.length - 2)) - 10 + 'px'
   //    }, 100);

   //    $(this).animate({
   //       'margin-left': 10 + 'px'
   //    }, 100);
   // }).mouseleave(function () {
   //    let left = $('#weMakeCardsBlock').css('left');

   //    $('#weMakeCardsBlock').animate({
   //       'left': parseInt(left.substr(0, left.length - 2)) + 10 + 'px'
   //    }, 100);

   //    $(this).animate({
   //       'margin-left': 0 + 'px'
   //    }, 100);
   // });

   function wmCardsAnimation() {
      $('#rightArrow').off('click');

      if (i != 10) {
         $('#wmCard1').animate({
            'background-position-x': '-989px',
            'opacity': 0
         }, 400);

         if (i == 1) {
            $('#wmCard2').animate({
               'background-position-x': '-1326px',
               'background-position-y': '-706px',
               'border': '2px solid #16F898',
               'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
            }, 400);
            setTimeout(function () {
               $('#wmCard2').css({
                  'border': '2px solid #16F898',
                  'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
               });
            }, 300);


            $('#wmCard3').animate({
               'background-position-x': '-1641px',
               'background-position-y': '-702px',
            }, 400);

            $('#wmCard4').animate({
               'background-position-x': '-1941px',
            }, 400);
         }

         if (i == 2) {
            $('#wmCard2').animate({
               'background-position-x': '-989px',
               'opacity': 0
            }, 400);

            $('#wmCard3').animate({
               'background-position-x': '-1330px',
               'border': '2px solid #16F898',
               'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
            }, 400);

            setTimeout(function () {
               $('#wmCard3').css({
                  'border': '2px solid #16F898',
                  'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
               });
            }, 300);

            $('#wmCard4').animate({
               'background-position-x': '-1645px',
            }, 400);

            $('#wmCard5').animate({
               'background-position-x': '-1945px',
            }, 400);
         }

         if (i == 3) {
            $('#wmCard3').animate({
               'background-position-x': '-989px',
               'opacity': 0
            }, 400);

            $('#wmCard4').animate({
               'background-position-x': '-1331px',
               'background-position-y': '-706px',
               'border': '2px solid #16F898',
               'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
            }, 400);

            setTimeout(function () {
               $('#wmCard4').css({
                  'border': '2px solid #16F898',
                  'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
               });
            }, 300);

            $('#wmCard5').animate({
               'background-position-x': '-1641px',
            }, 400);

            $('#wmCard6').animate({
               'background-position-x': '-1945px',
               'background-position-y': '-706px',
            }, 400);
         }

         if (i == 4) {
            $('#wmCard4').animate({
               'background-position-x': '-989px',
               'opacity': 0
            }, 400);

            $('#wmCard5').animate({
               'background-position-x': '-1335px',
               'background-position-y': '-706px',
               'border': '2px solid #16F898',
               'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
            }, 400);

            setTimeout(function () {
               $('#wmCard5').css({
                  'border': '2px solid #16F898',
                  'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
               });
            }, 300);

            $('#wmCard6').animate({
               'background-position-x': '-1641px',
               'background-position-y': '-706px',
            }, 400);

            $('#wmCard7').animate({
               'background-position-x': '-1946px',
            }, 400);
         }

         if (i == 5) {
            $('#wmCard5').animate({
               'background-position-x': '-989px',
               'opacity': 0
            }, 400);

            $('#wmCard6').animate({
               'background-position-x': '-1335px',
               'background-position-y': '-704px',
               'border': '2px solid #16F898',
               'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
            }, 400);

            setTimeout(function () {
               $('#wmCard6').css({
                  'border': '2px solid #16F898',
                  'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
               });
            }, 300);

            $('#wmCard7').animate({
               'background-position-x': '-1641px',
            }, 400);

            $('#wmCard8').animate({
               'background-position-x': '-1947px',
            }, 400);
         }

         if (i == 6) {
            $('#wmCard6').animate({
               'background-position-x': '-989px',
               'opacity': 0
            }, 400);

            $('#wmCard7').animate({
               'background-position-x': '-1337px',
               'border': '2px solid #16F898',
               'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
            }, 400);

            setTimeout(function () {
               $('#wmCard7').css({
                  'border': '2px solid #16F898',
                  'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
               });
            }, 300);

            $('#wmCard8').animate({
               'background-position-x': '-1641px',
            }, 400);

            $('#wmCard9').animate({
               'background-position-x': '-1952px',
            }, 400);
         }

         if (i == 7) {
            $('#wmCard7').animate({
               'background-position-x': '-989px',
               'opacity': 0
            }, 400);

            $('#wmCard8').animate({
               'background-position-x': '-1338px',
               'border': '2px solid #16F898',
               'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
            }, 400);

            setTimeout(function () {
               $('#wmCard8').css({
                  'border': '2px solid #16F898',
                  'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
               });
            }, 300);

            $('#wmCard9').animate({
               'background-position-x': '-1641px',
            }, 400);
         }

         if (i == 8) {
            $('#wmCard8').animate({
               'background-position-x': '-989px',
               'opacity': 0
            }, 400);

            $('#wmCard9').animate({
               'background-position-x': '-1340px',
               'border': '2px solid #16F898',
               'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
            }, 400);

            setTimeout(function () {
               $('#wmCard9').css({
                  'border': '2px solid #16F898',
                  'box-shadow': '0px 0px 2px #16F898, 0px 0px 10px #16F898'
               });
            }, 300);
         }

         if (i < 10) {

            $('#weMakeCardsBlock').animate({
               'left': leftPost - offset + 'px'
            }, 400);

            i++;
            leftPost = leftPost - offset;
         }


         if (i == 10) {
            $('#wmCard9').animate({
               'opacity': 0
            }, 400);

            $('#weMakeCardsBlock').animate({
               'left': 0
            }, 10);

            $('#wmCard1').animate({
               'background-position-x': '-1326px',
            }, 100);

            $('#wmCard2').animate({
               'background-position-x': '-1641px',
            }, 100);

            $('#wmCard3').animate({
               'background-position-x': '-1941px',
            }, 100);


            setTimeout(function () {
               for (var j = 1; j < 10; j++) {
                  $('#wmCard' + j).css({
                     'opacity': 1,
                  });
                  if (j != 1) {
                     $('#wmCard' + j).css({
                        'border': '0px',
                        'box-shadow': 'none'
                     });
                  }
               }
            }, 600)


            i = 1;
            leftPost = 0;
         }
      }
      setTimeout(function () {
         $('#rightArrow').on('click', wmCardsAnimation);
      }, 500);
   }

   $('#rightArrow').on('click', wmCardsAnimation);

   /////////////////END////////////////////////

   //////////////////////////////////////////////////////////////
   ////// Burger mnu ///////////////////////////////////

   $('#burger').click(function () {
      if ($('#mobileMnu').css('left') == '0px') {
         $('#mobileMnu').animate({ 'left': '-100vw' }, 300)
      } else {
         $('#mobileMnu').animate({ 'left': '0' }, 300)
      }
   });

   ///////////////END/////////////////////////////

   //////////////////////////////////////////
   ///// ABOUT PAGE | Change img src/////////

   if ($(window).width() <= 1200) {
      $('.our-core-values .core-values-wrapper img').attr('src', './img/_src/about-page/our-core-values-tablet.png');
   }

   if ($(window).width() <= 768) {
      $('.our-core-values .core-values-wrapper img').attr('src', './img/_src/about-page/our-core-values-mob.png');
   }

   ///////////////END/////////////////////////////

   //////////////////////////////////////////
   ///// ABOUT PAGE | show learn more/////////
   $('#aboutLearnMoreBtn').click(function () {
      if (!$('#aboutlearnMoreInfo').is(':visible')) {
         $('#aboutlearnMoreInfo').css({ display: 'flex' });
         $('#aboutlearnMoreInfo').animate({ opacity: '1' }, 300);
      } else {
         $('#aboutlearnMoreInfo').animate({ opacity: '0' }, 300)
         setTimeout(function () {
            $('#aboutlearnMoreInfo').css({ display: 'none' });
         }, 1000)
      }
   });
   $('#hideLearnMoreBtn').click(function () {
      $('#aboutlearnMoreInfo').animate({ opacity: '0' }, 300)
      setTimeout(function () {
         $('#aboutlearnMoreInfo').css({ display: 'none' });
      }, 1000)
   });
   ///////////////END/////////////////////////////

   //////////////////////////////////////////
   ///// Services PAGE | show each service/////////

   $('.service-desc-card').removeClass('active');
   $('.invisible-desc').css('display', 'none');


   $('#openDescSymbol1').click(function () {
      if (!$('#desc1').is(':visible')) {
         $('.service-desc-card:nth-child(1)').addClass('active');
         $('.service-desc-card:nth-child(1)').css('background-image', 'none');
         $('#desc1').css('display', 'flex');
      } else {
         $('.service-desc-card:nth-child(1)').removeClass('active');
         $('#desc1').css('display', 'none');
         $('.service-desc-card:nth-child(1)').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
      }
   });

   $('#openDescSymbol2').click(function () {
      if (!$('#desc2').is(':visible')) {
         $('.service-desc-card:nth-child(2)').addClass('active');
         $('.service-desc-card:nth-child(2)').css('background-image', 'none');
         $('#desc2').css('display', 'flex');
      } else {
         $('.service-desc-card:nth-child(2)').removeClass('active');
         $('#desc2').css('display', 'none');
         $('.service-desc-card:nth-child(2)').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
      }
   });

   $('#openDescSymbol3').click(function () {
      if (!$('#desc3').is(':visible')) {
         $('.service-desc-card:nth-child(3)').addClass('active');
         $('.service-desc-card:nth-child(3)').css('background-image', 'none');
         $('#desc3').css('display', 'flex');
      } else {
         $('.service-desc-card:nth-child(3)').removeClass('active');
         $('#desc3').css('display', 'none');
         $('.service-desc-card:nth-child(3)').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
      }
   });

   $('#openDescSymbol4').click(function () {
      if (!$('#desc4').is(':visible')) {
         $('.service-desc-card:nth-child(4)').addClass('active');
         $('#desc4').css('display', 'flex');
         $('.service-desc-card:nth-child(4)').css('background-image', 'none');
      } else {
         $('.service-desc-card:nth-child(4)').removeClass('active');
         $('#desc4').css('display', 'none');
         $('.service-desc-card:nth-child(4)').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
      }
   });

   $('#openDescSymbol5').click(function () {
      if (!$('#desc5').is(':visible')) {
         $('.service-desc-card:nth-child(5)').addClass('active');
         $('#desc5').css('display', 'flex');
         $('.service-desc-card:nth-child(5)').css('background-image', 'none');
      } else {
         $('.service-desc-card:nth-child(5)').removeClass('active');
         $('#desc5').css('display', 'none');
         $('.service-desc-card:nth-child(5)').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
      }
   });

   $('#openDescSymbol6').click(function () {
      if (!$('#desc6').is(':visible')) {
         $('.service-desc-card:nth-child(6)').addClass('active');
         $('#desc6').css('display', 'flex');
         $('.service-desc-card:nth-child(6)').css('background-image', 'none');
      } else {
         $('.service-desc-card:nth-child(6)').removeClass('active');
         $('#desc6').css('display', 'none');
         $('.service-desc-card:nth-child(6)').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
      }
   });

   $('#openDescSymbol7').click(function () {
      if (!$('#desc7').is(':visible')) {
         $('.service-desc-card:nth-child(7)').addClass('active');
         $('#desc7').css('display', 'flex');
         $('.service-desc-card:nth-child(7)').css('background-image', 'none');
      } else {
         $('.service-desc-card:nth-child(7)').removeClass('active');
         $('#desc7').css('display', 'none');
         $('.service-desc-card:nth-child(7)').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
      }
   });

   $('#openDescSymbol8').click(function () {
      if (!$('#desc8').is(':visible')) {
         $('.service-desc-card:nth-child(8)').addClass('active');
         $('#desc8').css('display', 'flex');
         $('.service-desc-card:nth-child(8)').css('background-image', 'none');
      } else {
         $('.service-desc-card:nth-child(8)').removeClass('active');
         $('#desc8').css('display', 'none');
         $('.service-desc-card:nth-child(8)').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
      }
   });

   // hide btn

   $('button#hideServiceBtn').click(function () {
      console.log('hide');
      $('.service-desc-card').removeClass('active');
      $('.invisible-desc').css('display', 'none');
      $('.service-desc-card').css('background-image', 'url(../img/_src/services-page/services-desc-pattern.svg)');
   });

   // logo click to home
   $('.lottie, .logo-mobile').click(function () {
      window.location.href = "./";
   });

});
