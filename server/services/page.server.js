module.exports = function(app) {
    pages: [
        { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
        { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
        {_id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
    ];

    app.get("/api/website/:wid/page", (req, res) => {
        const wid = req.params["wid"];
        let result = []
        
        result = pages.filter(
            (page) => (page.websiteId === wid)
        );

        res.json(result);
    })

    app.post("/api/page", (req, res) => {
        const newPage = req.body;
        pages.push(newPage);
        res.json(newPage);
    })

};