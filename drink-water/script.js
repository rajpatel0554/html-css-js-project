
const smallcups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallcups.forEach((cup,idx) =>{
    cup.addEventListener('click',() => highlightcups(idx))
})

function highlightcups(idx){
    if(idx===7 && smallcups[idx].classList.contains("full")) idx--;
    else if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallcups.forEach((cup,idx2) =>{
        if(idx2<=idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })    
    updateBigCup()
}

function updateBigCup(){
    const fullcups = document.querySelectorAll('.cup-small.full').length
    const totalcups = smallcups.length

    if(fullcups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullcups / totalcups *330}px`
        percentage.innerText = `${fullcups / totalcups * 100}px`
    }

    if(fullcups === totalcups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullcups / 1000)}L`
    }
}