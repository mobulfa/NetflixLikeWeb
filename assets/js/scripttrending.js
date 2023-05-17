
const loadTrendingNow = async() => {
    try {
        const response = await fetch(`https://api.tvmaze.com/shows`);
        const data = await response.json();

		console.log(data)
		
		for (let datas of data) {
			
			 if(datas.genres = 'Trend'){
                const sectionTrend = document.getElementById('trendingNow');

				const img = document.createElement('img');

				const showContainer = document.createElement('div');
				const divContainer = document.getElementById('container');
				
				divContainer.setAttribute('class', 'container');
				showContainer.setAttribute('class', 'card');

				img.src = datas.image.original;

				
				showContainer.append(img);
				
				divContainer.append(showContainer);
                sectionTrend.append(divContainer);

                
				
				
				const title = datas.name;
				const genr = datas.genres;
		
				const rating = datas.score;
				const summary = datas.summary;
				const divShowSearch = document.createElement('div');
				divShowSearch.setAttribute('class', 'card-body');

				const para1 = document.createElement('h1');
				const para2 = document.createElement('p');
				const para3 = document.createElement('p');

				para1.setAttribute('class', 'card-tit');
				para2.setAttribute('class', 'card-sub-title');
				para3.setAttribute('class', 'card-info');

				
				para1.textContent = `TItle: ${title}`;
				para2.textContent = `Genres: ${genr} `
				para3.textContent = `Rating: ${rating} Summary: ${summary}`;

				divShowSearch.append(para1);
				divShowSearch.append(para2);
				divShowSearch.append(para3);
				showContainer.append(divShowSearch);
			

			
			}
		
		}

    } catch(e) {
        console.log("ERROR: ", e);
    }
}
loadTrendingNow();