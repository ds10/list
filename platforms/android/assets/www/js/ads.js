 function showBanner() {
        var successCreateBannerView = function () {
            admobAd.showBanner(admobAd.AD_POSITION.BOTTOM_CENTER);//show banner at the bottom center 
        };
        var errorCreateBannerView = function (message) {
            console.log("create ad fail " + message);
        };
         admobAd.initBanner("37fa338b867c4460", admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height, successCreateBannerView, errorCreateBannerView);//create admob banner
    }