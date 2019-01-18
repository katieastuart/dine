// import React from "react";
// import "react-input-range/lib/css/index.css";
// import InputRange from "react-input-range";
// import "./RangeSlider.css";

// class RangeSlider extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { distance: 2, minValue: 3, maxValue: 1 };
//   }

//   render() {
//     return (
//       <div class="container">
//         <InputRange
//           className="rangeSlider"
//           step={1}
//           maxValue={4}
//           minValue={0}
//           value={this.state.distance}
//           onChange={distance => this.setState({ distance })}
//         />
//         <InputRange
//           className="rangeSlider"
//           step={1}
//           maxValue={4}
//           minValue={0}
//           value={this.state.minValue}
//           onChange={minValue => this.setState({ minValue })}
//         />
//         <InputRange
//           className="rangeSlider"
//           step={1}
//           maxValue={4}
//           minValue={0}
//           value={this.state.maxValue}
//           onChange={maxValue => this.setState({ maxValue })}
//         />
//       </div>
//     );
//   }
// }
// export default RangeSlider;
