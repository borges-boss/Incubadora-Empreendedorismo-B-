//Definition;
var cardCount = 0;
var containerAllPostCards;
var currentProjectDetailId = 1;
var warningMessage = document.getElementById('warningMessage');
//FUNCTIONS AND OBJECTS 
function createPostElement(id, title, desc, author,banner ,isLiked) {
    return `<div class="col-md-4">
    <div class="postBox">
        <div class="post">
            <div class="header_post">
                <a id="link${id}" href="#" onclick="goToProjectDetails(${id})" >
                <img src="${(banner!="")?banner:"https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}"
                    alt="">
                </a>
            </div>
    
            <div class="body_post">
                <div class="post_content">
    
                    <h1>${title}</h1>
                    <p>${desc}</p>
                    <div class="row">
                        <div class="postBox_infos">
                            <div class="col-6">
                                <div class="postedBy">
                                    <span>author</span>
                                    ${author}
                                </div>
                            </div>
    
                            <div class="flexbox">
                                <div style="margin-bottom: 5px;">
                                    <input type="checkbox" ${(isLiked)?"checked":""} value=${id} class="toggleButton" id="checkbox${id}" />
                                    <label for="checkbox${id}">
                                        <svg id="heart-svg" viewBox="467 392 58 57"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group" fill="none" fill-rule="evenodd"
                                                transform="translate(467 392)">
                                                <path
                                                    d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                                                    id="heart" fill="#AAB8C2" />
                                                <circle id="main-circ" fill="#E2264D" opacity="0"
                                                    cx="29.5" cy="29.5" r="1.5" />
    
                                                <g id="grp7" opacity="0" transform="translate(7 6)">
                                                    <circle id="oval1" fill="#9CD8C3" cx="2" cy="6"
                                                        r="2" />
                                                    <circle id="oval2" fill="#8CE8C3" cx="5" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp6" opacity="0"
                                                    transform="translate(0 28)">
                                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="7"
                                                        r="2" />
                                                    <circle id="oval2" fill="#91D2FA" cx="3" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp3" opacity="0"
                                                    transform="translate(52 28)">
                                                    <circle id="oval2" fill="#9CD8C3" cx="2" cy="7"
                                                        r="2" />
                                                    <circle id="oval1" fill="#8CE8C3" cx="4" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp2" opacity="0"
                                                    transform="translate(44 6)">
                                                    <circle id="oval2" fill="#CC8EF5" cx="5" cy="6"
                                                        r="2" />
                                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp5" opacity="0"
                                                    transform="translate(14 50)">
                                                    <circle id="oval1" fill="#91D2FA" cx="6" cy="5"
                                                        r="2" />
                                                    <circle id="oval2" fill="#91D2FA" cx="2" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp4" opacity="0"
                                                    transform="translate(35 50)">
                                                    <circle id="oval1" fill="#F48EA7" cx="6" cy="5"
                                                        r="2" />
                                                    <circle id="oval2" fill="#F48EA7" cx="2" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp1" opacity="0" transform="translate(24)">
                                                    <circle id="oval1" fill="#9FC7FA" cx="2.5"
                                                        cy="3" r="2" />
                                                    <circle id="oval2" fill="#9FC7FA" cx="7.5"
                                                        cy="2" r="2" />
                                                </g>
                                            </g>
                                        </svg>
                                    </label>
                                </div>
    
                                <div>
                                    <input type="checkbox" id="bookmark${cardCount}"
                                        class="toggleButton fillBlack bookmark" />
                                    <label for="bookmark${cardCount}">
                                        <svg style="padding: 4px;" id="heart-svg"
                                            viewBox="467 392 58 57"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group" fill="none" fill-rule="evenodd"
                                                transform="translate(467 392)">
                                                <path
                                                    d="M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4z"
                                                    id="heart" fill="#AAB8C2" />
                                                <circle id="main-circ" fill="#E2264D" opacity="0"
                                                    cx="29.5" cy="29.5" r="1.5" />
    
                                                <g id="grp7" opacity="0" transform="translate(7 6)">
                                                    <circle id="oval1" fill="#9CD8C3" cx="2" cy="6"
                                                        r="2" />
                                                    <circle id="oval2" fill="#8CE8C3" cx="5" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp6" opacity="0"
                                                    transform="translate(0 28)">
                                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="7"
                                                        r="2" />
                                                    <circle id="oval2" fill="#91D2FA" cx="3" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp3" opacity="0"
                                                    transform="translate(52 28)">
                                                    <circle id="oval2" fill="#9CD8C3" cx="2" cy="7"
                                                        r="2" />
                                                    <circle id="oval1" fill="#8CE8C3" cx="4" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp2" opacity="0"
                                                    transform="translate(44 6)">
                                                    <circle id="oval2" fill="#CC8EF5" cx="5" cy="6"
                                                        r="2" />
                                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp5" opacity="0"
                                                    transform="translate(14 50)">
                                                    <circle id="oval1" fill="#91D2FA" cx="6" cy="5"
                                                        r="2" />
                                                    <circle id="oval2" fill="#91D2FA" cx="2" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp4" opacity="0"
                                                    transform="translate(35 50)">
                                                    <circle id="oval1" fill="#F48EA7" cx="6" cy="5"
                                                        r="2" />
                                                    <circle id="oval2" fill="#F48EA7" cx="2" cy="2"
                                                        r="2" />
                                                </g>
    
                                                <g id="grp1" opacity="0" transform="translate(24)">
                                                    <circle id="oval1" fill="#9FC7FA" cx="2.5"
                                                        cy="3" r="2" />
                                                    <circle id="oval2" fill="#9FC7FA" cx="7.5"
                                                        cy="2" r="2" />
                                                </g>
                                            </g>
                                        </svg>
                                    </label>
                                </div>
                            </div>
    
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`
}

function getPosts() {
    let response;
    let x = new XMLHttpRequest();
    x.onload = () => {
        //console.log(x.responseText);
        console.log(JSON.parse(x.responseText));
        let res = JSON.parse(x.responseText);
        addPostsToPage(res);
        addPaginationItems(res.length);
    }

    x.open('POST', './server/actions/getProjetosHome.php');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.send(`user=${sessionStorage.getItem('currentLoggedUser')}`);
}


function addPaginationItems(num) {
    let paginationContainer = document.getElementById('pagination');


    if (num > 20) {
        paginationContainer.style.display = 'inline-block';
        for (let i = 0; i < 20; i++) {
            paginationContainer.innerHTML += `<a class="page-numbers" href="javascript:;">2</a>`;
        }
    }
}


function goToProjectDetails(id) {

    sessionStorage.setItem("currentProject", id);
    window.location.href = "./detalhesProjeto.html";
}

function addPostsToPage(response) {

    containerAllPostCards = document.getElementById('containerAllPostCards');

    for (let i = 0; i < response.length; i++) {
        containerAllPostCards.innerHTML += createPostElement(response[i].id, response[i].title, response[i].description, response[i].name,response[i].banner, 
            response[i].is_liked);
    }
   
    //LIKE
  let elementArray=document.querySelectorAll(".toggleButton");

  elementArray.forEach(e => { 
      let id=e.id;
      console.log(id.substring(0,8));
    if(id.substring(0,8)=="checkbox"){ 
        console.log(e);  
        e.onchange=()=>{
            if(sessionStorage.getItem("currentLoggedUser")!=null){
               registerLike(sessionStorage.getItem("currentLoggedUser"),e.value);
            }
        }
  } })
}


function isMobile() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
}


function toggleErrorMessage(message, visi) {
    warningMessage.innerText = message;
    warningMessage.style.display = visi;
}

function registerProject(user, title, description, img) {

    let x = new XMLHttpRequest();
    x.onload = () => {
        console.log("Response cadastro: "+x.response);
        //console.log(JSON.parse(x.responseText));
        let res = x.response;

        if (res) {
            $('#myModal').modal('hide');
        }
        else {
            toggleErrorMessage('*Algo deu errado', 'block');
        }
    }
    x.open('POST', './server/actions/registerProject.php');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.send(`user=${user}&title=${title}&description=${description}&img=${img}`);
    
}

function registerLike(user,project){
let x = new XMLHttpRequest();
    
x.onload = () => {
    console.log("Response cadastro: "+x.response);
    //console.log(JSON.parse(x.responseText));
}

    x.open('POST', './server/actions/registerLike.php');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.send(`user=${user}&project=${project}`);
}

//MAIN
{
    getPosts();
    console.log("Teste:" + document.getElementById('userMenuDesktop'));

    if (sessionStorage.getItem("currentLoggedUser") != null) {
        if (!isMobile()) {
            document.getElementById('userMenuDesktop').innerHTML += `  
            <a class="dropdown-item" href="#">Minha Conta</a>
            <a class="dropdown-item" href="#">Configurações</a>
            <a class="dropdown-item" href="./login.html">Log Out</a>`;
        }
        else {
            document.getElementById('menuMobileDropDown').innerHTML += `  
            <a class="nav-link active" href="#">Minha conta</a>
            <a class="nav-link active" href="#">Configurações</a>
            <a class="nav-link active" href="./login.html">Log out</a>`;
        }
    }
    else {

        if (!isMobile()) {
            document.getElementById('userMenuDesktop').innerHTML += `  
            <a class="dropdown-item" href="./login.html">Login</a>`;
        }
        else {
            document.getElementById('menuMobileDropDown').innerHTML += `  
            <a class="nav-link active" href="./login.html">Login</a>`;
        }
    }



    //UPLOAD INPUT
    let preview = document.getElementById('previewImg');
    let submitProject = document.getElementById('contact-submit');
    var imgInput=document.getElementById('imgInput');

    imgInput.onchange = () => {
        console.log('onchange');
        preview.style.display = 'block';
        preview.src=imgInput.value;
    };


    //FAB BUTTON
    document.getElementById('fabCreateNewPost').onclick=()=>{
 
        if(sessionStorage.getItem('currentLoggedUser')!=null){
            $('#myModal').modal('toggle');
          
        }
        else{
            $('#modalLogin').modal('toggle');
           
        }
    };

    document.getElementById('goToLoginBtn').onclick=()=>{
        window.location.href="./login.html"
    };
    

    //SUBMIT PROJECT
    submitProject.onclick = (ev) => {
        ev.preventDefault();
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let currentUser = sessionStorage.getItem('currentLoggedUser');
        let img=imgInput.value;

       // console.log(formImg);
   
        if (currentUser != null) {
            if (title != "" && description != "" && img!="" ) {
                registerProject(currentUser, title, description,img);
            }
            else {
                toggleErrorMessage('*Por favor preencha todos os campos', 'block');
                console.log('error');
            }
        }
       
    }




}




