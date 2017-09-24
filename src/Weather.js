import React,{Component} from 'react'
import './index.css'

const cityCode = '101010100'

class Weather extends Component{
  constructor(){
    super(...arguments)
    this.state = {weather: null}
    this.onSelectChange = this.onSelectChange.bind(this)
    this.getWeather = this.getWeather.bind(this)
  }
  onSelectChange = (event) => {
    let cityCode = event.target.value
    cityCode === "" ? null : cityCode
    if(cityCode){
        this.getWeather(cityCode)
    }else{
      this.setState(...this.state, {weather: null})
    }
  }

  getWeather = (cityCode) => {
    // alert(this.state.cityCode)
    const apiUrl = `/data/cityinfo/${cityCode}.html`
    fetch(apiUrl).then((response) => {
      if(response.status !== 200){
        throw new Error('Fail to get response with status ' + response.status)
      }
      response.json().then((responseJson) => {
        this.setState(...this.state, {weather: responseJson.weatherinfo})
      }).catch((error) => {
        this.setState(...this.state, {weather: null})
      })}
    ).catch((error) => {
      this.setState(...this.state, {weather: null})
    })
  }
  render(){
    console.log(this.state)
    var weatherInfo = ""
    if(this.state.weather){
        const {city, weather, temp1, temp2} = this.state.weather
        weatherInfo = `${city} ${weather} 最高气温 ${temp2} 最低气温 ${temp1}`
    }else{
       weatherInfo = "暂无数据"
    }
    return (
      <div className='weather-container'>
       <div className='select-city'>
         <div className='label'>城市:</div>
         <div>
           <select className="city-selector" onChange={this.onSelectChange}>
             <option value="">请选择城市</option>
             <option value="101010100">北京</option>
             <option value="101020100">上海</option>
             <option value="101030100">天津</option>
             <option value="101040100">重庆</option>
             <option value="101050101">哈尔滨</option>
             <option value="101250101">长沙</option>
             <option value="101251201">怀化</option>
             <option value="101260101">贵阳</option>
           </select>
         </div>
        </div>
        <div className='weather-result'>
          <div className='label'>天气:</div>
          <div>{weatherInfo}</div>
        </div>
      </div>
    )
  }
}

export default Weather;
