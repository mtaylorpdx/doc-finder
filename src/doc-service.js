export class DocService {

  async getDocInfoByIssue(issue, location) {
    try {
      console.log(issue);
      console.log(location);
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?query=flu&location=${location}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      console.log(response.doctor_list);
      if (response.status != 200 || response.ok != true) {
        console.log(response.status + " " + response.ok);
        return false;
      } else {
        let jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse);
        return jsonifiedResponse;
      }
    } catch(error) {
      return false;
    }
  }
}