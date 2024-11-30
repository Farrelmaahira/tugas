const fetchData = async () => {
    const res = await fetch('./../assets/data.json');
    const data = await res.json();
    return data;
}

const renderBlog = async () => {
    const data = await fetchData();
    const newsSection = document.getElementById('news-section');
    let news = ``;

    for(let i = 0; i < 3; i++) {
        console.log(data[i].judul);
        news += ` <div
            class="bg-secondary-dark dark:bg-secondary-light rounded-xl p-6 shadow-lg transform transition hover:scale-105"
          >
            <img
              src="${data[i].image}"
              alt="News 1"
              class="w-full rounded-lg mb-4"
            />
            <h3
              class="text-xl font-semibold text-indigo-400 dark:text-indigo-600"
            >
            ${data[i].judul}
            </h3>
            <a href="./pages/single-blog.html?blog=${data[i].slug}" class="text-sm text-indigo-400 hover:text-indigo-600 transition">
              Read More →
          </a>
          </div>
        
        `
    }

    newsSection.innerHTML = news;


}

renderBlog();