// list/tablePDF.js

import jsPDF from "jspdf"
import "jspdf-autotable"
// Date Fns is used to format the dates we receive
// from our API call
// import { format } from "date-fns"

// define a generatePDF function that accepts a tickets argument
const generatePDF = sorted => {
  // initialize jsPDF
  const doc = new jsPDF()

  // define the columns we want and their titles
  const tableColumn = ["Sr. No", "Name", "Designation", "Contact No"]
  // define an empty array of rows
  const tableRows = []

  // for each ticket pass all its data into an array
  sorted.forEach((data, index) => {
    const TableData = [
      index + 1,
      data.name,
      data.designation,
      data.contact_no
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
      3: { halign: 'right' }
    }
  })
  const date = Date().split(" ")
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4]
  // ticket title. and margin-top + margin-left
  doc.text("Concerned Persons List of Supplier", 14, 15)
  // we define the name of our PDF file.
  doc.save(`ConcernedPersonsOfSuppliers_${dateStr}.pdf`)
}

export default generatePDF