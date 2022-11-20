
class FetchData {
    _url = 'https://jsonplaceholder.typicode.com/users';

    _weatherCitiesUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search?';
    _cityByIdUrl = 'http://dataservice.accuweather.com/locations/v1/';
    _weatherAPI = 'apikey=ule6bAhFJ2UJnH9SlrzxLVigX0wyARst';
    _weatherAPI2 = 'apikey=KYFYLCUfeIQ8VtaJim5Pq2rQTcjChghz';
    _weatherAPI3 = 'apikey=EzguswaWkrO81WnKnzGzROMiAISWqP2t';
    _weatherAPI4 = 'apikey=tJP0YGJAaB8U94P9DHiROlrdBvtoGRz5';
    _weatherAPI5 = 'apikey=kOAaVw9u2GUafyJgtJohdk8mFTgc5ohA';
    _weatherAPI6 = 'apikey=wIrvnem6kDBArE34Z2E1c5xLBz7hwm46';
    _weather5DaysForecastUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    _weatherOneHourForecastUrl = 'http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';

    _fetchData = async (url = this._url) => {
        const response = await fetch(url);
        return await response.json()
    }

    _getCitiesList = async (string) => {
        const response = await fetch(`${this._weatherCitiesUrl}${this._weatherAPI}&q=${string}`);
        return await response.json()
    }

    _getOneHourForecast = async (CityCode) => {
        const response = await fetch(`${this._weatherOneHourForecastUrl}${CityCode}?${this._weatherAPI}`)
        return await response.json()
    }

    _getFiveDaysForecast = async (CityCode) => {
        const response = await fetch(`${this._weather5DaysForecastUrl}${CityCode}?${this._weatherAPI}`);
        return await response.json()
    }

    _getCityById = async (id) => {
        const response = await fetch(`${this._cityByIdUrl}${id}?${this._weatherAPI}`);
        return await response.json();
    }
}

export default FetchData;