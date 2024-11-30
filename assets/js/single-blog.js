const fetchData = async () => {
    const res = await fetch('./../assets/data.json');
    const data = await res.json();
    return data;
}

const getDataBySlug = (data, slug) => {
    let data = data.find(item => {
        if(item.slug == slug) {
            return item;
        }
    });

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

    const { judul, konten, image} = singleData[0];
    articleSection.innerHTML = konten;


}
renderData()