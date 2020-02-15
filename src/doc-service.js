export class DocService {

  async getDocInfoByIssue(issue) {
    try {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?location=45.5160%2C-122.6814%2C25&user_location=37.773%2C-122.413&query=${issue}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      if (response.status != 200 || response.ok != true) {
        return false;
      } else {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      }
    } catch(error) {
      return false;
    }
  }
}