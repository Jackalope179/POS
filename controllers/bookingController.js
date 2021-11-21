let bookingModel = require('../models/booking');
class bookingController {
    async getTableBookingPage(req, res, next) {

        req.session.url = "/datban";

        let login = 0;
        let phone = 0;

        if (req.session.login == 1) {
            login = 1
            phone = req.session.phone
        }
        console.log(phone);
        let bookingList = await bookingModel.getBooking(phone);

        let bookingListRender = bookingList.map(booking => {
            let dateString = booking.date.getDate() + "/" + (booking.date.getMonth() + 1) + "/" + booking.date.getFullYear();

            return {
                ...booking,
                date: dateString,
            }
        })

        console.log("Booking", bookingList);
        res.render("tablebooking", {
            login: login,
            bookingList: bookingListRender
        });
    }

    async deleteBooking(req, res, next) {
        await bookingModel.deleteBooking(Number(req.body.bookingid));
        res.redirect("/datban");
    }

    async saveBooking(req, res) {
        req.session.url = "/datban"

        let phone = req.session.phone;
        let customerSeat = req.body.customerSeat;
        let startTime = req.body.startTime;
        let endTime = req.body.endTime;
        let note = req.body.note;
        let date = req.body.date;

        await bookingModel.saveBooking(customerSeat, startTime, endTime, date, note, phone);
        res.redirect("/datban");

    }
}
module.exports = new bookingController();