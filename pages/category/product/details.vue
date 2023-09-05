<template>
  <div>
    <div class="banner-bootom-w3-agileits">
      <div class="container">
        <div class="col-md-4 single-right-left ">
          <div class="grid images_3_of_2">
            <div class="flexslider">
              <div class="clearfix"></div>
              <div class="flex-viewport" style="overflow: hidden; position: relative;">
                <ul class="slides"
                    style="width: 1000%; transition-duration: 0.6s;">
                  <li data-thumb="/assets/images/product/product1.png" class="clone" aria-hidden="true"
                      style="width: 340px; float: left; display: block;">
                    <div class="thumb-image"><img src="/assets/images/product/product1.png" data-imagezoom="true" class="img-responsive" draggable="false"></div>
                  </li>
                </ul>
              </div>
              <ol class="flex-control-nav flex-control-thumbs">
                <li><img src="/assets/images/product/product1.png" class="" draggable="false"></li>
                <li><img src="/assets/images/product/product1.png" draggable="false" class=""></li>
                <li><img src="/assets/images/product/product1.png" draggable="false" class=""></li>
              </ol>
              <ul class="flex-direction-nav">
                <li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li>
                <li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-8 single-right-left simpleCart_shelfItem">
          <h3>55, All Rounder</h3>
          <p><span class="item_price">৳777500</span></p>
          <div class="rating1">
						<span class="starRating">
							<input id="rating5" type="radio" name="rating" value="5">
							<label for="rating5">5</label>
							<input id="rating4" type="radio" name="rating" value="4">
							<label for="rating4">4</label>
							<input id="rating3" type="radio" name="rating" value="3" checked="">
							<label for="rating3">3</label>
							<input id="rating2" type="radio" name="rating" value="2">
							<label for="rating2">2</label>
							<input id="rating1" type="radio" name="rating" value="1">
							<label for="rating1">1</label>
						</span>
          </div>
          <div class="occasion-cart">
            <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
              <form action="#" method="post">
                <fieldset>
                  <input type="hidden" name="cmd" value="_cart">
                  <input type="hidden" name="add" value="1">
                  <input type="hidden" name="business" value=" ">
                  <input type="hidden" name="item_name" value="Wing Sneakers">
                  <input type="hidden" name="amount" value="650.00">
                  <input type="hidden" name="discount_amount" value="1.00">
                  <input type="hidden" name="currency_code" value="USD">
                  <input type="hidden" name="return" value=" ">
                  <input type="hidden" name="cancel_return" value=" ">
                  <input type="submit" name="submit" value="Add to cart" class="button">
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <!-- /new_arrivals -->
        <div class="responsive_tabs_agileits">
          <div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
            <ul class="resp-tabs-list">
              <li class="resp-tab-item resp-tab-active" aria-controls="tab_item-0" role="tab">Description</li>
              <li class="resp-tab-item" aria-controls="tab_item-1" role="tab">Reviews</li>
              <li class="resp-tab-item" aria-controls="tab_item-2" role="tab">Information</li>
            </ul>
            <div class="resp-tabs-container">
              <!--/tab_one-->
              <h2 class="resp-accordion resp-tab-active" role="tab" aria-controls="tab_item-0"><span
                class="resp-arrow"></span>Description</h2>
              <div class="tab1 resp-tab-content resp-tab-content-active" style="display:block"
                   aria-labelledby="tab_item-0">

                <div class="single_page_agile_its_w3ls">
                  <h6>Lorem ipsum dolor sit amet</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl
                    ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                  <p class="w3ls_para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue
                    eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                </div>
              </div>
              <!--//tab_one-->
              <h2 class="resp-accordion" role="tab" aria-controls="tab_item-1"><span class="resp-arrow"></span>Reviews
              </h2>
              <div class="tab2 resp-tab-content" aria-labelledby="tab_item-1">

                <div class="single_page_agile_its_w3ls">
                  <div class="bootstrap-tab-text-grids">
                    <div class="bootstrap-tab-text-grid">
                      <div class="bootstrap-tab-text-grid-left">
                        <img src="images/t1.jpg" alt=" " class="img-responsive">
                      </div>
                      <div class="bootstrap-tab-text-grid-right">
                        <ul>
                          <li><a href="#">Admin</a></li>
                          <li><a href="#"><i class="fa fa-reply-all" aria-hidden="true"></i> Reply</a></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut
                          enim ad minima veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                          vel eum iure reprehenderit.</p>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="add-review">
                      <h4>add a review</h4>
                      <form action="#" method="post">
                        <input type="text" name="Name" required="Name">
                        <input type="email" name="Email" required="Email">
                        <textarea name="Message" required=""></textarea>
                        <input type="submit" value="SEND">
                      </form>
                    </div>
                  </div>

                </div>
              </div>
              <h2 class="resp-accordion" role="tab" aria-controls="tab_item-2"><span class="resp-arrow"></span>Information
              </h2>
              <div class="tab3 resp-tab-content" aria-labelledby="tab_item-2">

                <div class="single_page_agile_its_w3ls">
                  <h6>Big Wing Sneakers (Navy)</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl
                    ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                  <p class="w3ls_para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue
                    eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details.vue",
}
</script>

<style scoped>

</style>
