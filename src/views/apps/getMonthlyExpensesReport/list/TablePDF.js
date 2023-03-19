
import Cookies from "js-cookie"
import jsPDF from "jspdf"
import "jspdf-autotable"
import moment from "moment"
// import pakLogo from '../../../../../assets/images/logo/ISPBS_logo.jpg'

const generatePDF = (ExpenseData, totalAmount) => {

    let yPos = 10
    const doc = new jsPDF()
    //   doc.addImage(pakLogo, 'JPEG', 14, yPos, 50, 25)
    doc.setFontSize(24)
    doc.setFont("arial")
    doc.setFont(undefined, 'bold')
    yPos += 10
    doc.text(`${Cookies.get('name')}`, 65, yPos)
    doc.setFontSize(12)
    doc.setFont("arial")
    doc.setFont(undefined, 'bold')
    yPos += 6
    doc.text(`${Cookies.get('address')}`, 66, yPos)

    doc.setFontSize(12)
    doc.setFont("normal")
    doc.setFont(undefined, 'normal')

    doc.setFontSize(12)
    const tableColumn = ["Sr. No", "Title", "Detail", "Price", "Date"]

    const tableRows = []

    ExpenseData.forEach((data, index) => {
        const TableData = [
            index + 1,
            data.title,
            data.detail,
            data.price.toLocaleString(undefined, { maximumFractionDigits: 2 }),
            data.date
            //   .toLocaleString(undefined, { maximumFractionDigits: 2 }),
        ]
        tableRows.push(TableData)
    })
    const TotalAmountRow = ['', '', '', totalAmount, '']
    tableRows.push(TotalAmountRow)

    yPos += 5

    doc.autoTable(tableColumn, tableRows, {
        startY: yPos,

        columnStyles: {
            0: { halign: 'left' } //cellWidth: 13
        }
    })

    yPos = doc.lastAutoTable.finalY + 5

    doc.setFontSize(12)
    doc.setFont("bold")
    doc.setFont(undefined, 'bold')

    const date = Date().split(" ")

    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4]

    doc.save(`MonthyExpensesReport${dateStr}.pdf`)
}

export default generatePDF