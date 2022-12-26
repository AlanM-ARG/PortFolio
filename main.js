const { createApp } = Vue
createApp({
    data() {
        return {
        }
    },
    created() {

    },
    methods: {
        lightbank() {
            Swal.fire({
                width: 600,
                padding: '1em',
                background: '#252525',
                html: '<h2 >LightBank</h2>' +
                    '<h5 style="text-align: start;" class=" text-white">Category: Homebanking</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Start Date: 21/09/2022</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">End Date: 22/11/2022</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Repository: <a target="_blank" href="https://github.com/AlanM-ARG/LightBank">GitHub</a></h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Teamwork: No</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Video URL: </h5>' +
                    '<h5 style="text-align: start;" class="d-flex justify-content-start align-items-center gap-2 flex-wrap text-white">Technologies: <img ' +
                    'src="./src/Captura de pantalla (190).png" style="width:100%;"  alt="Technologies">'
            })
        },
        indiaPetShop() {
            Swal.fire({
                width: 600,
                padding: '1em',
                background: '#252525',
                html: '<h2 >India Petshop</h2>' +
                    '<h5 style="text-align: start;" class=" text-white">Category: e-Commerce</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Start Date: 16/09/2022</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">End Date: 20/09/2022</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Repository: <a target="_blank" href="https://github.com/AlanM-ARG/indiapetshop">GitHub</a></h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Teamwork: Yes</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Web URL: <a href="https://indiapetshop.netlify.app/index.html" target="_blank">India PetShop</a></h5>' +
                    '<h5 style="text-align: start;" class="d-flex justify-content-start align-items-center gap-2 flex-wrap text-white">Technologies: <img ' +
                    'src="./src/Captura de pantalla (191).png" style="width:100%;"  alt="Technologies">'
            })
        },
        theWinest() {
            Swal.fire({
                width: 600,
                padding: '1em',
                background: '#252525',
                html: '<h2 >The Winest</h2>' +
                    '<h5 style="text-align: start;" class=" text-white">Category: e-Commerce</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Start Date: 24/11/2022</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">End Date: 02/12/2022</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Repository: <a target="_blank" href="https://github.com/AlanM-ARG/wines">GitHub</a></h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Teamwork: Yes</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Video URL: <a href="https://www.youtube.com/watch?v=VcxdUpXM8PM" target="_blank">YouTube</a></h5>' +
                    '<h5 style="text-align: start;" class="d-flex justify-content-start align-items-center gap-2 flex-wrap text-white">Technologies: <img ' +
                    'src="./src/Captura de pantalla (192).png" style="width:100%;" alt="Technologies">'
            })
        },
        portfolio(){
            Swal.fire({
                width: 600,
                padding: '1em',
                background: '#252525',
                html: '<h2 >Portfolio</h2>' +
                    '<h5 style="text-align: start;" class=" text-white">Category: Portfolio</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Start Date: 20/12/2022</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">End Date: 26/12/2022</h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Repository: <a target="_blank" href="https://github.com/AlanM-ARG/PortFolio">GitHub</a></h5>' +
                    '<h5 style="text-align: start;" class=" text-white">Teamwork: No</h5>' +
                    '<h5 style="text-align: start;" class="d-flex justify-content-start align-items-center gap-2 flex-wrap text-white">Technologies: <img ' +
                    'src="./src/Captura de pantalla (196).png" style="width:100%;" alt="Technologies">'
            })
        }
    },

    computed: {

    },
    mounted() {
            window.onload = ()=>{
                let loader = document.querySelector('#onload').style
                let hidden = document.querySelector('body')
                hidden.classList.remove("hidden")
                loader.opacity = 1;
                (function fade(){(loader.opacity-=.1)<0?loader.display="none":setTimeout(fade,40)})();
            }

    },
}).mount('#app')