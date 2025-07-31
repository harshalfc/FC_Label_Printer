// Copyright (c) 2025, faircode and contributors
// For license information, please see license.txt

frappe.ui.form.on("Item Barcode Label", {
	refresh:function(frm) {
        frm.set_query("batch_no", "items_details", function (doc, cdt, cdn) {
        let child = locals[cdt][cdn];
          return {
            "filters": {
              "item": child.item_code
            },
          };
        });

	},
    get_barcodes:function(frm) {
        if (frm.doc.items_details && frm.doc.items_details.length > 0) {
            let items = frm.doc.items_details.map(item => item.item_code);
            console.log(items)
            frappe.call({
                method: "fc_label_printer.barcode_label_printer.doctype.item_barcode_label.item_barcode_label.get_item_details_barcode",
                args: {
                    item_codes: items,
                },
                callback: function (r) {
                    if (r.message) {
                            // console.log(r.message);
                            let result_obj = r.message;
                                frm.doc.items_details.forEach(item => {
                                    if (result_obj[item.item_code]) {
                                        // console.log(result_obj[item.item_code]);
                                        frappe.model.set_value(item.doctype, item.name, 'barcode', result_obj[item.item_code]['barcode'])
                                    }
                                });
                                frm.save()
                    }
                }
            })
        }
    }
});

frappe.ui.form.on('Item Barcode Table', {
    item_code: function(frm, cdt, cdn) {
        let child = locals[cdt][cdn];
        frappe.model.set_value(cdt, cdn, 'batch_no', '');
    },
});