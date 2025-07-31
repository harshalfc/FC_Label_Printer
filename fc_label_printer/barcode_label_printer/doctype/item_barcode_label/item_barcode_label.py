# Copyright (c) 2025, faircode and contributors
# For license information, please see license.txt

import frappe
import json
from frappe.model.document import Document
	

class ItemBarcodeLabel(Document):
	pass


@frappe.whitelist()
def get_item_details_barcode(item_codes):
	if not item_codes:
		return []
	
	if isinstance(item_codes, str):
		item_code_list = json.loads(item_codes)
		# item_codes = [item_code.strip("'") for item_code in item_codes if item_code.strip('"')]
	
	else:
		item_code_list = item_codes

	barcodes = {}
	
	for item_code in item_code_list:
		item_doc = frappe.get_doc("Item", item_code)
		if item_doc:
			item_barcode = item_doc.barcodes[0].get("barcode") if item_doc.barcodes else None
			if item_barcode:
				barcodes[item_code] = {
					"item_code": item_code,
					"barcode": item_barcode
				}
	
	if barcodes:
		return barcodes
	# return item_codes