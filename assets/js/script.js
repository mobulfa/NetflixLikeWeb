
const form = document.querySelector('#searchMovie');
form.addEventListener('submit', async function(e) {
	e.preventDefault();
	const searchTerm = form.elements.q.value;
	const config = {params: {q: searchTerm}, headers:{}};
	const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);

		const clearContents = document.getElementById('containerSearch');
		clearContents.textContent = "";

	displayImage(res.data);
		form.elements.q.value = '';	
	
})

const displayImage = async (show) => {
	for (let datas of show) {
		
		if(datas.show.image){
			const img = document.createElement('img');
   
			const hideSectionAdventure = document.getElementById('actionAdventure');
			const hideSectionTrend = document.getElementById('trendingNow');
			const hideSectionDrama = document.getElementById('dramas');

			
			hideSectionAdventure.setAttribute('hidden', 'hidden');
			hideSectionTrend.setAttribute('hidden', 'hidden');
			hideSectionDrama.setAttribute('hidden', 'hidden');
			

			const searchValues = document.getElementById('searchValues');

			searchValues.removeAttribute('hidden');

				const showContainer = document.createElement('div');
				 const divContainer = document.getElementById('containerSearch');
		
				 divContainer.setAttribute('class', 'container');
				showContainer.setAttribute('class', 'card');

				img.src = datas.show.image.medium;
			 
				console.log(datas.show)
				
				showContainer.append(img);
				 divContainer.append(showContainer);
				searchValues.append(divContainer);
				
				
				const title = datas.show.name;
				const genr = datas.show.genres;
				const rating = datas.score;
				const summary = datas.show.summary;
				const divShowSearch = document.createElement('div');
				divShowSearch.setAttribute('class', 'card-body');

				const para1 = document.createElement('h1');
				const para2 = document.createElement('p');
				const para3 = document.createElement('p');
				const para4 = document.createElement('p');

				para1.setAttribute('class', 'card-tit');
				para2.setAttribute('class', 'card-sub-title');
				para3.setAttribute('class', 'card-info');
				para4.setAttribute('class', 'card-info');

				
				para1.textContent = `TItle: ${title}`;
				para2.textContent = `Genres: ${genr} `
				para3.textContent = `Rating: ${rating}`
				para4.innerHTML = ` Summary: ${summary}`;

				divShowSearch.append(para1);
				divShowSearch.append(para2);
				divShowSearch.append(para3);
				divShowSearch.append(para4);
				showContainer.append(divShowSearch);
			

			
			}
		
		}

}
	

const trendNow = async () => {
	const response = await fetch(`https://api.tvmaze.com/shows`);
	
	const dataResponse = await response.json();
	//console.log(dataResponse)
	for(let datas of dataResponse) {
		
		if (datas.genres){
		
			 const sectionDrama = document.getElementById('trendingNow');
			
		 
			const img = document.createElement('img');

				const showContainer = document.createElement('div');
				const divContainer = document.getElementById('containerTrend');
				
				divContainer.setAttribute('class', 'container');
				showContainer.setAttribute('class', 'card');

				img.src = datas.image.medium;

				
				showContainer.append(img);
				
				divContainer.append(showContainer);
				 sectionDrama.append(divContainer);
			
				
				const title = datas.name;
				const genr = datas.genres;
	
				const rating = datas.rating.average;
				const summary = datas.summary;
				const divShowSearch = document.createElement('div');
				divShowSearch.setAttribute('class', 'card-body');

				const para1 = document.createElement('h1');
				const para2 = document.createElement('p');
				const para3 = document.createElement('p');
				const para4 = document.createElement('p');

				para1.setAttribute('class', 'card-tit');
				para2.setAttribute('class', 'card-sub-title');
				para3.setAttribute('class', 'card-info');
				para4.setAttribute('class', 'card-info');

				
				para1.textContent = `TItle: ${title}`;
				para2.textContent = `Genres: ${genr} `
				para3.textContent = `Rating: ${rating}`
				para4.innerHTML = ` Summary: ${summary}`;

				divShowSearch.append(para1);
				divShowSearch.append(para2);
				divShowSearch.append(para3);
				divShowSearch.append(para4);
				showContainer.append(divShowSearch);	
		}
	
	}
}





const actionAdventure = async () => {
	const response = await fetch(`https://api.tvmaze.com/shows`);
	const dataResponse = await response.json();
	
	for(let datass of dataResponse) {
		const gen = datass.genres[0];
		if (gen === "Action" || gen === "Adventure") {
	
			const section = document.getElementById('actionAdventure');
				 
			const img = document.createElement('img');

			const showContainer = document.createElement('div');

			const divContainer = document.getElementById('containerAction');

			divContainer.setAttribute('class', 'container');
			showContainer.setAttribute('class', 'card');

			img.src = datass.image.medium;

				
			showContainer.append(img);
			divContainer.append(showContainer);
			section.append(divContainer);
			
			
			const title = datass.name;
			const genr = datass.genres;
			const rating = datass.rating.average;
			const summary = datass.summary;
			const divShowSearch = document.createElement('div');
			divShowSearch.setAttribute('class', 'card-body');

			const para1 = document.createElement('h1');
			const para2 = document.createElement('div');
			const para3 = document.createElement('div');
			const para4 = document.createElement('p');

				para1.setAttribute('class', 'card-tit');
				para2.setAttribute('class', 'card-sub-title');
				para3.setAttribute('class', 'card-info');
				para4.setAttribute('class', 'card-info');

				
				para1.textContent = `TItle: ${title}`;
				para2.textContent = `Genres: ${genr} `
				para3.textContent = `Rating: ${rating}`
				para4.innerHTML = ` Summary: ${summary}`;

				divShowSearch.append(para1);
				divShowSearch.append(para2);
				divShowSearch.append(para3);
				divShowSearch.append(para4);
				showContainer.append(divShowSearch);	
		}
	
	}
	
}

const dramas = async () => {
	const response = await fetch(`https://api.tvmaze.com/shows`);
	const dataResponse = await response.json();
	
	for(let datass of dataResponse) {
		const gen = datass.genres[0];
		if (gen === "Drama"){
	
			const sectionAction = document.getElementById('dramas');
				 
			const img = document.createElement('img');

			const showContainer = document.createElement('div');

			const divContainer = document.getElementById('containerDrama');

			divContainer.setAttribute('class', 'container');
			showContainer.setAttribute('class', 'card');

			img.src = datass.image.medium;

				
			showContainer.append(img);
			divContainer.append(showContainer);
			sectionAction.append(divContainer);
			
			
			const title = datass.name;
			const genr = datass.genres;
			const rating = datass.rating.average;
			const summary = datass.summary;
			const divShowSearch = document.createElement('div');
			divShowSearch.setAttribute('class', 'card-body');

			const para1 = document.createElement('h1');
			const para2 = document.createElement('div');
			const para3 = document.createElement('div');
			para1.setAttribute('class', 'card-tit');
			para2.setAttribute('class', 'card-sub-title');
			para3.setAttribute('class', 'card-info');
			const para4 = document.createElement('p');

			para1.setAttribute('class', 'card-tit');
			para2.setAttribute('class', 'card-sub-title');
			para3.setAttribute('class', 'card-info');
			para4.setAttribute('class', 'card-info');

			
			para1.textContent = `TItle: ${title}`;
			para2.textContent = `Genres: ${genr} `
			para3.textContent = `Rating: ${rating}`
			para4.innerHTML = ` Summary: ${summary}`;

			divShowSearch.append(para1);
			divShowSearch.append(para2);
			divShowSearch.append(para3);
			divShowSearch.append(para4);
			showContainer.append(divShowSearch);		
		}
	
	}
	
}


trendNow();
actionAdventure();
dramas();








