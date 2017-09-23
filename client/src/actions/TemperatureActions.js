import { fahrenheitToCelsius } from '../utils/temperature';

export const getTemperature = () => {
    return (dispatch) => {
        fetch("https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='brasilia, df')&format=json")
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: "ADD_MESSAGE",
                payload: {
                    message:`Você sabia que a temperatura em brasilia hoje é de ${fahrenheitToCelsius(json.query.results.channel.item.condition.temp)} graus ? `,
                    who: "them"
                },
            });
        });
    };

};