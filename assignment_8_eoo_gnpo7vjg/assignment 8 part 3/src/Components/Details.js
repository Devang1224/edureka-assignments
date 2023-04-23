import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import queryString from 'query-string';
import { API_URL } from './constants';
import '../Styles/Details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: null,
    };
  }
  componentDidMount = () => {
    const qs = queryString.parse(window.location.search);
    console.log(qs);

    const { id } = qs;
    axios
      .get(`${API_URL}/getRestaurantById/${id}`)
      .then((res) => {
        console.log(res.data.RestaurantData);
        this.setState({
          restaurant: res.data.RestaurantData[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { restaurant } = this.state;

    return (
      <div className='container details'>
        {restaurant ? (
          <>
            <div className='images'>
              <Carousel showThumbs={false}>
                {
                  // console.log('kkkkkkkkk'+restaurant)
                  this.state.restaurant.thumb.map((item, index) => {
                    return (
                      <div>
                        <img
                          key={index}
                          src={require(`../${item}`).default}
                          alt='not found'
                        />
                      </div>
                    );
                  })
                }
              </Carousel>
            </div>
            <div className='restName my-3'>
              {restaurant.name}
              <button className='btn fontSizeFixer btn-danger float-end mt-4'>
                Place Online Order
              </button>
            </div>
            <div className='myTabs mb-5'>
              <Tabs>
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Contact</Tab>
                </TabList>
                <TabPanel>
                  <div className='about my-5'>About this place</div>
                  <div className='cuisine'>Cuisine</div>
                  <div className='cuisines'>
                    {restaurant.cuisine.map((item, index) => {
                      return <span key={index}>{item.name},</span>;
                    })}
                  </div>
                  <div className='cuisine mt-3'>Average Cost</div>
                  <div className='cuisines'>
                    {restaurant.min_price} for two people (approx.)
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='cuisine my-5'>
                    Phone Number
                    <div className='text-danger'>
                      {restaurant.contact_number}
                    </div>
                  </div>
                  <div className='cuisine mt-5 '>{restaurant.name}</div>
                  <div className=' fontSizeFixer text-muted mt-2 mx-3'>
                    {restaurant.locality}
                    <br />
                    {restaurant.city}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </>
        ) : (
          <div>Loading......{restaurant}</div>
        )}
      </div>
    );
  }
}
