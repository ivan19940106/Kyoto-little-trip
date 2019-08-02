$(document).ready(function(){
	
	// var weather = $.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-32163513-690A-4F4F-97AC-2E385AE3328B&format=JSON&locationName=%E4%BF%A1%E7%BE%A9%E5%8D%80,%E5%8C%97%E6%8A%95%E5%8D%80&elementName=Wx&sort=time&startTime=&dataTime=" ,'json');
//
// 	console.log(weather["success"]);
	
	fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-32163513-690A-4F4F-97AC-2E385AE3328B&format=JSON&locationName=%E4%BF%A1%E7%BE%A9%E5%8D%80,%E5%8C%97%E6%8A%95%E5%8D%80&elementName=Wx&sort=time&startTime=&dataTime=")
	  .then(function(response) {
		  return response.json();
	  })
	  .then(function(myJson) {
  		const temp = myJson
	    console.log(temp.records.locations[0].datasetDescription);
		document.getElementById('test').innerHTML = temp.records.locations[0].datasetDescription;
	  });
	
});

