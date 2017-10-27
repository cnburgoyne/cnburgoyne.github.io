new Date();
var theDate = new Date();
var theMonth = theDate.getMonth() + 1;
var theDay = theDate.getDate();
var theYear = theDate.getFullYear();
var copyrightText = 'Copyright:'+theMonth+'-'+theDay+'-'+theYear;
var copyright = document.getElementById('copyright');
copyright.textContent = copyrightText;
