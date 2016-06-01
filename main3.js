//main.js
defineClass("ViewController", {
    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
        var row = indexPath.row()
        if (self.dataList().count() > row) {  //加上判断越界的逻辑
            var tableViewCtrl = require('UIViewController').alloc().init()
            var redColor = require('UIColor').blueColor()
            tableViewCtrl.view().setBackgroundColor(redColor)
            self.navigationController().pushViewController_animated(tableViewCtrl, YES)
        }
    }
})