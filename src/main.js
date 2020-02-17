import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocService } from './doc-service.js';
import { outputList } from './check-values.js';

$(document).ready(function() {
  const docService = new DocService();

  $(".searchButton").click(function(event) {
    event.preventDefault();
    $("#outputResults").empty();
    const issue = $('#issue').val();
    const docName = $('#docName').val();
    $('#issue').val("");
    $('#docName').val("");

    (async () => {
      const response = await docService.getDocInfoByIssue(issue, docName);
      getElements(response);
    })();

    const getElements = function(response) {
      if (response.data.length === 0) {
        $("#outputResults").append("No results were found matching your search criteria.");
      } else if (response) {
        displayInfo(response);
      } else {
        $("#outputResults").append("There was an error with your request. Please double-check your entries.");
      }
    };

    const displayInfo = function(doctors) {
      doctors.data.forEach(function(doctor) {
        $("#outputResults").append(outputList(doctor));
      });
    };
  });
});