

class Volume{
    constructor(){
        this.file_music = document.getElementById("mucis");
        this.file_music.volume = 50/100 ;

        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("change",()=>{
            this.file_music.volume = this.volume_range.value/100 ;
            // console.log(this.file_music.volume)
        });

        this.playbackRate = document.getElementById("playbackRate");
        this.playbackRate.playbackRate = 1 ;
        this.playbackRate.addEventListener("change",()=>{
            this.file_music.playbackRate = this.playbackRate.value/100 ;
            console.log(this.file_music.playbackRate)
        });
    }
}
onload = new Volume();