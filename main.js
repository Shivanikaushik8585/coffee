// == change background header===
const scrollHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50? header.classList.add('scroll-header')
                        :headerclassList.remove('scroll-header')
}
window.addEventListener('scroll' ,scrollHeader)
// === show scroll up====
const scrollUp= () =>{
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 350? scrollUp.classList.add('show-scroll')
                     :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);