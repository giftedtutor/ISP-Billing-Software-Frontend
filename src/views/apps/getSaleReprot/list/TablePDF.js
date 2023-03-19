
import Cookies from "js-cookie"
import jsPDF from "jspdf"
import "jspdf-autotable"
import moment from "moment"
// import pakLogo from '../../../../../assets/images/logo/ISPBS_logo.jpg'

const generatePDF = (ExpenseData) => {

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
    const tableColumn = ["Sr. No", "PO No", "Total", "Discount", "Total After Discount"]

    const tableRows = []

    ExpenseData.forEach((data, index) => {
        const TableData = [
            index + 1,
            data.serial_no,
            data.total.toLocaleString(undefined, { maximumFractionDigits: 2 }),
            data.discount.toLocaleString(undefined, { maximumFractionDigits: 2 }),
            data.total_after_discount.toLocaleString(undefined, { maximumFractionDigits: 2 }),
            data.date
            //   .toLocaleString(undefined, { maximumFractionDigits: 2 }),
        ]
        tableRows.push(TableData)
    })

    yPos += 5

    doc.autoTable(tableColumn, tableRows, {
        startY: yPos,

        columnStyles: {
            0: { halign: 'left' }, //cellWidth: 13
            3: { halign: 'left' },
            4: { halign: 'left' },
            5: { halign: 'left' }
        }
    })

    yPos = doc.lastAutoTable.finalY + 5

    doc.setFontSize(12)
    doc.setFont("bold")
    doc.setFont(undefined, 'bold')

    const date = Date().split(" ")

    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4]

    doc.save(`SaleReport${dateStr}.pdf`)
}

export default generatePDF