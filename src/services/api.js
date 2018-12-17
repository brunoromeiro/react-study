import axios from 'axios';

const fetchData = async () => {
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    const data = (await axios.get(url)).data[0];
    return data;
}

export default {
    fetchData
};