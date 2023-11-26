let news = document.getElementsByClassName('news')[0];
let card = `
  <div class="col-xl-3 col-lg-4 col-md-6 mb-5">
    <div class="card border-0">
      <div class="card-image">
        <img class="card-img-top rounded-2" src="https://images.unsplash.com/photo-1699882236909-b66077950046" alt="Card image cap" />
      </div>
      <div class="card-body px-0 py-2">
        <small class="d-block mb-2">09.12.2020</small>
        <h6 class="card-title mb-3 text-uppercase">Как сделать ремонт одному?</h6>
        <p class="card-text lh-sm text-secondary">Не исключено, что вам нужен не капитальный и даже косметический ремонт, а просто избавление от накопившегося хлама.</p>
      </div>
    </div>
  </div>
  `
for (let i = 0; i < 12; i++) {
  news.innerHTML += card;
}