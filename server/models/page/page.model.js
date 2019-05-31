const mongoose = require("mongoose");
const PageSchema = require("./Page.schema");
const PageModel =  mongoose.model("PageModel", PageSchema);

 // Find all pages for website.
    PageModel.findAllPagesForWebsite = (wid) => {
        return  PageModel.find({websiteId: wid});
    }

 // Create page
    PageModel.createPage = (page) => {
        return PageModel.create(page);
    }
// Get page by ID
    PageModel.findPageById = (pid) => {
        return PageModel.findById(pid);
    }
    

// Delete page 
    PageModel.deletePage = (pid) => {
        return PageModel.deleteOne({_id: pid});
    }

// Update page
    PageModel.updatePage =(page) => {
        return PageModel.updateOne({_id: Page._id}, page);
    }

 module.exports = PageModel;