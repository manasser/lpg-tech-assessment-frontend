from xlrd import open_workbook
book = open_workbook("Data/Major Cities in US States.xlsx")
for sheet in book.sheets():
    for rowidx in range(sheet.nrows):
        row = sheet.row(rowidx)
        for colidx, cell in enumerate(row):
            if "dallas" in cell.value.lower() :
                print(sheet.name)
                print(colidx)
                print(rowidx)

                print(sheet.cell(rowidx, 0).value)
                region = sheet.cell(rowidx, 0)
                #	region.replace('text:', '')
                print(region)
