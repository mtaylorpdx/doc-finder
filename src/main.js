import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocService } from './doc-service.js';



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    const issue = $('#issue').val();
    const location = $('#location').val();
    console.log(issue + " " + location);
    $('#issue').val("");
    $('#location').val("");

    (async () => {
      let docService = new DocService();
      const response = await docService.getDocInfoByIssue();
      getElements(response);
    })();
  });

  const getElements = function(response) {
    if (response === false) {
      console.log("Error");
    } else {
      console.log(response);
    }
  }

});