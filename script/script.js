            class palymusic{
                constructor(){
                    this.file_music = document.getElementById("mucis");
                    this.paly_music = document.getElementById("playx");
                    this.isplayer;

                    this.paly_music.addEventListener("click",()=>{
                        this.play_pause()
                    });


                    this.play_pause(); // Click paly_music one only

                    this.audio_mucis = [];
                    this.audio_mucis[0] = "music/music6.m4a"
                    this.audio_mucis[1] = "music/music1.m4a"
                    this.audio_mucis[2] = "music/music2.m4a"
                    this.audio_mucis[3] = "music/music3.m4a"
                    this.audio_mucis[4] = "music/music4.m4a"
                    this.audio_mucis[5] = "music/music5.m4a"
                    this.audio_mucis[6] = "music/music.m4a"
                    this.server = 0 ;

                    this.next_music = document.getElementById("next");

                    this.next_music.addEventListener("click",()=>{

                        if(this.server<this.audio_mucis.length-1){
                            ++this.server;
                            this.isplayer= false; 
                        }else{
                            this.server=0;
                            this.isplayer= false;
                        }
                        // localStorage.setItem("SAVE",this.server);
                        this.mucisSource();

                    });


                    this.back_music = document.getElementById("back");
                    this.back_music.addEventListener("click",()=>{
                        if(this.server>0){
                            --this.server;
                            this.isplayer= false; 
                        }else{
                            this.server=this.audio_mucis.length-1 ;
                            this.isplayer= false;
                        }
                        // localStorage.setItem("SAVE",this.server);
                        this.mucisSource();
                    });
                }

                mucisSource(){
                    // if(localStorage.getItem("SAVE")!=null){
                    //     this.server = localStorage.getItem("SAVE");
                    // }
                    this.file_music.src = this.audio_mucis[this.server];
                    this.play_pause();
                }

                play_pause(){
                    if(this.isplayer == false){
                        this.paly_music.classList.remove("fa-solid","fa-play");
                        this.paly_music.classList.add("fa-solid" , "fa-pause");
                        this.file_music.play();
                        this.isplayer= true ;
                    } else{
                        this.paly_music.classList.remove("fa-solid" , "fa-pause");
                        this.paly_music.classList.add("fa-solid","fa-play");
                        this.file_music.pause();
                        this.isplayer= false ; 
                    }
                }
            }
            onload = new palymusic();
            

            window.addEventListener("resize", (e) => {
                var heightMain = document.getElementById("background")
                    if(window.innerHeight > 500 ){
                        heightMain.style.height = window.innerHeight + "px" ;
                    }
            });
