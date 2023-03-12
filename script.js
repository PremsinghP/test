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
  doc.text(email, 15, 25);
  doc.text(phone, 15, 30);
  doc.text(address, 15, 35);
  doc.setFontSize(16);
  doc.text("Summary", 15, 50);
  doc.setFontSize(12);
  doc.text(summary, 15, 55);
  doc.setFontSize(16);
  doc.text("Experience", 15, 80);
  doc.setFontSize(12);
  doc.text(experience, 15, 85);
  doc.setFontSize(16);
  doc.text("Education", 15, 120);
  doc.setFontSize(12);
  doc.text(education, 15, 125);

  // Save PDF
  doc.save(name + "_resume.pdf");
}
