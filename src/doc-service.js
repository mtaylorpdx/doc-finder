export class DocService {
  
  async getDocInfoByIssue() {
    try {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?query=flu&location=OR&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      if (response.status != 200 || response.ok != true) {
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