var deviceName = document.getElementById("result");
var device;

// This is an IIFE 
(function checkDevice() {
    console.log(navigator.userAgent)

        //1 Check if its android return ANDROID & show the Download Button for Play Store
        if(navigator.userAgent.match(/Android/i)) {
            device = 'ANDROID';
         // 2. Check if its iOS return IOS & show the Download Button for App Store
        } else if (navigator.userAgent.match(/iPhone/i)) {
            device = 'IOS';
        // 3. Return Web / Desktop & show both / All Download buttons
        } else {
            device = 'Desktop'
        }
    deviceName.innerHTML = device;

})();

