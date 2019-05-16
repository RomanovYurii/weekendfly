import axios from "axios";
import moment from "moment";
import airports from './airports';

const
    convertCurrency = (price, currency) => {
        switch (currency) {
            case 'EUR':
                currency = 4.29;
                break;
            case 'CZK':
                currency = 0.17;
                break;
            case 'BGN':
                currency = 2.19;
                break;
            case 'PLN':
                currency = 1;
                break;
            case 'DKK':
                currency = 0.58;
                break;
            case 'GBP':
                currency = 4.99;
                break;
            case 'HRK':
                currency = 0.58;
                break;
            case 'HUF':
                currency = 0.013;
                break;
            case 'RON':
                currency = 0.90;
                break;
            case 'SEK':
                currency = 0.40;
                break;
        }
        return (price * currency).toFixed(2)
    }, //budget -  how much you can spend on one ticket

    //https://desktopapps.ryanair.com/v4/en-gb/availability?ADT=1&CHD=0&DateIn=2019-06-28&DateOut=2019-06-28&Destination=DUB&FlexDaysIn=6&FlexDaysOut=2&INF=0&IncludeConnectingFlights=true&Origin=LCJ&RoundTrip=true&TEEN=0&ToUs=AGREED&exists=false
    makeTicket = (flight, currency) => {
        return {
            dep: moment(flight.time[0]).format('HH:mm'),
            arr: moment(flight.time[1]).format('HH:mm'),
            duration: flight.duration,
            price: convertCurrency(flight.regularFare.fares[0].amount, currency)
        }
    },
    getTickets = async (budget, dateTo, dateFrom, destination, origin) => {
        console.log("Finding tickets called");
        console.log(budget, dateTo, dateFrom, destination, origin);
        const myDest = airports.filter(airport => airport.key === destination);
        const myOrig = airports.filter(airport => airport.key === origin);
        origin = myOrig[0].code;
        destination = myDest[0].code;
        console.log("After code lookup");
        console.log(budget, dateTo, dateFrom, destination, origin);
        const
            ticketsTo = [],
            ticketsBack = [],
            url = 'https://desktopapps.ryanair.com/v4/en-gb/availability?ADT=1&CHD=0&DateIn=' + dateTo + '&DateOut=' +
                dateFrom + '&Destination=' + destination +
                '&FlexDaysIn=0&FlexDaysOut=0&INF=0&IncludeConnectingFlights=false&Origin=' + origin +
                '&RoundTrip=true&TEEN=0&ToUs=AGREED&exists=false'
        ;
        let currency = '';

        await axios.get(url).then(res => {
            res = res.data;

            currency = res.currency;

            //Get options for trip to destination
            res.trips[0].dates[0].flights.map(flight => {
                const ticket = makeTicket(flight, currency);
                if (budget >= ticket.price) {
                    ticketsTo.push(ticket);
                }
            });

            //Get options for trip from destination
            res.trips[1].dates[0].flights.map(flight => {
                const ticket = makeTicket(flight, currency);
                if (budget >= ticket.price) {
                    ticketsBack.push(ticket);
                }
            });
        });

        return {
            ticketsTo,
            ticketsBack
        }
    }
;

export {getTickets};