import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocService } from './doc-service.js';



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
  });

  (async () => {
    let docService = new DocService();
    const response = await docService.getDocInfoByIssue();
    console.log(response);
  })();

});