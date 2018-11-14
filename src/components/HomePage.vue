<template>
  <div class="container">
    <div class="header">
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main col-md-12">Cars Fleet</span>
          <span class="heading-primary-sub col-md-12">The best cars for You!</span>
        </h1>
      </div>
    </div>
    <div class="row home">
      <div class="col-md-12">
        <p class="text">Wypożyczalnia samochodów osobowych i busów, serwis samochodowy, serwis ogumienia pojazdów
          osobowych i
          ciężarowych, samochody zastępcze dla klientów, holowanie do serwisu własną pomocą drogową, profesjonalna
          myjnia samoobsługowa, wszystkie te punkty powodują że stajemy naprzeciw szerokiego wachlarza zapotrzebowań
          naszych klientów. </p>
        <p class="text">Wypożyczane pojazdy są w pełni sprawne i systematycznie serwisowane, co daję gwarancję
          bezpieczeństwa i niezawodności, ograniczając w ten sposób ewentualne niespodzianki.</p>
        <ul>Posiadamy w ofercie samochody takich marek jak:
          <li>Opel Vivaro 1,6 CDTI BiTurbo 9-osobowy,</li>
          <li>Ford Transit Custom 2,2 TDCI 9-osobowy,</li>
          <li>Seat Alhambra 1,9 TDI 7-osobowy,</li>
          <li>Citroen Berlingo 1,6 HDI 5-osobowy,</li>
          <li>Skoda Octavia Combi 1,6 TDI 5-osobowy,</li>
          <li>Opel Corsa 1,2 Ecotec 4-osobowy</li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }

</script>

<style scoped>
  .text,
  ul,
  li {
    text-align: justify;
    font-size: 20px;
    text-shadow: 2px 2px black;
  }

  .home {
    margin-bottom: 50px;
  }

  .header {
    margin: 7px;
    height: 50vh;
    background-image: linear-gradient(to right bottom,
      rgba(248, 154, 46, 0.6),
      rgba(30, 221, 110, 0.2)),
      url('https://lh3.googleusercontent.com/R-os3On4RzzW0BwAiIhGS1JDfwfjfdP6akxSCv-zlsCRPSR7DbGn5g9QIglWj96Y0TEZgeS0sotWR9FbefIWx3XuOT_tk6G04HwxxzO1K9HBraJPto72yL4Y88BHsR298vdrCRHaN3CMuKIqKHi5xRLF1AI5Cf0mPHVWgfKE4B19zXyTp9rrEdQ2OZdaOMTLqDHtZLHAVXdLhRrnikxrgBqzYKvjtEc8Md7lt9454R11kPxVpNC9qFsCkNl0Ml5nEMBisoNNy-9zAMfHkjUXGlKf8I72qG0gfc9qf9l9O8tcu7Ds1vB8bQsJEchAIyzTklrw5jOj6XydTeBC3wMpdVwnQxD-gRlcKZuFdXNsWsy-ggA-fqDA0EQfToqmf29-lDTtFlWh4iQCS72_ucZAPIbuOp1GTO7iQdFnW1uOVc5C1e6pvvXl-W-5VuVfgysK6lhC0w5sA_F69SPKo8i612yuJdxV_BMN04iZp9Ypmwb8prlXR5Wn9NVhZUi1Jej492X80OIvAQ5DxtbnX7tOEBqBjasxj1mt68FAhyO8jzT5TeLzPpEvz0oVBDTZkYz9WtLAG_rs_TpmZp-K5z_NKZx7RyspOv2xnf2p2ibzSjPqff646YV0er7IswwYDrdGN4oY4uI63JT3FilO3r4IDvLq=w640-h426-no');
    /* url('../assets/img/street.png'); */
    background-size: cover;
    background-position: top;
    position: relative;

    clip-path: polygon(0 0, 100% 0, 100% 40vh, 0 100%)
  }


  .text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading-primary {
    color: #fff;
    text-transform: uppercase;

    backface-visibility: hidden;
    margin-bottom: 60px;
  }

  .heading-primary-main {
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;
    margin: 15px;
    animation-name: moveInLeft;
    animation-duration: 3s;
    animation-timing-function: ease-out
  }

  .heading-primary-sub {
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 17.4px;
    animation: moveInRight 3s ease-out;
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    80% {
      transform: translateX(10px)
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    80% {
      transform: translateX(-10px)
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInButton {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }


    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

</style>
