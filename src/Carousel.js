export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://wallpaperaccess.com/full/3020944.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>NEW RELEASES</h5>
            <p>
              PlayStation 5 exclusively now available. vary limited stock,
              delivery to begin soon.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://gamingbolt.com/wp-content/uploads/2020/07/fifa-21-kylian-mbappe.jpg"
            class="d-block w-100"
            alt="..."
          />

          <div class="carousel-caption d-none d-md-block">
            <h5>UNLIMITED GAMES</h5>
            <p>Book our collections of the latest games today!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://d2ofqe7l47306o.cloudfront.net/games/1920x1080/god-of-war-2018-kratos-chains-rage.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>REFERRALS</h5>
            <p>Enjoy 20% off your next order when you invite your friends!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://wallpaper.dog/large/20420997.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>FUN FACT</h5>
            <p>Life is more fun when you play games</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  );
}
