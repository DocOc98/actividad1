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

export const postData = (data) => {
    axios.post('https://api-fake-pilar-tecno.herokuapp.com/jobs/', {
        name: data.position,
        description: data.description,
        organizationId: data.empresa
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });    
};

export const deleteData = (datas) => {
    var link = 'https://api-fake-pilar-tecno.herokuapp.com/jobs/' + datas.id;
    axios.delete(link, {data: datas})
};

export const getCountries = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/countries/')
        return res.data
    }catch(err){
        console.error(err)
    }
};

export const postCountries = (data) => {
    axios.post('https://api-fake-pilar-tecno.herokuapp.com/countries/', {
        name: data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });    
};

export const deleteCountries = (datas) => {
    var link = 'https://api-fake-pilar-tecno.herokuapp.com/countries/' + datas.id;
    axios.delete(link, {data: datas})
};

export const getPlaces = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/places/')
        return res.data
    }catch(err){
        console.error(err)
    }
};

export const postPlaces = (data) => {
    axios.post('https://api-fake-pilar-tecno.herokuapp.com/places/', {
        name: data.nombre,
        countrieId: data.pais
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });    
};

export const deletePlaces = (datas) => {
    var link = 'https://api-fake-pilar-tecno.herokuapp.com/places/' + datas.id;
    axios.delete(link, {data: datas})
};

export const getOrganizations = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/organizations/')
        return res.data
    }catch(err){
        console.error(err)
    }
};

export const postOrganizations  = (data) => {
    axios.post('https://api-fake-pilar-tecno.herokuapp.com/organizations/', {
        name: data.nombre,
        placeId: data.ciudad
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });    
};

export const deleteOrganizations = (datas) => {
    var link = 'https://api-fake-pilar-tecno.herokuapp.com/organizations/' + datas.id;
    axios.delete(link, {data: datas})
};