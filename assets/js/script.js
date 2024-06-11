document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll(".containerrr");

  containers.forEach(container => {
    container.addEventListener("mouseover", function() {
      this.classList.add("hovered"); // Add the "hovered" class when hovered
    });

    container.addEventListener("mouseleave", function() {
      this.classList.remove("hovered"); // Remove the "hovered" class when cursor leaves
    });
  });

  var coll = document.querySelector('.collapsible-btn');
  var content = document.querySelector('.collapsible-content');
  
  coll.addEventListener('click', function() {
    content.classList.toggle('show'); // Toggle the "show" class for content visibility
  });
});
