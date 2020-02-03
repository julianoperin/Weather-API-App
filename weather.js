class Weather {
    constructor(city) {
        this.apiKey = 'cf883fd0dc00bacd3d59a5a374b6359b';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch 
        (`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}