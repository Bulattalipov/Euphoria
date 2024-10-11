<script setup></script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer__nav">
        <div class="footer__nav-col">
          <div class="footer__nav-title">Need Help</div>
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Contact Us </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Track Order </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Returns & Refunds </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> FAQ's </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Career </a>
            </li>
          </ul>
        </div>
        <div class="footer__nav-col">
          <div class="footer__nav-title">Company</div>
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> About Us </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> euphoria Blog </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> euphoriastan </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Collaboration </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Media </a>
            </li>
          </ul>
        </div>
        <div class="footer__nav-col">
          <div class="footer__nav-title">More Info</div>
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Term and Conditions </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Privacy Policy </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Shipping Policy </a>
            </li>
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="#"> Sitemap </a>
            </li>
          </ul>
        </div>
        <div class="footer__nav-col">
          <div class="footer__nav-title">Location</div>
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <a class="footer__nav-link" href="mailto:support@euphoria.in">
                support@euphoria.in
              </a>
            </li>
            <li class="footer__nav-item">
              <div class="footer__nav-link">Eklingpura Chouraha, Ahmedabad Main Road</div>
            </li>
            <li class="footer__nav-item">
              <div class="footer__nav-link">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__copy">Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  padding: 60px 0;
  background-color: #3c4242;

  &__nav {
    display: flex;
    gap: 80px;
  }

  &__nav-title {
    font-weight: 700;
    font-size: 28px;
    line-height: 217%;
    color: #f6f6f6;
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  &__nav-link {
    font-weight: 500;
    font-size: 18px;
    line-height: 217%;
    color: #f6f6f6;
  }

  &__copy {
    margin-top: 37px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 200%;
    color: #fff;
  }
}
</style>
