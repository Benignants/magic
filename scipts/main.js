(function(){

    class SlideShow{
        constructor(startIndex,element) {
            this.startIndex = startIndex;
            this.currentIndex = this.startIndex;
            this.element = element;
            this.slides = this.element.querySelectorAll('.slide');
            this.showActiveSlide();
            this.nextSlide();
            this.prevSlide();
            this.autoPlay();
        }

        showActiveSlide(){
            this.slides.forEach((item,index)=>{
                if(index === this.currentIndex){
                    item.classList.add('active');
                }else{
                    item.classList.remove('active');
                }
            });
        }

        nextSlide(){
            let nextBtn = this.element.querySelector('#next');
            nextBtn.addEventListener('click',()=>{
                if(this.currentIndex === this.slides.length -1){
                    this.currentIndex = 0;
                }else{
                    this.currentIndex ++;
                }
                this.showActiveSlide();
            });
        }

        prevSlide(){
            let prevBtn = this.element.querySelector('#prev');
            prevBtn.addEventListener('click',()=>{
                if(this.currentIndex === 0){
                    this.currentIndex = this.slides.length - 1;
                }else{
                    this.currentIndex --;
                }
                this.showActiveSlide();
            });
        }

        autoPlay(){
            setInterval(()=>{
                if(this.currentIndex === this.slides.length -1){
                    this.currentIndex = 0;
                }else{
                    this.currentIndex ++;
                }
                this.showActiveSlide();
            },3000);
        }
    }

    let slideShow = document.querySelectorAll('#slider');
    slideShow.forEach(item =>{
        new SlideShow(0,item);
    });

    let im = document.querySelector('.colorInst');

    im.addEventListener('mouseover',()=>{
    im.src = 'img/inst-color.png';
    });

    im.addEventListener('mouseleave',()=>{
    im.src = 'img/inst.png';

})

}());