function getInfo(tech) {

  toggleDescription(true);
}

function toggleDescription(show) {

  let descDiv = document.getElementById('desc-div');
  let compStyle = window.getComputedStyle(descDiv, null);

  let height = compStyle.getPropertyValue('height');
  height = parseInt(height.slice({ to: height.length-3}));

  let paddingTop = compStyle.getPropertyValue('padding-top');
  paddingTop = parseInt(paddingTop.slice({ to: paddingTop.length-3}));

  let paddingBottom = compStyle.getPropertyValue('padding-bottom');
  paddingBottom = parseInt(paddingBottom.slice({ to: paddingBottom.length-3}));

  //alert(`Full size: ${height + paddingBottom + paddingTop} px`);


  if (show) {

  } else {

  }
}
