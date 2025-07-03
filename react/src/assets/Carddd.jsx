import { Card, Col } from 'react-bootstrap';

const ReusableCard = ({ 
  title = "Default Title", 
  text = "Default card text", 
  xlSize,      // Extra large screens
  lgSize,      // Large screens  
  mdSize = 4,  // Medium screens
  smSize = 12, // Small screens
  xsSize,      // Extra small screens
  className = "shadow-sm h-100",
  children     // {children} is a special built-in prop in React that allows components to render any nested content between their opening and closing tags. It is not a default component, but rather a convention and feature of how props work in React. You don't have to define children explicitly, but if you want to access it inside the component, you should extract it from props like you're doing.

}) => {
  return (
    <Col 
      xl={xlSize} 
      lg={lgSize} 
      md={mdSize} 
      sm={smSize} 
      xs={xsSize}
    >
      <Card className={className}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          {children}        {/* children can be anything: JSX elements, strings, functions, arrays, etc. */}
        </Card.Body>
      </Card>
    </Col>
  );
};


{/*
Bootstrap breakpoints for responsive design:

xs = Extra small devices (<576px) - phones
sm = Small devices (≥576px) - tablets
md = Medium devices (≥768px) - small laptops
lg = Large devices (≥992px) - desktops
xl = Extra large devices (≥1200px) - large desktops
xxl = Extra extra large devices (≥1400px) - larger desktops

Bootstrap uses a 12-column system:

mdSize={4} = 4/12 = 33.33% width
mdSize={6} = 6/12 = 50% width
mdSize={12} = 12/12 = 100% width

  */}



export default ReusableCard;