const fetchData = async () => {
    const res = await fetch('./../assets/data.json');
    const data = await res.json();
    return data;
}

const renderData = async () => {
    const articleSection = document.getElementById('article-section')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value = urlParams.get('blog');

    const data = await fetchData();

    const singleData = data.filter((item) => {
        if(item.slug == value) {
            return item;
        }
    });

    const { konten } = singleData[0];
    articleSection.innerHTML = konten;

}

const renderBlogs = async () => {
    const moreBlogs = document.getElementById('more-blogs');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value = urlParams.get('blog');

    const data = await fetchData();

    let cards = ``;

    const restOfBlogs = data.filter(item => {
        if(item.slug !=  value) {
            return item;
        }
    });

    restOfBlogs.map(item => {
        cards += ` <div class="bg-secondary-dark dark:bg-secondary-light rounded-xl overflow-hidden shadow-xl transform transition" >
              <img
                src="${item.image}"
                class="w-full h-48 object-cover"
              />
              <div class="p-5">
                <h3
                  class="text-xl font-semibold text-indigo-400 dark:text-indigo-600 mb-2"
                >
                ${item.judul}
                </h3>
                <a href="single-blog.html?blog=${item.slug}" class="text-indigo-500 hover:text-indigo-600"
                  >Read More</a
                >
              </div>
            </div>
        `
    });
    moreBlogs.innerHTML = cards;


}
renderBlogs();
renderData();