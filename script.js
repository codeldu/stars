let stars = document.querySelectorAll('.star');


stars.forEach((star)=>{
    star.addEventListener('click',(e)=>{
        let index = [...stars].indexOf(e.target)
        
      

        // for (let i = 0; i < stars.length; i++) {
            
        //     if (index >= i) {
        //         stars[i].style.backgroundColor = 'red'
        //     }else{
            
        //     stars[i].style.backgroundColor = 'white'}
        // }

        stars.forEach((star,i)=>{
            star.style.backgroundColor = index >=i ? 'red' : 'white'
        })

    })
})

