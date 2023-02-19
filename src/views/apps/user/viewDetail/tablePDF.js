// list/tablePDF.js

import jsPDF from "jspdf"
import "jspdf-autotable"
import Cookies from 'js-cookie'
// Date Fns is used to format the dates we receive
// from our API call
// import { format } from "date-fns"

// define a generatePDF function that accepts a tickets argument
const generatePDF = filterName => {
  // initialize jsPDF
  const doc = new jsPDF()

  const role = Cookies.get('role')
  let valB
  if (role === 'STORE' || role === 'ACCOUNTANT' || role === 'PROCUREMENT' || role === 'PRODUCTION_MANAGER' || role === 'FACTORY_MANAGER' || role === 'OPERATIONS_MANAGER') {
    valB = true
  } else {
    valB = false
  }

  // define the columns we want and their titles
  const tableColumn = ["Sr. No", "Name", "Address", "City", "Contact No", 'Email', 'Nature Of Work', `${valB === true ? '' : "Previous Balance (PKR)"}`]
  // define an empty array of rows
  const tableRows = []

  // for each ticket pass all its data into an array
  filterName.forEach((data, index) => {
    const TableData = [
      index + 1,
      data.name,
      data.address,
      data.city,
      data.contact_no,
      data.email,
      data.natureOfWork,
      valB === true ? '' : data.previous_balance
      // called date-fns to format the date on the ticket
      //   format(new Date(data.updated_at), "yyyy-MM-dd")
    ]
    // push each tickcet's info into a row
    tableRows.push(TableData)
  })


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, {
    startY: 20,
    columnStyles: {
      0: { halign: 'center' },
      3: { halign: 'center' },
      4: { halign: 'right' },
      7: { halign: 'right' }
    }
  })
  const date = Date().split(" ")
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4]
  // ticket title. and margin-top + margin-left
  doc.text("Suppliers Information List", 14, 15)
  // we define the name of our PDF file.
  doc.save(`Suppliers_${dateStr}.pdf`)
}

export default generatePDF