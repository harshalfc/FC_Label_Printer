### Barcode Label Printer

A custom Frappe app for printing barcode labels directly from ERPNext based on **Item Batch**.

Supports **TSC / TSPL-compatible** thermal label printers and integrates with ERPNext to fetch item, batch, and price details automatically.

---

## Features

- Print barcode labels directly from ERPNext.
- Batch-based printing for accurate inventory tracking.
- Supports **EAN-13** and **Code 128** barcode formats.
- Customizable label size (default: `78.6mm × 25.4mm`).
- Multiple quantity printing (handles odd/even quantities efficiently).
- Prints company name, FSSAI number, and other compliance details.
- Works with USB, LAN, or shared network printers.
- Optimized for **TSPL** printer commands.

---

## Doctypes

### 1. Item Barcode
Stores details required for printing barcode labels.

| Field               | Type   | Description |
|---------------------|--------|-------------|
| Item Code           | Link   | Link to Item. |
| Item Name           | Data   | Auto-fetched from Item. |
| Batch No            | Link   | Select Batch for which barcode is printed. |
| Barcode             | Data   | Barcode value (from item or manually entered). |
| Number of Prints    | Int    | Number of labels to print. |

---

## Sample Label Layout


---

## Printer Compatibility

Tested with:
- TSC TTP-244 Pro / TE200 / TE210 / TX200 series  
- TSC DA210 / DA220   

> Works with any printer that supports **TSPL / TSPL2**.

---

## Installation

```bash
cd frappe-bench
bench get-app https://github.com/harshalfc/FC_Label_Printer.git
bench --site your-site install-app fc_label_printer


### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH
bench get-app $URL_OF_THIS_REPO --branch main
bench install-app fc_label_printer
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/fc_label_printer
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

### CI

This app can use GitHub Actions for CI. The following workflows are configured:

- CI: Installs this app and runs unit tests on every push to `develop` branch.
- Linters: Runs [Frappe Semgrep Rules](https://github.com/frappe/semgrep-rules) and [pip-audit](https://pypi.org/project/pip-audit/) on every pull request.


### License

mit
