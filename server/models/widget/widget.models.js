const mongoose = require("mongoose");
const WidgetSchema = require("./widget.schema");
const WidgetModel = mongoose.model("WidgetModel", WidgetSchema)

    // Create new Widget
        WidgetModel.createWidget = (widget) => {
            return WidgetModel.create(widget);
    }

   // Find Widget for page
        WidgetModel.findWidgetsForPage = (pid) => {
            return WidgetModel.find({pageId: pid });
    }

    // Find Widget by ID
    WidgetModel.findWidget = (wgid) => {
        return WidgetModel.findById(wgid);
    }

    // Delete Widget
    WidgetModel.deleteWidget = (wgid) => {
        return WidgetModel.deleteOne({_id: wgid} );
    }

    // Update Widget
    WidgetModel.updateWidget = (widget) => {
        return WidgetModel.updateOne({_id: widget._id}, widget);
    }

module.exports = WidgetModel;