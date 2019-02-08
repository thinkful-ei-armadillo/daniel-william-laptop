import React, { Component } from 'react';
import Summary from './SummaryTotal/Summary'
import Total from './SummaryTotal/Total';
// import FEATURES from './index';
import Features from './SummaryTotal/Features/Features';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

// this stays here as a method so it can be used as a prop for all children
  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    // this needs to be its own component
    // const features = Object.keys(this.props.features)
    //       .map(key => {
    //         const options = this.props.features[key].map((item, index) => {
    //           const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
    //           const featureClass = 'feature__option ' + selectedClass;
    //           return <li key={index} className="feature__item">
    //             <div className={featureClass}
                  
    //               onClick={e => this.updateFeature(key, item)}>
    //                 { item.name }
    //                 ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //                   .format(item.cost) })
    //             </div>
    //           </li>
    //         });

    //         return <div className="feature" key={key}>
    //           <div className="feature__name">{key}</div>
    //           <ul className="feature__list">
    //             { options }
    //           </ul>
    //         </div>
    //       });      

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          {/*     // this needs to be its own component */}
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3> 
            {/* { features } */}
            <Features features={this.props.features} 
            selected={this.state.selected}
            updateFeature={item => this.updateFeature(item)}
            />
          </section>
          {/*     // this needs to be its own component */}
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Summary selected={this.state.selected} />
            <Total selected={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
