const Sine = () => {
  const [degree, setDegree] = React.useState(0);

  // A reference is basically a state that you can change directly
  // and that won't trigger rerendering of the component
  const lastTimeRef = React.useRef(null);
  const frameRef = React.useRef();

  const animate = time => {
    if (lastTimeRef.current != null) {
      const delta = (time - lastTimeRef.current) * 0.03;
      // Because of the unfortunate side effect of the effect's 
      // second parameter we cannot refer to degree as simple
      // as you might would in an other situation. Luckily for 
      // us though the setter function can accept a function if 
      // the state is needed to calcualte the next value and
      // that function will always have the latest value of the state
      setDegree(previousDegree => (previousDegree + delta) % 360);
    }
    lastTimeRef.current = time;
    frameRef.current = requestAnimationFrame(animate);
  };

  // This effect will run only once because an empty array is passed on
  // as a second argument. That empty array has an unfortunate side-effect
  // though. If we pass on an empty array then the effect will assume that
  // everything is static and it's not worth being up to date with such
  // things as the state changes. This behaviour is true for the animate 
  // function as well so if we are going to try to reference the value of 
  // degree in there then it will always give back the initial value.
  React.useEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return /*#__PURE__*/React.createElement(Draw, { degree: degree });
};

// Note: Math.sin and Math.cos accept a radian value and 360 degrees equal 2 * pi radians
// The sin value is in minus because coordinates in SVGs increase from top to bottom
const sin = value => -Math.sin(value / 180 * Math.PI);
const cos = value => Math.cos(value / 180 * Math.PI);

const Draw = ({ degree }) => /*#__PURE__*/
React.createElement("svg", { width: "1020", height: "240", viewBox: "0 -120 1020 240" }, /*#__PURE__*/

React.createElement("text", { x: "100" }, "sin("), /*#__PURE__*/




React.createElement("line", {
  transform: "translate(310 0)",
  className: "thin",
  x1: cos(degree) * 100,
  y1: sin(degree) * 100,
  x2: degree + 250,
  y2: sin(degree) * 100 }), /*#__PURE__*/



React.createElement("g", { transform: "translate(310 0)" }, /*#__PURE__*/
React.createElement("circle", { className: "thin", cx: "0", cy: "0", r: "100" }), /*#__PURE__*/


React.createElement("path", { d: `
        M 30 0 
        A 30 30 0 ${degree <= 180 ? 0 : 1} 0 ${cos(degree) * 30} ${sin(degree) * 30}
      ` }), /*#__PURE__*/


React.createElement("line", {
  className: "thin",
  x1: "0",
  y1: "0",
  x2: "100",
  y2: "0" }), /*#__PURE__*/

React.createElement("line", {
  className: "thin",
  x1: "0",
  y1: "0",
  x2: cos(degree) * 100,
  y2: sin(degree) * 100 }), /*#__PURE__*/



React.createElement("text", {
  x: cos(degree) * 100 + 10,
  y: sin(degree) * 100 },

Math.round(degree), "\xB0")), /*#__PURE__*/



React.createElement("text", { x: "470" }, ") ="), /*#__PURE__*/




React.createElement("g", { transform: "translate(560 0)" }, /*#__PURE__*/


React.createElement("line", { className: "thin", x1: "0", y1: "0", x2: "360", y2: "0" }), /*#__PURE__*/


React.createElement("polyline", { className: "thin",
  points: Array.from(
  { length: 360 },
  (v, d) => `${d} ${sin(d) * 100}`) }), /*#__PURE__*/


React.createElement("polyline", {
  points: Array.from(
  { length: degree },
  (v, d) => `${d} ${sin(d) * 100}`) }), /*#__PURE__*/




React.createElement("text", { x: degree + 10, y: sin(degree) * 100 },
parseFloat(Math.sin(degree / 180 * Math.PI)).toFixed(4))));





ReactDOM.render( /*#__PURE__*/React.createElement(Sine, null), document.getElementById('app'));