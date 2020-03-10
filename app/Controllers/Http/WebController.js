'use strict'

const db = use("Database");

class WebController {

    async index({ view }) {
        const news = await db.table("news").orderBy("id", "DESC")
        return view.render("welcome", { news: news });
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
        const data = await db.table("products as a")
                        .select("a.*", "b.name as cat_name")
                        .leftJoin("categories as b", "a.category_id", "b.id")                        
        const categories = await db.table("categories").orderBy("name", "asc")
        return view.render("portfolio", { categories: categories, data: data });
    }

}

module.exports = WebController
