


window.onload = function() {
    var img = document.getElementById('myGif');
    var gifDuration = 4000; // Duration of your GIF in milliseconds

    setTimeout(function() {
        img.src = './assets/image.png'; // Replace with a static image after the duration
    }, gifDuration);
};



const floatingNavs = document.querySelectorAll('.floating_nav a')

const removeActiveClass = () =>{
    floatingNavs.forEach(nav=>{
        nav.classList.remove('active');
    })
}

floatingNavs.forEach(nav => {
    nav.addEventListener('click',()=>{
        removeActiveClass();
        nav.classList.add('active')
    })
})



const resumeRight = document.querySelector('.resume_right')





//-------------ABOUT

const aboutBtn = document.querySelector('.about_btn');
const aboutContent =`
<h4>About me</h4>
<p>I am a highly motivated and versatile individual, always ready to embrace new challenges. Driven by a passion for learning, I am committed to delivering exceptional results. With a positive attitude and a growth mindset, I am eager to make meaningful contributions and achieve remarkable success.</p>
<div class="about_right">
    <div class="about_container">
        <div class="about_header">
            <div class="about_js">Index.js <i class="fa fa-window-close"></i></div>
        </div>
        <div class="about_main">
            <div class="about_num">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
            </div>
            <div class="about_code">
                <span>const</span> aboutMe = <span>{</span>
                <div class="about_flex">
                    <div class="about_first">
                        <p>Name:</p>
                        <p>Email:</p>
                        <p>Linkedin:</p>
                        <p>Github:</p>
                        <p>Instagram:</p>
                    </div>
                    <div class="about_second">
                        <span>['Pratham Patel']</span>
                        <a href="mailto:prathampatel8685@gmail.com"><span>['prathampatel8685@gmail.com']</span></a>
                        <a href="https://www.linkedin.com/in/pratham093/"><span>['PrathamPatel']</span></a>
                        <br>
                        <a href="https://github.com/prathamjpatel"><span>['@prathamjpatel']</span></a>
                        <br>
                        <a href="https://www.instagram.com/7prthm/"><span>['@7prthm']</span></a>
                        <br>
                    </div>
                </div>
                <span>}</span>;
                <br>
                <span>console</span>.log{<p>"A Full Stack Web-Developer"</p>}
            </div>
        </div>
    </div>
</div>

                `

aboutBtn.addEventListener('click', () =>{
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = 'resume_right'
    aboutBtn.classList.add('primary');
    skillsBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})


resumeRight.innerHTML = aboutContent;


//---------------SKILLS
const skillsBtn = document.querySelector('.skills_btn');
const skillsContent=`  
<h4>Skills</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, natus.</p>
 <div class="skill-bars">

  <div class="bar">
    <div class="info">
      <span>HTML</span>
    </div>
    <div class="progress-line html">
      <span></span>
    </div>
  </div>

  <div class="bar">
    <div class="info">
      <span>CSS</span>
    </div>
    <div class="progress-line css">
      <span></span>
    </div>
  </div>

  <div class="bar">
    <div class="info">
      <span>Javascript</span>
    </div>
    <div class="progress-line javascript">
      <span></span>
    </div>
  </div>

  <div class="bar">
    <div class="info">
      <span>Python</span>
    </div>
    <div class="progress-line python">
      <span></span>
    </div>
  </div>

  <div class="bar">
    <div class="info">
      <span>React JS</span>
    </div>
    <div class="progress-line reactjs">
      <span></span>
    </div>
    
  </div>
   <div class="bar">
    <div class="info">
      <span>Node JS</span>
    </div>
    <div class="progress-line nodejs">
      <span></span>
    </div>
     
  </div>
   <div class="bar">
    <div class="info">
      <span>Express JS</span>
    </div>
    <div class="progress-line expressjs">
      <span></span>
    </div>
  </div>
  
   <div class="bar">
    <div class="info">
      <span>MongoDB</span>
    </div>
    <div class="progress-line mongodb">
      <span></span>
    </div>
  </div>

</div>`

skillsBtn.addEventListener('click', () =>{
    resumeRight.innerHTML = skillsContent;
    //  resumeRight.classList = ('skills');
    skillsBtn.classList.add('primary');
    aboutBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})




//---------------EDUCATION
const educationBtn = document.querySelector('.education_btn');
const educationContent=`<h4>Education</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, blanditiis.</p>
               <ul>
                <li>
                    <h5>B.Tech(Computer Engineering)</h5>
                    <h6>Ganpat University</h6>
                    <p>2021-2025</p>
                </li>
                <li>
                    <h5>HSC(Science stream(A group))</h5>
                    <h6>Exotica Junior Science College</h6>
                    <p>06/2019 - 03/2021</p>
                </li>
                <li>
                    <h5>SSC</h5>
                    <h6>Urban Vidhyalaya</h6>
                    <p>06/2018 - 03/2019</p>
                </li>
               </ul>`

educationBtn.addEventListener("click", ()=>{
    resumeRight.innerHTML=educationContent;
    resumeRight.classList.add('education')

    educationBtn.classList.add('primary')
    skillsBtn.classList.remove('primary');
    aboutBtn.classList.remove('primary');
    experienceBtn.classList.remove('primary');
})



//---------------EXPERIENCE
// const experienceBtn = document.querySelector('.experience_btn');

// const experienceContent = ` <h4>Experience</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa?
//                 </p>
//                 <ul>
//                     <li>
//                         <h6>Year</h6>
//                         <h5>Role</h5>
//                         <p>Company Name</p>
//                     </li>
//                     <li>
//                         <h6>Year</h6>
//                         <h5>Role</h5>
//                         <p>Company Name</p>
//                     </li>
//                     <li>
//                         <h6>Year</h6>
//                         <h5>Role</h5>
//                         <p>Company Name</p>    
//                     </li>
//                     <li>
//                         <h6>Year</h6>
//                         <h5>Role</h5>
//                         <p>Company Name</p>    
//                     </li>
//                 </ul>`

// experienceBtn.addEventListener("click", ()=>{
//        resumeRight.innerHTML=experienceContent;
//        resumeRight.classList.add('experience')

//        experienceBtn.classList.add('primary')
//        skillsBtn.classList.remove('primary');
//        aboutBtn.classList.remove('primary');
//        educationBtn.classList.remove('primary');
// })                
// resumeRight.innerHTML = experienceContent;





// ======================= DARK MODE

const themeToggler = document.querySelector('.nav_theme_btn')

themeToggler.addEventListener('click',()=>{
  document.body.classList.toggle('dark-theme-variables')
  if(document.body.classList == ''){
    themeToggler.innerHTML = '<i class="uil uil-moon"></i>'
    window.localStorage.setItem('portfolio-theme' , '')
  }else{
    themeToggler.innerHTML = '<i class="uil uil-sun"></i>'
    window.localStorage.setItem('portfolio-theme' , 'dark-theme-variables')
  }
})



const bodyClass = window.localStorage.getItem('portfolio-theme');
document.body.className = bodyClass;


// ======================= MIXITUP 

// var mixitup = require('mixitup');
// const containerEl = document.querySelector('.projects_container');

// let mixer = mixitup (containerEl,{
//   animation:{
//     enable : true
//   }
// })
