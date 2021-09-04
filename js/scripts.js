  
var li_items = document.querySelectorAll(".accordion_wrap ul li");
var ul = document.querySelector(".accordion_wrap ul");

li_items.forEach(function(item){
	item.addEventListener("click", function(){
		li_items.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul.addEventListener("mouseleave", function(){
	li_items.forEach(function(item){
		item.classList.remove("active");
	})
});



//Alert message once script- By JavaScript Kit
//Credit notice must stay intact for use
//Visit http://javascriptkit.com for this script

//specify message to alert
var alertmessage="This website is still in development and might not resize properly!"

///No editing required beyond here/////

//Alert only once per browser session (0=no, 1=yes)
var once_per_session=1


function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

function alertornot(){
if (get_cookie('alerted')==''){
loadalert()
document.cookie="alerted=yes"
}
}

function loadalert(){
alert(alertmessage)
}

if (once_per_session==0)
loadalert()
else
alertornot()

