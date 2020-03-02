'use strict'

const db = use("Database");

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
        const data = await db.table("helps").orderBy("id", "DESC")
        return view.render("faq", { data: data });
    }

    async getProject({ view }) {
        return view.render("portfolio");
    }

}

module.exports = WebController
