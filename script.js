let menu = document.querySelector('.material-symbols-outlined')
let sideEffect = document.querySelector('.side-collapse')
menu.addEventListener('click',(e)=>{
    // console.log('clicked')
    setTimeout(()=>{
        sideEffect.classList.toggle("left");
    },1000)
 
    
})

let button1 = document.querySelector('.pre')
let button2 = document.querySelector('.nex')
let page = document.querySelectorAll('.page-link')
// console.log(page)




let count = 1;
function toRemove(){
   
    for(let i of page){
        i.classList.remove("active")
        i.style.color='white'
        // count++;
    }
    EventTarget.classList.add('active')
    count = EventTarget.value
}
// toRemove()

button1.addEventListener('click',(e)=>{
    console.log(e,'clicked')
    if(count > 1){
        for(let i of page){
            i.classList.remove("active")
            i.style.color='white'
            
        }
        count--;
        page[count-1].classList.add("active");
    }
})
button2.addEventListener('click',(e)=>{
    console.log(e,'clicked2')
    if(count < 3){
        for(let i of page){
            i.classList.remove("active")
            i.style.color='white'
            
        }
        count++;
        page[count-1].classList.add("active");
    }
})
async function fetchingFun(apiURL){
let v = await fetch(apiURL)
check = await v.json()
return check
}


// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1


    async function youtubeAPI(){
        let count=0;
        const YOUR_API_KEY = 'AIzaSyDq1QP6WDDOc3k_BeYrCkAVL7bCyxXVq9s'
        // let searchList = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${[YOUR_API_KEY]}`
        let searchList =`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${[YOUR_API_KEY]}&part=snippet,contentDetails,statistics,status`
            try{
                let data = await fetchingFun(searchList)
                console.log(data)
               
                // var valu = Object.keys(data.kind)
                // console.log(valu)
                // console.log(data[valu][items])
                let wholeContainer = document.querySelector('.container')
                for(let i of data){
                    let parentCont = document.createElement('div')
                    parentCont.classList.add('card-img-top')
                    try{
                        console.log(i[etag][items])
                    }catch{
                        console.log('error in iteration either 403 or 404')
                    }
                }
          
            }
            catch(err){
                console.log('no data')
            }
                
    }
    youtubeAPI()