const batteryLevel = document.querySelector('.batteryLevel');
const batteryCharging = document.querySelector('.batteryCharging');
const batteryChargingTime = document.querySelector('.batteryChargingTime');
const batteryDisChargingTime = document.querySelector('.batteryDisChargingTime');

//!----> Battery API

// console.log(navigator);  //Object
// console.log(navigator.getBattery());    //Promise

const batteryAPI = () => {
    
if('getBattery' in navigator)
{
    navigator.getBattery().then((battery)=>{    //here 'battery' is an object
        console.log(battery);   //'battery is an object

        function updateAllBatteryDetails(){
            updateChargingInfo();
            updateLevelChangeInfo();
            updateDischargingTime();
            updateChargingTime();
        }
        updateAllBatteryDetails();

        //Battery charging change
        battery.addEventListener('chargingchange', ()=>{
            updateChargingInfo();
        });
        function updateChargingInfo(){
            const isCharging = battery.charging ? 'Yes' : 'No';
            batteryCharging.innerHTML = isCharging;
        }

        //Battery Charging Time
        battery.addEventListener('chargingtimechange', ()=>{
            updateChargingTime();
        });
        function updateChargingTime()
        {
            const updateTime = battery.chargingTime + ' seconds';
            batteryChargingTime.innerHTML = updateTime;
        }

        //Battery Discharging Time
        battery.addEventListener('dischargingtimechange', ()=>{
            updateDischargingTime();
        });
        function updateDischargingTime()
        {
            const updateTime = battery.dischargingTime + ' seconds';
            batteryDisChargingTime.innerHTML = updateTime;
        }

        //Battery Status (Battery Level)
        battery.addEventListener('levelchange', ()=>{
            updateLevelChangeInfo();
        });
        function updateLevelChangeInfo()
        {
            const level = battery.level*100 + '%';
            batteryLevel.innerHTML = level;
        }
    })
}

}

batteryAPI();