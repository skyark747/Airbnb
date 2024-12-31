
const calculateDays=(dateRange)=> {
    const months = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    const [startDateStr, endDateStr] = dateRange.split(" - ");

    const [startYear, startMonth, startDay] = startDateStr.split("/");
    const startDate = new Date(
        parseInt(startYear),
        months[startMonth],
        parseInt(startDay)
    );

    const [endYear, endMonth, endDay] = endDateStr.split("/");
    const endDate = new Date(
        parseInt(endYear),
        months[endMonth],
        parseInt(endDay)
    );

    const differenceInTime = endDate - startDate;
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);
    return differenceInDays;
}

export default calculateDays;
