// **  Component imports
import { Container, Row, Col } from "reactstrap"
import DashState from './context/dashState'

// ** User List Component
import StatsCard from './StatsCard'
import SupplierLedgerGraph from "./supplierLedgerGraph"
import ClientLedgerGraph from "./clientLedgerGraph"
import InventoryItemStatus from "./inventoryItemStatus"
import ProductionOrderStatus from "./productionOrderStatu"
import VehicleStatus from "./vehicleStatus"
import ProjectTimeline from "./projectTimeline"
import MonthWiseSale from "./monthWiseSale"

// import ProjectCompletion from "./projectCompletion"  

// ** Styles
import "@styles/react/apps/app-users.scss"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import Cookies from "js-cookie"

const ViewDash = () => {
  const history = useHistory()

  useEffect(() => {
    if (Cookies.get('userID') === undefined || Cookies.get('userID') === null) {
      history.push('/ISPBS/login')
    }
  })

  return (
    <DashState>
    <Container >
      <Row> 
        <Col> <StatsCard cols={{ md: '3', sm: '6' }}/></Col>
      </Row>
      <Row>
      <Col  xs={12} md={6}>  <SupplierLedgerGraph /></Col>
       <Col  xs={12} md={6}>  <ClientLedgerGraph /></Col>        
      </Row>
      <Row>
      <Col  xs={12} md={6}> <ProjectTimeline/> </Col>
       <Col  xs={12} md={6}> <MonthWiseSale/> </Col>        
      </Row>
      
      <Row>
      <Col xs={12} md={12}>  <InventoryItemStatus /></Col>
         
      </Row>

    </Container>
    </DashState>
  )
}

export default ViewDash
