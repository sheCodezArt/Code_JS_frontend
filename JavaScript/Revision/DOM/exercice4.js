function masteredCSS() {
  let beSure = confirm("Do you know animation and 3d in css?");
  let isHectic = true;
  
  if (!beSure) {
    alert("okay, you dont know them!");
    if (isHectic == true) {
      alert("okay let us drop it!");
    }
    else {
      alert("okay, let us proceed!");
    }
  }
  else {
    alert("Let us proceed!");
  }
}
masteredCSS();