function availabilityCheck(availability) {
  if (availability === true) {
    availability = "Currently accepting patients.";
  } else {
    availability = "Not accepting patients at this time.";
  }
  return availability;
}

function websiteCheck(website) {
  if (website === undefined) {
    website = "Website URL not available.";
  } else {
    website = `<a href="${website}">${website}</a>`;
  }
  return website;
}

export function outputList(doctor) {
  let availability = availabilityCheck(doctor.practices[0].accepts_new_patients);
  let website = websiteCheck(doctor.practices[0].website);

  let output =`<div class="card outputCard"><p class= "docName">${doctor.profile.first_name} ${doctor.profile.last_name}<hr><p><strong>Address:</strong> ${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state}, ${doctor.practices[0].visit_address.zip}
  <br><p><strong>Phone: </strong>${doctor.practices[0].phones[0].number} (${doctor.practices[0].phones[0].type})</p><p><strong>Website:</strong> ${website}</p><p><strong>Availability:</strong> ${availability}</p></div>`;
  return output;
}