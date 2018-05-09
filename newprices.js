<script>
jQuery(function($) {
  function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
  }

  roundUp(192.168, 1) //=> 192.2
  $.getJSON('https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON', function(data) {


    var roundedUp;
    var factPrice = `${data.factomPrice}`;
    var storjPrice = `${data.storjPrice}`;
    var etheriumNeeded = `${data.gasPrice}`;
    var hercPrice = 0.60;

    var factNeeded = 0.000128 / factPrice;
    var storjNeeded = 0.0007032 / storjPrice;
    var hercBurned = factNeeded/hercPrice;

    factNeeded = roundUp(factNeeded, 6);
    storjNeeded = roundUp(storjNeeded, 6);

    var hercNeededFCT = (0.000128 / 0.60) * factPrice;
    var hercNeededSTORJ = (0.0007032 / 0.60) * storjPrice;
    var hercNeeded = ((storjNeeded/hercPrice) + (factNeeded/hercPrice)+(etheriumNeeded/hercPrice)+hercBurned);

    $("#factPrice").html(factPrice);
    $("#factPriceMobile").html(factPrice);
    $("#storjPrice").html(storjPrice);
    $("#storjPriceMobile").html(storjPrice);


    $("#factNeeded").html(factNeeded);
    $("#factNeededMobile").html(factNeeded);

    $("#storjNeeded").html(storjNeeded);
    $("#storjNeededMobile").html(storjNeeded);

    $("#ethGasPrice").html(etheriumNeeded);
	      $("#ethGasPrice2").html(etheriumNeeded);
    $("#ethGasPrice3").html(etheriumNeeded);


    $("#hercNeeded").html(hercNeededFCT);
    $("#hercNeeded2").html(hercNeededSTORJ);
    $("#hercNeededMobile").html(hercNeededFCT);
    $("#hercNeededMobile2").html(hercNeededSTORJ);
    $("#ethGasPriceMobile").html(etheriumNeeded);
	      $("#ethGasPriceMobile2").html(etheriumNeeded);
    $("#ethGasPriceMobile3").html(etheriumNeeded);

  });
});

</script>
