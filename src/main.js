import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocService } from './doc-service.js';
import { outputList } from './output-list.js';

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
      if (response === undefined) {
        $("#outputResults").append(`There was a problem with your request. Error ${response}`);
      } else if (response.ok === false) {
        $("#outputResults").append(`There was a problem with your request. Error ${response.status}: ${response.statusText}`);
      } else if (response.data.length === 0) {
        $("#outputResults").append("No results were found matching your search criteria.");
      } else {
        displayInfo(response);
      }
    };

    const displayInfo = function(doctors) {
      doctors.data.forEach(function(doctor) {
        $("#outputResults").append(outputList(doctor));
      });
    };
  });
});