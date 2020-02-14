import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocService } from './doc-service.js';



$(document).ready(function() {
  const docService = new DocService();
  
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
        console.log("Error");
      } else {
        console.log(response.body);
      }
    };
  });
});