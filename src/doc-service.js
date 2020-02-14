export class DocService {
  async getDocInfoByIssue(city, issue) {
    try {
      let response = await fetch ('');
      if (response.status != 200 || response.ok != true) {
        return false
      } else {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      }
    } catch(error) {
      return false;
    }
  }
}