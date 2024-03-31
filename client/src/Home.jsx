import React from "react";


const snippets = [
    {
      element_name: 'Loader Animation',
      element_html: `
      <div class="cube-loader">
      <div class="cube-top"></div>
      <div class="cube-wrapper">
        <span style="--i:0" class="cube-span"></span>
        <span style="--i:1" class="cube-span"></span>
        <span style="--i:2" class="cube-span"></span>
        <span style="--i:3" class="cube-span"></span>
      </div>
    </div>
      `,
      element_css: `
      .cube-loader {
        position: relative;
      /* u can choose any size */
        width: 75px;
        height: 75px;
        transform-style: preserve-3d;
        transform: rotateX(-30deg);
        animation: animate 4s linear infinite;
      }
      
      @keyframes animate {
        0% {
          transform: rotateX(-30deg) rotateY(0);
        }
      
        100% {
          transform: rotateX(-30deg) rotateY(360deg);
        }
      }
      
      .cube-loader .cube-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        /* top: 0;
        left: 0; */
        transform-style: preserve-3d;
      }
      
      .cube-loader .cube-wrapper .cube-span {
        position: absolute;
        width: 100%;
        height: 100%;
        /* top: 0;
        left: 0; */
                                           /* width 75px / 2 = 37.5px */
        transform: rotateY(calc(90deg * var(--i))) translateZ(37.5px);
        background: linear-gradient(
          to bottom,
          hsl(330, 3.13%, 25.1%) 0%,
          hsl(177.27, 21.71%, 32.06%) 5.5%,
          hsl(176.67, 34.1%, 36.88%) 12.1%,
          hsl(176.61, 42.28%, 40.7%) 19.6%,
          hsl(176.63, 48.32%, 43.88%) 27.9%,
          hsl(176.66, 53.07%, 46.58%) 36.6%,
          hsl(176.7, 56.94%, 48.91%) 45.6%,
          hsl(176.74, 62.39%, 50.91%) 54.6%,
          hsl(176.77, 69.86%, 52.62%) 63.4%,
          hsl(176.8, 76.78%, 54.08%) 71.7%,
          hsl(176.83, 83.02%, 55.29%) 79.4%,
          hsl(176.85, 88.44%, 56.28%) 86.2%,
          hsl(176.86, 92.9%, 57.04%) 91.9%,
          hsl(176.88, 96.24%, 57.59%) 96.3%,
          hsl(176.88, 98.34%, 57.93%) 99%,
          hsl(176.89, 99.07%, 58.04%) 100%
        );
      }
      
      .cube-top {
        position: absolute;
        width: 75px;
        height: 75px;
        background: hsl(330, 3.13%, 25.1%) 0%;
                            /* width 75px / 2 = 37.5px */
        transform: rotateX(90deg) translateZ(37.5px);
        transform-style: preserve-3d;
      }
      
      .cube-top::before {
        content: '';
        position: absolute;
      /* u can choose any size */
        width: 75px;
        height: 75px;
        background: hsl(176.61, 42.28%, 40.7%) 19.6%;
        transform: translateZ(-90px);
        filter: blur(10px);
        box-shadow: 0 0 10px #323232,
                    0 0 20px hsl(176.61, 42.28%, 40.7%) 19.6%,
                    0 0 30px #323232,
                    0 0 40px hsl(176.61, 42.28%, 40.7%) 19.6%;
      }
      ` 
    },
    {
        element_name: 'Test',
        element_html: `<div class="container">
        <div class="pane">
            <label class="label">
                <span>Yes</span>
                <input id="left" class="input" name="radio" type="radio">
            </label>
            <label class="label">
                <span>No</span>
                <input id="middle" class="input" checked="checked" name="radio" type="radio">
            </label>
            <label class="label">
                <span>Idk</span>
                <input id="right" class="input" name="radio" type="radio">
            </label>
            <span class="selection"></span>
        </div>
    </div>`,
        element_css: `
        .container {
            transform-style: preserve-3d;
            perspective: 1000px;
          }
          
          .pane {
            outline: 2px solid #00ff6a;
            box-shadow: 0 0 10px #00ff6a77, inset 0 0 10px #00ff6a77;
            height: 1cm;
            width: 4.5cm;
            border-radius: 5px;
            position: relative;
            overflow: hidden;
            transition: 0.7s ease;
          }
          
          .input {
            display: none;
          }
          
          .label {
            height: 1cm;
            width: 1.5cm;
            float: left;
            font-weight: 600;
            letter-spacing: -1px;
            font-size: 14px;
            padding: 0px;
            position: relative;
            z-index: 1;
            color: #00ff6a;
            text-align: center;
            padding-top: 10px;
          }
          
          .selection {
            display: none;
            position: absolute;
            height: 1cm;
            width: calc(4.5cm / 3);
            z-index: 0;
            left: 0;
            top: 0;
            box-shadow: 0 0 10px #00ff6a77;
            transition: .15s ease;
          }
          
          .label:has(input:checked) {
            color: #212121;
          }
          
          .pane:has(.label:nth-child(1):hover) {
            transform: rotateY(-30deg);
          }
          
          .pane:has(.label:nth-child(3):hover) {
            transform: rotateY(35deg);
          }
          
          .label:has(input:checked) ~ .selection {
            background-color: #00ff6a;
            display: inline-block;
          }
          
          .label:nth-child(1):has(input:checked) ~ .selection {
            transform: translateX(calc(4.5cm * 0/3));
          }
          
          .label:nth-child(2):has(input:checked) ~ .selection {
            transform: translateX(calc(4.5cm * 1/3));
          }
          
          .label:nth-child(3):has(input:checked) ~ .selection {
            transform: translateX(calc(4.5cm * 2/3));
          }
        ` 
      },
      {
        element_name: 'Test',
        element_html: `  <div class="card work">
        <div class="img-section">
        <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76"><path fill-rule="nonzero" fill="#3F9CBB" d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"></path></svg>                </div>
        <div class="card-desc">
        <div class="card-header">
        <div class="card-title">Play</div>
        <div class="card-menu">
        <div class="dot"></div>
        <div class="dot"></div>
          <div class="dot"></div>
          </div>
        </div>
        <div class="card-time">32hrs</div>
        <p class="recent">Last Week-36hrs</p>
      </div></div>`,
        element_css: `.card {
            --primary-clr: #1C204B;
            --dot-clr: #BBC0FF;
            --play: hsl(195, 74%, 62%);
            width: 200px;
            height: 170px;
            border-radius: 10px;
           }
           
           .card {
            font-family: "Arial";
            color: #fff;
            display: grid;
            cursor: pointer;
            grid-template-rows: 50px 1fr;
           }
           
           .card:hover .img-section {
            transform: translateY(1em);
           }
           
           .card-desc {
            border-radius: 10px;
            padding: 15px;
            position: relative;
            top: -10px;
            display: grid;
            gap: 10px;
            background: var(--primary-clr);
           }
           
           .card-time {
            font-size: 1.7em;
            font-weight: 500;
           }
           
           .img-section {
            transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background: hsl(195, 74%, 62%);
           }
           
           .card-header {
            display: flex;
            align-items: center;
            width: 100%;
           }
           
           .card-title {
            flex: 1;
            font-size: 0.9em;
            font-weight: 500;
           }
           
           .card-menu {
            display: flex;
            gap: 4px;
            margin-inline: auto;
           }
           
           .card svg {
            float: right;
            max-width: 100%;
            max-height: 100%;
           }
           
           .card .dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--dot-clr);
           }
           
           .card .recent {
            line-height: 0;
            font-size: 0.8em;
           }
        ` 
      },
      {
            element_name: 'Tile here',
            element_html: `<div class="card">
            <a href="#" class="socialContainer containerOne">
              <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
            </a>
            
            <a href="#" class="socialContainer containerTwo">
              <svg class="socialSvg twitterSvg" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
              
            <a href="#" class="socialContainer containerThree">
              <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </a>
            
            <a href="#" class="socialContainer containerFour">
              <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
            </a>
          </div>             
          
          `,
            element_css: `.card {
                width: fit-content;
                height: fit-content;
                background-color: rgb(238, 238, 238);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 25px 25px;
                gap: 20px;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
              }
              
              /* for all social containers*/
              .socialContainer {
                width: 52px;
                height: 52px;
                background-color: rgb(44, 44, 44);
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                transition-duration: .3s;
              }
              /* instagram*/
              .containerOne:hover {
                background-color: #d62976;
                transition-duration: .3s;
              }
              /* twitter*/
              .containerTwo:hover {
                background-color: #00acee;
                transition-duration: .3s;
              }
              /* linkdin*/
              .containerThree:hover {
                background-color: #0072b1;
                transition-duration: .3s;
              }
              /* Whatsapp*/
              .containerFour:hover {
                background-color: #128C7E;
                transition-duration: .3s;
              }
              
              .socialContainer:active {
                transform: scale(0.9);
                transition-duration: .3s;
              }
              
              .socialSvg {
                width: 17px;
              }
              
              .socialSvg path {
                fill: rgb(255, 255, 255);
              }
              
              .socialContainer:hover .socialSvg {
                animation: slide-in-top 0.3s both;
              }
              
              @keyframes slide-in-top {
                0% {
                  transform: translateY(-50px);
                  opacity: 0;
                }
              
                100% {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
              
              ` 
        },
        {
                element_name: 'Tile here',
                element_html: ``,
                element_css: `` 
              },
        
    //   {
    //     element_name: 'Tile here',
    //     element_html: ``,
    //     element_css: `` 
    //   },      
    // ... other snippets
  ];
  



function Home(){
    return(
        <center>
            <h1>
                This is Home Component
            </h1>
        </center>
    )
}

export default Home;