//alert("yes")
let data =JSON.parse(window.localStorage.getItem('resume'));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const resume_name = urlParams.get('fname');

alert(resume_name);

JSON.parse(localStorage.getItem(resume));