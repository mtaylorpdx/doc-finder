import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocService } from './doc-service.js';

$(document).ready(function() {
  const docService = new DocService();

  $("#searchIssue").click(function(event) {
    event.preventDefault();
    const issue = $('#issue').val();
    const docName = $('#docName').val();
    $('#issue').val("");
    $('#docName').val("");

    (async () => {
      const response = await docService.getDocInfoByIssue(issue, docName);
      getElements(response);
    })();

    const getElements = function(response) {
      if (response === false) {
        $("#append").append("There was an error with your request. Please check your entries.");
      } else {
        displayInfo(response);
      }
    };

    let displayInfo = function(doctors) {
      doctors.data.forEach(function(doctor) {
        $("#append").append(`<p><strong>Name:</strong> ${doctor.profile.first_name} ${doctor.profile.last_name}<br><p><strong>Address:</strong> ${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state}, ${doctor.practices[0].visit_address.zip}
        <br><p><strong>Phone: </strong>${doctor.practices[0].phones[0].number} (${doctor.practices[0].phones[0].type})</p><hr>`);
      });
    };
  });
});