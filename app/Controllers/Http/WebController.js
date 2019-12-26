'use strict'

class WebController {

    async index({ view }) {
        return view.render("welcome");
    }

    async getAbout({ view }) {
        return view.render("about");
    }

    async getContact({ view }) {
        return view.render("contact");
    }

}

module.exports = WebController
