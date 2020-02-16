export function displayInfo(doctor) {
  let availabilityCheck = function(availability) {
    if (availability === true) {
      availability = "Currently accepting patients.";
    } else {
      availability = "Not accepting patients at this time.";
    }
    return availability;
  };

  let websiteCheck = function(website) {
    if (website === undefined) {
      website = "Website URL not available.";
    }
    return website;
  };

    let availability = availabilityCheck(doctor.practices[0].accepts_new_patients);
    let website = websiteCheck(doctor.practices[0].website);

    return (`<p><strong>Name:</strong> ${doctor.profile.first_name} ${doctor.profile.last_name}<br><p><strong>Address:</strong> ${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state}, ${doctor.practices[0].visit_address.zip}
    <br><p><strong>Phone: </strong>${doctor.practices[0].phones[0].number} (${doctor.practices[0].phones[0].type})</p><p><strong>Website:</strong> ${website}</p><p><strong>Availability:</strong> ${availability}</p><hr>`);
}


