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

    async getCareer({ view }) {
        return view.render("career");
    }

    async getService({ view }) {
        return view.render("service");
    }

    async getHelp({ view }) {
        return view.render("faq");
    }

    async getProject({ view }) {
        return view.render("portfolio");
    }

}

module.exports = WebController
