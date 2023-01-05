import React from 'react'
import TopProps from '../Props/TopProps'
import axios from 'axios'
class Computers extends React.Component {
  state={
    cards : [
      {
       "id":5,
       "name":"Noutbuk HP Pavilion Aero 13-BE0015UR",
       "link": "https://notecomp.az/image/cache/catalog/Notebook/Hewlet%20Packard/363Z9EA/OMEN%20by%20HP%20Laptop%2015-dh1037ur-640x640.jpg",
       "price":3499
  
      },
      {
       "id":6,
       "name":"Noutbuk Asus ROG STRIX G15",
       "link":"data:image/jpeg;base64,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zOsZ4/8AICgSLZnyi2lxu3aeySux8Lmdc5ZwNMrWI4dkjVcj6rfFOO/60z8BtEIwJRzblk8ci35K5ZQa/SfSsHsalmFVLjQWVQoT0bbgt+3fvmStdqFQVUBOgVkH10vew4ZluSt+JIuAxMgNk9LqBDCpnp2sRnAIN73y5C3K+tvSmViek+EI/a3PYjn/APMkyn0bD11qIroQysAwI4g7pemg9BttipWqUaIdqOU1GYiyo5YDS5+v1jbmpPFjN+gCIiAJhbT2dSxFM0q6B6bWupJGoNwQQQQe0GZsQDV//T/Z/q576t448wNn+rnvq3jm0RANX8wNn+rnvq3jjzA2f6ue+reObREA1fzA2f6ue+reOPMDZ/q576t45tEQDV/MDZ/q576t448wNn+rnvq3jm0RANX8wdn+rnvq3jjzB2f6ue+reObREA1fzB2f6ue+reOPMHZ/q576t45tEQDV/MHZ/q576t448wdn+rnvq3jm0RANX8wdn+rnvq3jjzB2f6ue+reObREA1fzB2f6ue+reOPMHZ/q576t45tEQDV/MDZ/q576t448wNn+rnvq3jm0RANX8wNn+rnvq3jjzA2f6ue+reObREA1fzA2f6ue+reOPMDZ/q576t45tEQCN2PsahhlKYamEVjmOrMSbW1LEk/GSURAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA/9k=",
       "price":3749
  
      },
      {
       "id":7,
       "name":"Noutbuk Lenovo İdeaPad 5 Pro 14ITL6",
       "link":"https://bermud.az/164672-large_default/noutbuk-lenovo-ideapad-3-15itl6-82h801c3rk-core-i7.jpg",
       "price":2799
  
      },
      {
       "id":8,
       "name":"Noutbuk Casper Excalibur",
       "link":"https://productimages.hepsiburada.net/s/181/375/110000145984331.jpg",
       "price":2899
  
      }
  
    ],
    searchCard:""
 }
//  async componentDidMount(){
//   const response=await axios.get("http://localhost:3003/cards")
//   this.setState({cards:response.data})
// }
  render(){
     return (
    <div className='d-flex '>
    <TopProps  cards={this.state.cards}/>
  
  </div>

  )
  }
 
}

export default Computers