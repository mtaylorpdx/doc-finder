export function availabilityCheck(availability) {
  if (availability === true) {
    availability = "Currently accepting patients.";
  } else {
    availability = "Not accepting patients at this time.";
  }
  return availability;
}

export function websiteCheck(website) {
  if (website === undefined) {
    website = "Website URL not available.";
  } else {
    website = `<a href="${website}">${website}</a>`;
  }
  return website;
}