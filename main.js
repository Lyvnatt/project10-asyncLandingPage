// import fetch from "node-fetch";

const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL0il2l-B_WwZmYK6e-4dyugrwdk8Yq0cO&part=snippet&maxResults=11';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '7b196fb432mshc21e9bf93066c4dp1080fbjsn7084d8d765a8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async() => {
  try {
    const videos = await fetchData(API);
    console.log(videos);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(5,11).join('')}
    `;
    console.log(view);
    content.innerHTML = view;
  } catch(error) {
      console.log(error);
  }
})();