/**
 *
 * How to use this algorithm:
 *
 * 1. In component which uses the algorithm import the function "getTickets" as follows:
 *    import {getTickets} from '../relative/path/to/algorithm/flightsAlgorithm'
 *
 * 2. Function returns the object with following structure:
 *   {
 *       ticketsTo: array,
 *       ticketsBack: array
 *   }
 *
 * 3. Each of arrays contains the ticket entries with such properties:
 *    {
 *        dep: string, (formatted time of departure)
 *        arr: string, (formatted time of arrival)
 *        duration: number, (duration of flight)
 *        price: number, (converted price of ticket)
 *    }
 *
 * */

import axios from "axios";
import moment from "moment";

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
    getTickets = async (budget, dateTo, dateFrom, destination, origin) => {
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
                const ticket = {};
                ticket.dep = moment(flight.time[0]).format('HH:mm');
                ticket.arr = moment(flight.time[1]).format('HH:mm');
                ticket.duration = flight.duration;
                ticket.price = convertCurrency(flight.regularFare.fares[0].amount, currency);
                if (budget >= ticket.price) {
                    ticketsTo.push(ticket);
                }
            });

            //Get options for trip from destination
            res.trips[1].dates[0].flights.map(flight => {
                const ticket = {};
                ticket.dep = moment(flight.time[0]).format('HH:mm');
                ticket.arr = moment(flight.time[1]).format('HH:mm');
                ticket.duration = flight.duration;
                ticket.price = convertCurrency(flight.regularFare.fares[0].amount, currency);
                if (budget >= ticket.price) {
                    ticketsBack.push(ticket);
                }

            });
        });

        return {
            ticketsTo,
            ticketsBack,
            currency
        }
    }
;

export {getTickets};