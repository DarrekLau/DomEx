function gettingLink() {
  let links = document.getElementsByTagName("link");
  alert(links.length);
  alert(links[0]);
  alert(links[links.length - 1]);
}
// the link[0] is use as the array start from 0. It should show the title or name of the link rather than the number 0. 