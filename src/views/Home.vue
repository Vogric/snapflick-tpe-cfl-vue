<template>
  <div class="home">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="../assets/carousel/blackmirror.jpeg"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Black Mirror</h1>
            <p>
              The dark side of the technological era in which one lives: the
              paranoia of being watched as in a panopticon, the terrorist uses
              of new tools and their relation to daily experience.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/carousel/lacasadepapel.jpeg"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>La casa de papel</h1>
            <p>
              An organized gang of thieves aims to commit the heist of the
              century at the National Mint and Stamps. Five months of
              preparation will be reduced to eleven days to successfully carry
              out the great coup.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/carousel/siliconvalley.jpg"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Silicon Valley</h1>
            <p>
              Richard is a shy programmer who lives with his only three friends
              and they discover an important algorithm that will be a battle
              with interests and false friends. Also, a girl intersects for the
              first time in Richard's life.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/carousel/ricknmorty.jpg"
            alt="Four slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Rick and Morty</h1>
            <p>
              After being missing for almost 20 years, Rick Sánchez arrives
              unexpectedly at the door of his daughter Beth's house and goes to
              live with her and her family using the garage as his personal
              laboratory.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/carousel/strangerthings.jpg"
            alt="Five slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Stranger Things</h1>
            <p>
              When a child goes missing, his friends, family, and police are
              involved in a series of mysterious events as they try to find him.
              His absence coincides with the sighting of a terrifying creature
              and the appearance of a strange girl.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/carousel/lietome.jpg"
            alt="Six slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Lie to Me</h1>
            <p>
              Dr. Carl Lihgtman analyzes facial expressions, body movement, and
              tone of voice to determine if a person is lying by aiding
              authorities in investigations.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/carousel/joker.jpeg"
            alt="Seven slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Joker</h1>
            <p>
              Arthur Fleck loves to make people laugh, but his career as a
              comedian is a failure. Social repudiation, marginalization and a
              series of tragic events lead him down the path of madness and,
              finally, he falls into the world of crime.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../assets/carousel/bbt.jpg"
            alt="Eight slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>The Big Bang Theory</h1>
            <p>
              Leonard and Sheldon are two privileged brains who have absolutely
              no idea how to relate socially, especially when it comes to girls.
              However, a new neighbor named Penny comes to the building to
              change their lives.
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="css" scoped>
.carousel-item {
  width: 100%;
  height: calc(100vh - 71px);
  background-color: #000000;
  background-size: cover;
}

h1 {
  color: white;
  font-size: 2.2rem;
  text-shadow: #000000 2px 2px;
}

p {
  color: white;
  text-shadow: #000000 2px 2px;
}
</style>
