
import React from "react"

import ReactDOM from "react-dom/client"



const Header = () => {
    return (
        <div className="header">
            <div className="Logo-container">
                <img scr = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s' alt="logo"/>
            </div>
            <div className="Nav-item"> 
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

const Restaurant = (props) => {
   
  const {RestaurantData} = props;

    return (
        <div className="res-card"   style={{backgroundColor: "gray"}}>
            <img className="res-logo"
            src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + RestaurantData.cloudinaryImageId }alt = "res-img"/>
            
            <h3>{RestaurantData.name}</h3>
            <h4>{RestaurantData.cuisines.join(" ,")}</h4>
            <h4>{RestaurantData.avgRating}</h4>
            <h4>{RestaurantData.sla.deliveryTime}</h4>
            <h4>{RestaurantData.aggregatedDiscountInfoV3.subHeader}</h4>
        </div>

    )
}

const Restaurantobj = {"id": "39242",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b321fb82-d2f2-4c19-a333-e8b0e8df8134_39242.JPG",
                      "locality": "Eldeco Station 1 Mall",
                      "areaName": "Sector 12",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.1,
                      "parentId": "547",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-13 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    }

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <h3>Search</h3>
            </div>
            <div className="restaurant-container">
                <Restaurant RestaurantData = {Restaurantobj}/>
 </div>
 </div>
)
}

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)
