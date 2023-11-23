class CountryInfoAPIService {
    constructor(httpClient) {
      this.httpClient = httpClient;
      this.baseUrl = 'https://restcountries.com/v3.1/';
    }
  
    async getCountryInfo(countryName) {
      try {
        const response = await this.httpClient.get(`${this.baseUrl}name/${countryName}?fullText=true`);
        return response.json();
      } catch (error) {
        console.error('Error fetching country data:', error);
        throw error;
      }
    }
  }
  
  export default CountryInfoAPIService;
