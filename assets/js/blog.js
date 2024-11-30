const fetchData = async () => {
    const res = await fetch('./../assets/data.json');
    const data = await res.json();
    return data;
}

const render = async() => {
    const blogSection = document.getElementById('blog-section');
    let cards = ``;
    const data = await fetchData();
    data.map(item => {
        cards += `
            <div class="bg-gray-900 dark:bg-secondary-light rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
              <img src="${item.image}" alt="Global Politics" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-semibold text-indigo-400 dark:text-indigo-600 mb-2">${item.judul}</h3>
                <a href="single-blog.html?blog=${item.slug}" class="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition">
                  Read Blog
                </a>
              </div>
            </div>
        `
    });

    blogSection.innerHTML = cards
}

render();
