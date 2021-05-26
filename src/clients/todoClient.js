import axios from "axios";

export const getData = async () => {
    /*return axios
        .get('https://api-fake-pilar-tecno.herokuapp.com/jobs/1')
        .then((res)=>
            res
        )
        .catch((err)=>
            console.log(err)
        );*/
        try{
            const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs/')
            return res.data
        }catch(err){
            console.error(err)
        }
};

export const getCountries = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/countries/')
        return res.data
    }catch(err){
        console.error(err)
    }
};