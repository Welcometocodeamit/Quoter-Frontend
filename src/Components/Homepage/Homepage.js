import './Homepage.css'
import Card from '../../Card/Card'
import React, { Component } from 'react'



export default class Homepage extends Component {

  
    
    constructor(){
        super();
        this.state={
            data:[],
            refinedData:[]
        }
        this.getData = this.getData.bind(this);
    }

    

    async componentDidMount() {
        try {
          let url = "https://quoter-hus1.onrender.com/api/quotes";
          let response = await fetch(url);
          let parsedData = await response.json();
          const randomIndex = Math.floor(Math.random() * parsedData.data.length);
          const refinedData = parsedData.data[randomIndex];
          // console.log("component run")
      
          this.setState({ data: parsedData.data, refinedData  }, () => {
            // console.log(randomIndex);
            // console.log(this.state.refinedData);
          });
        } catch (err) {
          console.error(err);
        }
  
      }

      async getData() {
        try {
          let url = "https://quoter-hus1.onrender.com/api/quotes";
          let response = await fetch(url);
          let parsedData = await response.json();
          let fullyParsedData = parsedData.data;
          console.log(fullyParsedData);
          let uname = document.getElementById('inputname').value;
          let name = uname.slice(0, 4).toLowerCase();
          for (let i = 0; i < fullyParsedData.length; i++) {
            let dataName = fullyParsedData[i].author.slice(0, 4).toLowerCase();
            if (dataName === name) {
              this.setState({ refinedData: fullyParsedData[i] });
              console.log(this.state.refinedData);
            }
          }
        } catch (err) {
          console.error(err);
        }
      }
      

  render() { 
    return (
        <div id='homepage'>
            <h1 id='partner'>Quote of the Day</h1>
            <div id='inputdiv'>
                      <input type='text' placeholder='Search by Author name' id='inputname'/>
                        <button id='btn' onClick={this.getData}>Search</button>
                    </div>
            <Card content={this.state.refinedData.content} image={this.state.refinedData.image} date={this.state.refinedData.date} author={this.state.refinedData.author}/>
        </div>
    )
  }
}

