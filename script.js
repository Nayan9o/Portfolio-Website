let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }
       for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      // show the underlink 
      event.currentTarget.classList.add("active-link");
      // show the content 
      document.getElementById(tabname).classList.add("active-tab");

    }



      var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
      sidemenu.style.right="0";
    }

    function closemenu(){
      sidemenu.style.right="-200px";
    }

     const scriptURL = 'https://script.google.com/macros/s/AKfycbyvmBq_zlpVX0M26_-WrtlSLQLqZLFw6YH_pFdSnJC7JbOhWGPOiChS-XBvGE1wFvW2mA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },2000)
        // in milisecond = 2s
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })