import React from 'react';
import './SalesInfo.scss';

let SalesInfo = (props) => {
    let soldPhonesCount = 0;
    let phonesOnSaleCount = 0;
    let revenueCount = 0;
    let getDateArr = (date) => {return date.split("-");};

    let phones = props.phoneManager.phones;
    let mode = props.mode;
    for(let id in phones) {
        let phone = phones[id];
        
        // get phones on sale
        let isOnSale = phone.status === 'Selling';
        if(isOnSale) phonesOnSaleCount++;
        // get sold phones 
        let hasSoldDate = phone.dateSold.length > 0;
        let dateSold;
        if(hasSoldDate){
            console.log('has sold date');
            dateSold = phone.dateSold;
            console.log('date sold: ', dateSold);
            let dateArr = getDateArr(dateSold);
            let month = dateArr[1];
            let day = dateArr[2];
            let year = dateArr[0];
            console.log('month sold: ', month);
            console.log('day sold: ', day);
            console.log('year sold: ', year);

            let today = new Date();
            let todayDay = today.getDate();
            todayDay =  (todayDay < 10) ? todayDay = '0' + todayDay : '' + todayDay;

            let todayYear = today.getFullYear() + '';

            let todayMonth = today.getMonth() + 1;
            todayMonth =  (todayMonth < 10) ? todayMonth = '0' + todayMonth : '' + todayMonth;

            console.log('todays month: ', todayMonth);
            console.log('todays day: ', todayDay);
            console.log('todays year: ', todayYear);


            if(mode === 'day') {
                if(month === todayMonth && day === todayDay && year === todayYear){
                    soldPhonesCount++;
                    let hasPriceSold = (phone.priceSold) ? true : false;
                    if(hasPriceSold)
                        revenueCount+=parseInt(phone.priceSold);
                }                    
            }
            else if(mode === 'month') {
                if(month === todayMonth){
                    soldPhonesCount++;
                    let hasPriceSold = (phone.priceSold) ? true : false;
                    if(hasPriceSold)
                        revenueCount+=parseInt(phone.priceSold);
                }                   
            }
        }
    }


    let revenueText;
    let unitsText;
    if(mode === 'month'){
        revenueText = 'Sales this month so far';
        unitsText = 'Units this month so far';
    }
    else if(mode === 'day'){
        revenueText = 'Sales today so far';
        unitsText = 'Units sold today so far';
    }


    let html = <div className="sales-information-container">
        <div className="sales-info-component">
            <p><strong>{revenueCount}</strong> USD</p>
            <p>{revenueText}</p>
        </div>
        <div className="sales-info-component">
            <p><strong>{soldPhonesCount}</strong></p>
            <p>{unitsText}</p>
        </div>
        <div className="sales-info-component">
            <p><strong>{phonesOnSaleCount}</strong></p>
            <p>Units on sale</p>
        </div>
    </div>
    return html;    
};

export default SalesInfo;
