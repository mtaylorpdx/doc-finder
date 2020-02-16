export class DocService {
  async getDocInfoByIssue(issue, docName) {
    try {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=37.773%2C-122.413&name=${docName}&query=${issue}&skip=0&limit=20&user_key=${process.env.API_KEY}`);
      if (response.status === 200 && response.ok) {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } else {
        return false;
      }
    } catch(error) {
      return false;
    }
  }
}