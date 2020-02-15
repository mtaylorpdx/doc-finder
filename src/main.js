import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocService } from './doc-service.js';



$(document).ready(function() {
  const docService = new DocService();

  $("#searchAilment").click(function(event) {
    event.preventDefault();
    $("#onLoad").hide();
    $("#locationSearch").fadeIn();
    $("#issueSearch").fadeIn();
  });

  $("#searchName").click(function(event) {
    event.preventDefault();
    $("#onLoad").hide();
    $("#locationSearch").fadeIn();
    $("#docNameSearch").fadeIn();
  });


  $("form").submit(function(event) {
    event.preventDefault();
    const issue = $('#issue').val();
    const location = $('#location').val();
    $('#issue').val("");
    $('#location').val("");

    (async () => {
      const response = await docService.getDocInfoByIssue(issue, location);
      console.log(response);
      getElements(response);
    })();

    const getElements = function(response) {
      if (response === false) {
        $("#append").html(`No results found. Please check your search terms.`);
      } else {
        displayInfo(response);
      }
    };

    let displayInfo = function(doctors) {
      doctors.data.forEach(function(doctor) {
        $("#append").append(`<p>Name: ${doctor.profile.first_name} ${doctor.profile.last_name}<br> Phone: ${doctor.practices[0].phones[0].number} - ${doctor.practices[0].phones[0].type}</p><hr>`);
      });
    };
  });
});