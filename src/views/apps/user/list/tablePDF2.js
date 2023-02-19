// list/tablePDF.js

import jsPDF from "jspdf"
import "jspdf-autotable"
// Date Fns is used to format the dates we receive
// from our API call
// import { format } from "date-fns"

// define a generatePDF function that accepts a tickets argument
const SigngeneratePDF = sorted => {

  const doc = new jsPDF()

// It can parse html:
// <table id="my-table"><!-- ... --></table>
doc.autoTable({ html: '#my-table2' })

// Or use javascript directly:
doc.autoTable({
  head: [['', 'QUALITY INSPECTION FOR SIGNBOARDS', '']],
  body: [
    ['Project Name:'],
    ['Client:'],
    ['Size of Signboard:'],
    ['Quantity of Signboard:']
    // ...
  ]
})
doc.autoTable({ html: '#my-table' })

// Or use javascript directly:
doc.autoTable({
  head: [['Inspection Plan', 'Requirement', 'Criteria', 'Remarks']],
  body: [
    ['Size Check', 'Confirm the size of the signboard from the Quotation/Work Order', 'Size must be completely accurate', ''],
    ['Poles/Pipe Check', 'Check the fabrication of pole/pipe', 'Poles must be properly fabricated', ''],
    ['Fabrication Check', 'Check the welding of the signboard, there should be no welding dents on the signboard', 'No welding dent is acceptable', ''],
    ['Corners Check', 'Check the corners of the signboard, they should be round', 'Only round corners are acceptable', ''],
    ['Paint Coating Check', 'Check the welding spots, they should be coated. Also check the back frame, it should be painted. Check the MS Pipes/Poles, they should be painted', 'Without paint coating, it is not acceptable', ''],
    ['Lamination Check', 'The reflective tape must be properly applied, there should be no bubbles or torn out sheet', 'Bubbles or Torn out sheet is not acceptable', ''],
    ['Digital Print Check', 'The printing should be clear, and the ink should not be spreaded', 'Only clear printing is acceptable', ''],
    ['Alignment Check', 'The letters or logos should be properly and straight aligned according to the drawings', 'Alignment must be straight', ''],
    ['Spelling Check', 'Check the spellings of the words', 'There should be NO error in spellings', '']
   
    // ...
  ]
})

doc.save('table.pdf')
  // initialize jsPDF
  // const doc = new jsPDF()

  // // define the columns we want and their titles
  // const tableColumn = ["Supplier ID", "Name", "Address", "City", "Contact #", "Province", "Previous Balance"]
  // // define an empty array of rows
  // const tableRows = ['e , e', 'df']

  // // for each ticket pass all its data into an array
  // // sorted.forEach(data => {
  // //   const TableData = [
  // //     data.supplier_id,
  // //     data.name,
  // //     data.address,
  // //     data.city,
  // //     data.contact_no,
  // //     data.province,
  // //     data.previous_balance
  // //     // called date-fns to format the date on the ticket
  // //   //   format(new Date(data.updated_at), "yyyy-MM-dd")
  // //   ]
  // //   // push each tickcet's info into a row
  // //   tableRows.push(TableData)
  // // })


  // // startY is basically margin-top
  // doc.autoTable(tableColumn, tableRows, { startY: 20 })
  // const date = Date().split(" ")
  // // we use a date string to generate our filename.
  // const dateStr = date[0] + date[1] + date[2] + date[3] + date[4]
  // // ticket title. and margin-top + margin-left
  // doc.text("Suppliers Information List", 14, 15)
  // // we define the name of our PDF file.
  // doc.save(`Suppliers_${dateStr}.pdf`)
}

export default SigngeneratePDF