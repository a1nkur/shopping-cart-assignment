// ALL GLOBAL STYLINGS ARE DECLARED HERE

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* CSS RESET */
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Work Sans', sans-serif;
        /* background-color: var(--white-shade-2); */
        scroll-behavior: smooth;
        /* overflow-x: hidden; */
    }
    :root {
        --blue-shade-1 : #00B2FF;
        --blue-shade-2: #4DC9FF;
        --blue-shade-3 : #80D9FF;
        --blue-shade-4 : #B3E8FF;
        --blue-shade-5 : #BCE7F0;
        --blue-shade-6 : rgba(77, 201, 255, 1);
        --blue-shade-7 : #3B5998;
;
        
        --white-shade-1 : #ffffff;
        --white-shade-2 : #F7F8FA;
        --white-shade-3 : #E5E5E5;
        --white-shade-4 : rgba(247, 248, 250, 1);
        --white-shade-5 :rgba(245, 245, 245, 1);
        --black-shade-1 : rgb(0, 0, 0);
        --black-shade-2 : rgba(23, 58, 76, 1);
        --green-shade-1 : #37bdae;
        --red-shade-1 : #ff726f;
        --border : 1px solid red;
        --swiper-navigation-size: 30px;
    }
    a {
        text-decoration: none;
        color: var(---black-shade-1);
    }

    
     li {
        list-style-type: none;
    }
    .swiper-wrapper {
        padding-inline-start: 0;
    }
    
    /* .swiper-button-prev, .swiper-button-next {
        height: var(--swiper-navigation-size);
        color: #000;
        margin:  0 4.2rem;
    } */
    .swiper-pagination-bullet {
        height: 0.8rem;
        width: 0.8rem;
        opacity: 0.6;
        /* background-color: rgba(250,250,250, 0.6); */
        background-color: #FFF;
    }
    
    .swiper-pagination-bullet-active {
        /* background-color: rgb(250,250,250); */
        background-color: #BCE7F0;
    }
    
    /* Pagination CSS Rules */
   ul.paginationBttns {
        display: flex;
        justify-content: center;
        position: absolute;
        right: 0%;
        bottom: 1%;
        z-index: 20;
    }
      li.previous {
        a.previousBttn {
            border-radius: 3px !important;
            border: 1px solid #ccc;
            color: #000;
            background-color: transparent;
        }  
     }
     
     .paginationBttns a {
         padding: 0.1rem 0.5rem;
         margin: 8px;
         height: 3px;
         width: 3px;
         border: 1px solid #ccc;
         color: #000;
         cursor: pointer;
        }
    
        
    .paginationBttns a:hover {}
    .paginationActive a {
        color: white;
        background-color: #aaa;
        border-color: #aaa;
    }
    .paginationDisabled a {
        color: #000;
        background-color: transparent;
  
    }
    li.next.paginationDisabled, li.previous.paginationDisabled {
        a.previousBttn {
            opacity: 0.3;
            cursor: default;
        }
        a.nextBttn {
            opacity: 0.3;
            cursor: default;
        }
    }
    /* Search bar CSS Rules */
    #demo-2 input[type=search] {
	width: 15px;
	padding-left: 10px;
	color: transparent;
	cursor: pointer;
}
#demo-2 input[type=search]:hover {
	background-color: #fff;
}
#demo-2 input[type=search]:focus {
	width: 130px;
	padding-left: 32px;
	color: #000;
	background-color: #fff;
	cursor: auto;
}
#demo-2 input:-moz-placeholder {
	color: transparent;
}
#demo-2 input::-webkit-input-placeholder {
	color: transparent;
}
output ::after, ::after  {
    border-color: var(--green-shade-1) transparent transparent !important;
}
output small {
    font-size: 0.55rem;
}
#root > div > div.sc-cOajNj.iIocXG > div.sc-kstqJO.gxfrFu > div > div.row-2 > div.col-1 > div > div > div:nth-child(2) > div > div.css-to8frk > input:nth-child(1) {
    height: 120px;
}
.ql-snow.ql-toolbar {
    display: none !important;
}
.ql-container {
    border: none !important;
}
.ql-editor {
    width: 80% !important;
    color: #000 !important;
}
`;
