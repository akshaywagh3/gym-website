export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': 'b5d8d0ef53msh3cabe995f9cd6bdp1e3e69jsn75f38fdc6ef1',
	}


};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
export const fetchdata= async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}