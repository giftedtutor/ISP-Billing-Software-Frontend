import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, Activity, Archive, TrendingDown, Users, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, PieChartFill, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import baseURL from '../../../baseURL/baseURL'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

const StatsCard = ({ cols }) => {
  const [data2, setData2] = React.useState([])
  const [isLoading, setLoading] = useState(true)
  const history = useHistory()
  const data = [
    {
      title: data2.customers,
      subtitle: 'Customers',
      color: 'light-primary',
      icon: <Users size={24} />,
      navLink: '/ISPBS/apps/user/list'
    },
    {
      title: data2.totalClients,
      subtitle: 'Clients',
      color: 'light-info',
      icon: <Users size={24} />,
      navLink: '/ISPBS/apps/client/list'
    },
    {
      title: data2.totalEmployees,
      subtitle: 'Employees',
      color: 'light-danger',
      icon: <Users size={24} />,
      navLink: '/ISPBS/apps/employee/list'
    },
    {
      title: data2.totalProducts,
      subtitle: 'Stocks',
      color: 'light-danger',
      icon: <Archive size={24} />,
      navLink: '/ISPBS/apps/headOfficeInventory/list'
    },
    {
      title: data2.totalItems,
      subtitle: 'Items',
      color: 'light-success',
      icon: <Box size={24} />,
      navLink: '/ISPBS/apps/stock/updateItemRates'
    },
    {
      title: data2.totalProjects,
      subtitle: 'Projects',
      color: 'light-success',
      icon: <Activity size={24} />,
      navLink: '/ISPBS/apps/project/listing'
    },
    {
      title: data2.inprogressProducionOrder,
      subtitle: 'Inprogress Production Orders',
      color: 'light-success',
      icon: <TrendingUp size={24} />,
      navLink: '/ISPBS/apps/productionOrderUPVC/list'
    },
    {
      title: data2.canceledProducionOrder,
      subtitle: 'Canceled Production Orders',
      color: 'light-success',
      icon: <TrendingDown size={24} />,
      navLink: '/ISPBS/apps/productionOrderUPVC/list'
    },
    {
      title: data2.completedProducionOrder,
      subtitle: 'Completed Production Orders',
      color: 'light-success',
      icon: <TrendingUp size={24} />,
      navLink: '/ISPBS/apps/productionOrderUPVC/list'
    }
  ]
 
  useEffect(() => {
    Axios.get(`${baseURL}/generals/getDashboardStats?user_id=${Cookies.get("id")}`)
    .then(response => {
      setData2(response.data.data)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [])

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar onClick={() => {
              history.push(item.navLink)
            }} color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 style={{paddingTop:7}} className='font-weight-bolder mb-0'>{item.title}</h4>
              <CardText style={{paddingBottom:20}} className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    isLoading ? ( 
      <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>)  : (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Dashboard</CardTitle>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>)
  )
}

export default StatsCard
