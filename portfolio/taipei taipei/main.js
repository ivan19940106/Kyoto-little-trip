$(document).ready(function(){
	
	var weather = $.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-32163513-690A-4F4F-97AC-2E385AE3328B&format=JSON&locationName=" ,'json');
	
	console.log(weather);
	
});