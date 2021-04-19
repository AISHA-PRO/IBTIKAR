import React, { Component } from 'react'
import './Styles/press.css'
import Icc from './img/animate_icon/icon_12.svg'
import Icc2 from './img/animate_icon/icon_13.svg'
import Arrow from './img/animate_icon/Arrow.svg'
import Pagination from 'react-bootstrap/Pagination'
import ArrowLeft from './img/animate_icon/ArrowLeft.svg'
export class Press extends Component {
    state={
        data:[],
        display:{visibility: "hidden"},
        s:false
    }
    fetchUrl='https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=4894daaefd53428c9a4f091f448ba18b';
    fetching=()=>{
        fetch(this.fetchUrl).then(r=>r.json()).then(j=>{j["articles"].forEach((ele)=>{
            this.setState({data:[...this.state.data,<article>
                <div className="pic">
                  <img src={ele.urlToImage} alt="Article_Picture" />
                </div>
                <div className="cont">
                <h3>{ele.title}</h3>
                <p>{ele.content}</p>
                </div>
                </article>]})
            })
        });
        }
        
        
        componentDidMount(){
            this.fetching()
        }
        
        hideSeek=()=>{
                if(!this.state.s){
                    this.setState({display:{visibility: "visible"},s:!this.state.s})}
                else {
                    this.setState({display:{visibility: "hidden"},s:!this.state.s})}
                
            
        }
        cons
        render() {
            return (
                <div className="pressContainer">
                {/* The background images are here*/ }
                <img src={Icc} alt="dfds"/>
                <img src={Icc2} alt="dfds"/>
                <div className="pressMainWrapper">
                {/* Main Wrapper is here*/ }
                <h1>Press</h1>
                <h3>Press Releases and Coverage</h3>
                <div className="wrapper">
                {/* Articles go here */ }
                {/* <article>
                <div className="pic">
                <img src={ArtImage} alt="Article_Picture" />
                </div>
                <div className="cont">
                <h3>Palestinian Venture Capital Firm Secures Additional Capital</h3>
                <p>Palestinian Fund Ibtikar announced it has raised an additional $2.5 million from investors for its early stage venture capital fund. The capital infusion increases the...</p>
                </div> 
                </article> */}
                {this.state.data}
                </div>
                <Pagination className="pagination">
                 {/* <Pagination.Prev  className="paginationElements" style={this.state.display}/> */}
                 <Pagination.Item disabled className="paginationElements" style={this.state.display} ><img src={ArrowLeft} alt=""/></Pagination.Item>
                <Pagination.Item className="paginationElements" >{1}</Pagination.Item>
                <Pagination.Item  className="paginationElements"  onClick={this.hideSeek}>{2}</Pagination.Item>
                <Pagination.Ellipsis  disabled className="paginationElements"/>
                <Pagination.Item disabled className="paginationElements">{4}</Pagination.Item>
                <Pagination.Item disabled className="paginationElements"><img src={Arrow} alt=""/></Pagination.Item>
                {/* <Pagination.Next  className="paginationElements" id="pNext"/> */}
                </Pagination>
                </div>
                </div>
                )
            }
        }
        
        export default Press
        
