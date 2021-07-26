window.addEventListener('scroll', function(){
    if(window.scrollY>10)
    {
        document.querySelector('.header').style.height = 'var(--header-height-scrolled)';
        document.querySelector('.header').style.backgroundColor='#212529'
        // var nav =  document.querySelectorAll('.header-nav__item--link');
        // for(var i = 0; i < nav.length; i++)
        // {
        //         var nav_link = nav[i];
        //         nav_link.style.lineHeight = 'var(--header-height-scrolled)';
        //     }
            
            
        }
        else
        {
            document.querySelector('.header').style.height = 'var(--header-height)'; 
            document.querySelector('.header').style.backgroundColor='transparent'
            //     var nav =  document.querySelectorAll('.header-nav__item--link');
            //    for(var i = 0; i < nav.length; i++)
            //    {
                //        var nav_link = nav[i];
                //        nav_link.style.lineHeight = 'var(--header-height)';
                //    }
                
            }
        })
        // var nav =  document.querySelectorAll('.header-nav__item--link');
        // for(var i = 0; i < nav.length; i++)
        // {
        //         var nav_link = nav[i];
        //         nav_link.addEventListener('click',function(){
        //             document.querySelector('.header-nav.collapse').style.display = 'none';
        //         })
        // }
        // var btnShowHeaderMenu = document.querySelector('.header-menu___mt--btn');
        // btnShowHeaderMenu.addEventListener('click', function(){
            
        //     document.querySelector('.header-nav.collapse').style.display = 'block';
        //     document.querySelector('.header-nav').style.height = 'auto';

        // })
            
            
        
        
        
        
        