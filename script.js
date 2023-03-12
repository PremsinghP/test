function generateResume() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var summary = document.getElementById("summary").value;
  var experience = document.getElementById("experience").value;
  var education = document.getElementById("education").value;

  // Create PDF document
  var doc = new jsPDF();
  doc.setFontSize(20);
  doc.text(name, 15, 15);
  doc.setFontSize(14);
  doc.text(email + " | " + phone, 15, 25);
  doc.text(address, 15, 35);
  doc.setFontSize(16);
  doc.text("Summary", 15, 60);
  doc.setFontSize(14);
  doc.text(summary, 15, 70);
  doc.setFontSize(16);
  doc.text("Experience", 15, 95);
  doc.setFontSize(14);
  doc.text(experience, 15, 105);
  doc.setFontSize(16);
  doc.text("Education", 15, 130);
  doc.setFontSize(14);
  doc.text(education, 15, 140);

  // Save PDF document
  doc.save(name + "-resume.pdf");
}
